import { Ingredient } from './Ingredient';
import { sleep } from '../../../utils';
import { random } from 'lodash';

export class Tomato extends Ingredient {
  name = 'Помидор';

  async getActualPrice(): Promise<number> {
    await sleep(1000);
    return random(2, 15);
  }
}
