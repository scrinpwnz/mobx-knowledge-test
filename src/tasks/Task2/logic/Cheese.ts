import { Ingredient } from './Ingredient';
import { sleep } from '../../../utils';
import { random } from 'lodash';

export class Cheese extends Ingredient {
  name = 'Сыр';

  async getActualPrice(): Promise<number> {
    await sleep(1000);
    return random(15, 50);
  }
}
