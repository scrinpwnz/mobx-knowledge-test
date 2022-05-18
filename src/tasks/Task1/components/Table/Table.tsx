import { ChangeEvent, ChangeEventHandler, useState } from 'react';
import { observer } from 'mobx-react-lite';
import classes from './Table.module.scss';
import { RenderCount } from '../../../../components/RenderCount';
import { heavyCalculations } from '../../../../utils';
import { TableStore } from '../../logic';

export const Table = observer(() => {
  const [store] = useState(new TableStore());

  const handleCellChange = (rowIndex: number, cellIndex: number) => (event: ChangeEvent<HTMLInputElement>) => {
    store.data[rowIndex][cellIndex] = event.target.value;
    store.lastUpdate = new Date();
  };

  const handleChangeTitle: ChangeEventHandler<HTMLInputElement> = (event): void => {
    store.title = event.target.value;
    store.lastUpdate = new Date();
  };

  const renderRow = (row: string[], rowIndex: number) => (
    <div className={classes.row} key={rowIndex}>
      <div className={classes.row__renderCount}>
        <RenderCount label="row" />
      </div>
      {row.map((cell, cellIndex) => renderCell(cell, rowIndex, cellIndex))}
    </div>
  );

  const renderCell = (value: string, rowIndex: number, cellIndex: number) => {
    /** Искусственное замедление рендера */
    heavyCalculations();

    return (
      <div className={classes.cell} key={cellIndex}>
        <input value={value} onChange={handleCellChange(rowIndex, cellIndex)} />
        <RenderCount label="cell" />
      </div>
    );
  };

  return (
    <div className={classes.tableContainer}>
      <div className={classes.tableTitle}>
        <input value={store.title} placeholder="Наименование таблицы" onChange={handleChangeTitle} />
        <RenderCount label="table" />
      </div>

      <span>
        Последнее обновление данных в <b>{store.lastUpdate.toLocaleTimeString()}</b>
      </span>

      <div className={classes.table}>{store.data.map((row, rowIndex) => renderRow(row, rowIndex))}</div>
    </div>
  );
});
