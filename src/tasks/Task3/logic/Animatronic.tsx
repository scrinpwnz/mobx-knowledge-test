import { Logger } from '../../../utils';
import { Scene } from './Scene';
import { makeAutoObservable, reaction } from 'mobx';
import faker from '@faker-js/faker';

export class Animatronic {
  public readonly name: string;

  public currentAction: 'стоит' | 'танцует' | 'поёт' = 'стоит';

  constructor(scene: Scene, logger: Logger) {
    this.name = `${faker.name.firstName()} ${faker.name.suffix()}`;

    makeAutoObservable(this);

    reaction(
      () => scene.currentScenario,
      (currentScenario) => {
        switch (currentScenario) {
          case 'Отключить': {
            this.currentAction = 'стоит';
            return;
          }
          case 'Сценарий 1': {
            this.currentAction = 'танцует';
            return;
          }
          case 'Сценарий 2': {
            this.currentAction = 'поёт';
          }
        }
      },
    );

    reaction(
      () => this.currentAction,
      (currentAction) => {
        switch (currentAction) {
          case 'стоит': {
            logger.log(
              <span>
                [<b>{this.name}</b>]: Ожидает <span className="emoji">😴</span>
              </span>,
            );
            return;
          }
          case 'танцует': {
            logger.log(
              <span>
                [<b>{this.name}</b>]: Начинает танцевать <span className="emoji">😸</span>
              </span>,
            );
            return;
          }
          case 'поёт': {
            logger.error(
              <span>
                [<b>{this.name}</b>]: Начинает убивать <span className="emoji">🙀</span>
              </span>,
            );
          }
        }
      },
    );
  }
}
