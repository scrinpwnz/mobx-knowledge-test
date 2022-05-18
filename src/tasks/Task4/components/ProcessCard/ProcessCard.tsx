import { Logs } from '../../../../components/Logs';
import { useState } from 'react';
import { Logger } from '../../../../utils';
import { Controller } from '../../logic/Controller';
import classes from './ProcessCard.module.scss';

export const ProcessCard = () => {
  const [logger] = useState(new Logger());
  const [controller] = useState(new Controller(logger));

  return (
    <div className={classes.root}>
      <div className={classes.buttons}>
        <button onClick={controller.startNewProcess}>Запустить процесс</button>
        <button onClick={controller.stopProcess}>Остановить процесс</button>
      </div>
      <Logs logger={logger} height={240} />
    </div>
  );
};
