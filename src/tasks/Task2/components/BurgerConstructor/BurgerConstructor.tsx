import { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Logs } from '../../../../components/Logs';
import { Burger } from '../../logic/Burger';
import classes from './BurgerConstructor.module.scss';
import { ingredientsMap } from '../../logic/ingredientsFactory';
import { Logger } from '../../../../utils';

export const BurgerConstructor = observer(() => {
  const [logger] = useState(new Logger());
  const [burger] = useState(new Burger(logger));

  return (
    <div className={classes.root}>
      <div className={classes.ingredientButtons}>
        {Object.keys(ingredientsMap).map((ingredient) => (
          <button key={ingredient} onClick={() => burger.addIngredient(ingredient)} disabled={burger.isActionsDisabled}>
            + {ingredient}
          </button>
        ))}
        <button key="Бургер дня" onClick={burger.burgerOfTheDay} disabled={burger.isActionsDisabled}>
          Бургер дня
        </button>
        <button key="Cбросить" onClick={burger.resetBurger} disabled={burger.isActionsDisabled}>
          Сбросить
        </button>
      </div>

      <div className={classes.burgerInfo}>
        <div>
          <h3>Текущие компоненты:</h3>
          {burger.ingredients.map((ingredient, index, { length }) => (
            <span key={ingredient.id}>
              {ingredient.name}
              {index + 1 !== length && ', '}
            </span>
          ))}
        </div>
        <div>
          <h3>Последние цены на ингредиенты:</h3>
          {Object.entries(burger.actualPrices).map(([name, price]) => (
            <div key={name}>
              {name}: <b>{price} ₽</b>
            </div>
          ))}
        </div>
      </div>

      <h2>Стоимость бургера: {burger.isUpdatingCost ? <b>Обновление цены...</b> : <b>{burger.cost} ₽</b>}</h2>

      <Logs logger={logger} height={240} />
    </div>
  );
});
