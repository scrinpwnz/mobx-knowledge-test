export abstract class Ingredient {
  public readonly id: number;

  public abstract readonly name: string;

  constructor() {
    this.id = Math.random();
  }

  abstract getActualPrice(): Promise<number>;
}
