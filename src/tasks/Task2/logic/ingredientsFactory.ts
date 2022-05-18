import { Ingredient } from './Ingredient';
import { Beef } from './Beef';
import { Cheese } from './Cheese';
import { Tomato } from './Tomato';
import { Onion } from './Onion';

export enum Ingredients {
  Beef = 'Бифштекс',
  Cheese = 'Сыр',
  Tomato = 'Помидор',
  Onion = 'Лук',
}

export const ingredientsMap = {
  [Ingredients.Beef]: Beef,
  [Ingredients.Cheese]: Cheese,
  [Ingredients.Tomato]: Tomato,
  [Ingredients.Onion]: Onion,
};

export const ingredientsFactory = (ingredient: string): Ingredient => {
  assertIngredient(ingredient);
  return new ingredientsMap[ingredient]();
};

export function assertIngredient(ingredient: string): asserts ingredient is Ingredients {
  if (!(ingredient in ingredientsMap)) throw new Error('Неизвестный ингредиент');
}
