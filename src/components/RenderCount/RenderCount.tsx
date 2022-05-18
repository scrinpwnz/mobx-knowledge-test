import classes from './RenderCount.module.scss';
import { useRenderCount } from '../../utils';

interface RenderCountProps {
  label?: string;
}

export const RenderCount = ({ label }: RenderCountProps) => {
  const renderCount = useRenderCount();

  return (
    <div className={classes.root} title="Количество рендеров элемента">
      {label && <span>{label} </span>}
      <span>{renderCount}</span>
    </div>
  );
};
