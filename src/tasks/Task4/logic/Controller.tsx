import { Process } from './Process';
import { Logger } from '../../../utils';

export class Controller {
  public process: Process | null = null;

  private readonly logger: Logger;

  constructor(logger: Logger) {
    this.logger = logger;
  }

  public startNewProcess = (): void => {
    this.stopProcess();
    this.process = new Process(this.logger);
    this.process.start();
  };

  public stopProcess = (): void => {
    if (this.process) {
      this.process.stop();
      this.process = null;
    }
  };
}
