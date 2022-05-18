import { observer } from 'mobx-react-lite';
import { useEffect, useRef } from 'react';
import { Logger } from '../../utils';
import classes from './Logs.module.scss';

interface Props {
  logger: Logger;
  height?: number;
}

export const Logs = observer(({ logger, height = 200 }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  });

  return (
    <div className={classes.root} style={{ height }}>
      <div className={classes.content}>
        {logger.getLogs().map((log) => (
          <div key={log.id} className={log.type === 'error' ? classes.error : undefined}>
            [{log.timestamp.toLocaleTimeString()}]: {log.content}
          </div>
        ))}
        <div ref={ref} />
      </div>
    </div>
  );
});
