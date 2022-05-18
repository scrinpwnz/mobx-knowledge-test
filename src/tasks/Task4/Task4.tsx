import { ProcessCard } from './components/ProcessCard';

export const Task4 = () => {
  return (
    <div>
      <section>
        <h2>Задача 4</h2>
        <p>
          На данный момент запущенный процесс невозможно остановить, а очень бы хотелось{' '}
          <span className={'emoji'}>🧐</span>
        </p>
        <ul>
          <li>Реализовать возможность останавливать процесс</li>
          <li>Сообщение о запуске процесса появляется после сообщения о текущем прогрессе. Это тоже нужно исправить</li>
        </ul>
      </section>
      <hr />
      <section>
        <ProcessCard />
      </section>
    </div>
  );
};
