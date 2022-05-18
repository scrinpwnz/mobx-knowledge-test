import { Table } from './components/Table';

export const Task1 = () => {
  return (
    <div>
      <section>
        <h2>Задача 1</h2>
        <p>
          Таблица тормозит при вводе данных, из-за чего работать на слабых компьютерах с ней практически невозможно{' '}
          <span className="emoji">😡</span>
        </p>
        <ul>
          <li>Необходимо максимально оптимизировать компонент</li>
        </ul>
      </section>
      <hr />
      <section>
        <Table />
      </section>
    </div>
  );
};
