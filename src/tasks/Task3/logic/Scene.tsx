import { Animatronic } from './Animatronic';
import { Logger } from '../../../utils';
import { makeObservable, observable } from 'mobx';

export type Scenarios = 'Отключить' | 'Сценарий 1' | 'Сценарий 2';

export class Scene {
  public currentScenario: Scenarios = 'Отключить';

  public readonly animatronics = observable<Animatronic>([]);

  private readonly logger: Logger;

  constructor(logger: Logger) {
    this.logger = logger;

    makeObservable(this, {
      currentScenario: observable,
      animatronics: observable,
    });
  }

  public setCurrentScenario(payload: Scenarios): void {
    this.currentScenario = payload;
  }

  public addAnimatronic = (): void => {
    const animatronic = new Animatronic(this, this.logger);
    this.animatronics.push(animatronic);
    this.logger.log(
      <span>
        Аниматроник <b>{animatronic.name}</b> выходит на сцену!
      </span>,
    );
  };

  public removeAnimatronic = (animatronic: Animatronic): void => {
    this.animatronics.remove(animatronic);
    this.logger.log(
      <span>
        Аниматроник <b>{animatronic.name}</b> уходит со сцены!
      </span>,
    );
  };
}
