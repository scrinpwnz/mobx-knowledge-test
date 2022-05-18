import { makeObservable, observable } from 'mobx';
import { heavyCalculations } from '../../../utils';

export class TableStore {
  public title = 'Наименование таблицы';

  public lastUpdate = new Date();

  public readonly data = Array.from({ length: 300 }).map(() => ['', '', '']);

  constructor() {
    heavyCalculations(9999999);
    console.log('%cТолько что было совершено множество дорогих операций', 'color: "red"; font-size: 24px');

    makeObservable(this, {
      title: observable,
      data: observable,
      lastUpdate: observable,
    });
  }
}
