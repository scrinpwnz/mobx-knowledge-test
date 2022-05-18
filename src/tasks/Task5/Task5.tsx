import _1 from './assets/1.png';
import _2 from './assets/2.png';
import _3 from './assets/3.png';
import _4 from './assets/4.png';

export const Task5 = () => {
  return (
    <div>
      <section>
        <h2>Задача 5</h2>
        <p>
          Найти ошибки в коде
          <span className={'emoji'}>🧐</span>
        </p>
        <ul>
          <li>
            Описать их в формате <b>строка - описание ошибки</b>
          </li>
        </ul>
      </section>
      <hr />
      <section>
        <h4>Logic</h4>
        <img src={_1} alt={'1'} />
        <img src={_2} alt={'2'} />
        <img src={_3} alt={'3'} />
        <h4>Component</h4>
        <img src={_4} alt={'4'} />
      </section>
      <section>
        <p>
          Отписывать сюда (прямо в коде этого приложения <span className="emoji">😶</span>)
        </p>
      </section>
    </div>
  );
};
