import { Ingredient } from './Ingredient';
import { sleep } from '../../../utils';
import { random } from 'lodash';

export class Bun extends Ingredient {
  name = 'Булочка';

  async getActualPrice(): Promise<number> {
    await sleep(1000);
    return random(10, 30);
  }
}
