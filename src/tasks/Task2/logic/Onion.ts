import { Ingredient } from './Ingredient';
import { sleep } from '../../../utils';
import { random } from 'lodash';

export class Onion extends Ingredient {
  name = 'Лук';

  async getActualPrice(): Promise<number> {
    await sleep(1000);
    return random(1, 10);
  }
}
