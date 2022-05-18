import { BurgerConstructor } from './components/BurgerConstructor';

export const Task2 = () => {
  return (
    <div>
      <section>
        <h2>Задача 2</h2>
        <p>
          Цены на ингредиенты меняются каждую секунду! <span className="emoji">😓</span> Из-за этого приходится получать
          актуальную цену при каждом добавлении ингредиента.
        </p>
        <ul>
          <li>Оптимизировать расчёт стоимости бургера</li>
          <li>
            При получении <b>бургера дня</b> цена должна обновиться 1 раз
          </li>
        </ul>
      </section>
      <hr />
      <section>
        <BurgerConstructor />
      </section>
    </div>
  );
};
