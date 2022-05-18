import { autorun, makeAutoObservable } from 'mobx';
import { Logger, sleep } from '../../../utils';
import faker from '@faker-js/faker';

export class Process {
  public status: 'inProgress' | 'complete' | 'error' | null = null;

  public progress = 0;

  public readonly id: string;

  private readonly logger: Logger;

  constructor(logger: Logger) {
    this.id = faker.random.numeric(5);

    this.logger = logger;

    makeAutoObservable(this);

    autorun(() => {
      this.logger.log(
        <span>
          Текущий прогресс: <b>{this.progress}%</b>
        </span>,
      );
    });
  }

  public start = () => {
    this.process();
    this.logger.log(
      <span>
        Процесс <b>{this.id}</b> запущен
      </span>,
    );
  };

  public stop = () => {
    this.logger.error(
      <span>
        Процесс <b>{this.id}</b> остановлен
      </span>,
    );
  };

  private process = async () => {
    this.status = 'inProgress';
    try {
      await sleep(1000);
      this.progress = 25;
      await sleep(2000);
      this.progress = 50;
      await sleep(1500);
      this.progress = 75;
      await sleep(1000);
      this.progress = 100;
      this.status = 'complete';
    } catch (error) {
      this.status = 'error';
    }
  };
}
