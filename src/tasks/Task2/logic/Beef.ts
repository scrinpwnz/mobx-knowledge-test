import { Ingredient } from './Ingredient';
import { sleep } from '../../../utils';
import { random } from 'lodash';

export class Beef extends Ingredient {
  name = 'Бифштекс';

  async getActualPrice(): Promise<number> {
    await sleep(1000);
    return random(20, 100);
  }
}
