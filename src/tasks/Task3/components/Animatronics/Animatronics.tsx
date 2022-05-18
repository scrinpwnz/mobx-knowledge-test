import { useState } from 'react';
import { Scenarios, Scene } from '../../logic/Scene';
import { Logger } from '../../../../utils';
import { observer } from 'mobx-react-lite';
import { Logs } from '../../../../components/Logs';
import classes from './Animatronics.module.scss';

export const Animatronics = observer(() => {
  const [logger] = useState(new Logger());
  const [scene] = useState(new Scene(logger));

  return (
    <div className={classes.root}>
      <h2>Сцена</h2>

      <div className={classes.scenario}>
        <span>Сценарий</span>
        <select
          value={scene.currentScenario}
          onChange={(event) => scene.setCurrentScenario(event.target.value as Scenarios)}
        >
          <option value="Отключить">Отключить</option>
          <option value="Сценарий 1">Сценарий 1</option>
          <option value="Сценарий 2">Сценарий 2</option>
        </select>
      </div>

      <div className={classes.animatronics}>
        {scene.animatronics.map((animatronic) => (
          <div className={classes.animatronic} key={animatronic.name}>
            <span>
              Аниматроник <b>{animatronic.name}</b> - <i>{animatronic.currentAction}</i>
            </span>
            <button onClick={() => scene.removeAnimatronic(animatronic)}>Убрать со сцены</button>
          </div>
        ))}
      </div>

      <div>
        <button onClick={scene.addAnimatronic}>Добавить аниматроника на сцену</button>
      </div>

      <Logs logger={logger} height={240} />
    </div>
  );
});
