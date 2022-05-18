import { action, computed, makeObservable, observable, reaction } from 'mobx';
import { Logger, sleep } from '../../../utils';
import { Bun } from './Bun';
import { Ingredient } from './Ingredient';
import { ingredientsFactory } from './ingredientsFactory';

export class Burger {
  private _cost = 0;

  private updatingCost: boolean = false;

  private updatingRecipe: boolean = false;

  public readonly ingredients = observable<Ingredient>([new Bun()]);

  public readonly actualPrices: Record<string, number> = {};

  private readonly logger: Logger;

  constructor(logger: Logger) {
    this.logger = logger;

    makeObservable<Burger, '_cost' | 'updatingCost' | 'updatingRecipe' | 'updateCost'>(this, {
      _cost: observable,
      updatingCost: observable,
      updatingRecipe: observable,
      actualPrices: observable,
      updateCost: action,
      cost: computed,
    });

    reaction(() => this.ingredients.slice(), this.updateCost);

    reaction(
      () => this.cost,
      (cost) => {
        this.logger.log(
          <span>
            Цена обновлена - <b>{cost}</b>
          </span>,
        );
      },
    );
  }

  public get cost(): number {
    return this._cost;
  }

  public set cost(payload: number) {
    this._cost = payload;
  }

  public get isUpdatingCost(): boolean {
    return this.updatingCost;
  }

  public get isActionsDisabled(): boolean {
    return this.updatingCost || this.updatingRecipe;
  }

  public addIngredient = (ingredient: string): void => {
    this.logger.log(
      <span>
        Добавление ингредиента <b>{ingredient}</b>
      </span>,
    );
    try {
      this.ingredients.push(ingredientsFactory(ingredient));
    } catch (error) {
      this.logger.error(
        <span>
          Неизвестный ингредиент <b>{ingredient}</b> пропущен!
        </span>,
      );
    }
  };

  public resetBurger = () => {
    this.logger.log('Сброс ингредиентов бургера');
    this.ingredients.replace([new Bun()]);
  };

  public burgerOfTheDay = async (): Promise<void> => {
    const recipe = await this.getBurgerOfTheDayRecipe();
    this.logger.log(
      <span>
        Рецепт бургера дня получен: <b>{recipe}</b>
      </span>,
    );

    this.resetBurger();

    const ingredients = recipe.split(', ');
    ingredients.forEach((ingredient) => {
      this.addIngredient(ingredient);
    });
  };

  private getBurgerOfTheDayRecipe = async (): Promise<string> => {
    this.logger.log('Получение рецепта бургера дня');
    this.updatingRecipe = true;
    await sleep(1000);
    this.updatingRecipe = false;
    return 'Бифштекс, Сыр, Помидор, Бифштекс, Сыр, Лук, Огурчики';
  };

  private updateCost = async (ingredients: Ingredient[]) => {
    this.logger.log(
      <span>
        <i>Обновление цены...</i>
      </span>,
    );
    this.updatingCost = true;
    await this.getActualPrices(ingredients);
    this.calculateCostFromIngredients(ingredients);
    this.updatingCost = false;
  };

  private async getActualPrices(ingredients: Ingredient[]): Promise<void> {
    const ingredientsToFetch = Object.values<Ingredient>(
      ingredients.reduce((acc, ingredient) => {
        if (ingredient.name in acc) return acc;
        return { ...acc, [ingredient.name]: ingredient };
      }, {}),
    );

    await Promise.all(
      ingredientsToFetch.map(async (ingredient) => {
        this.actualPrices[ingredient.name] = await ingredient.getActualPrice();
      }),
    );
  }

  private calculateCostFromIngredients(ingredients: Ingredient[]): void {
    this.cost = 0;
    ingredients.forEach((ingredient) => {
      this.cost += this.actualPrices[ingredient.name];
    });
  }
}
