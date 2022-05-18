import classes from './Card.module.scss';
import React from 'react';
import cn from 'classnames';
import { FCWithChildren } from '../../react-app-env';

interface CardProps {
  className?: string;
}

export const Card: FCWithChildren<CardProps> = ({ className, children }) => {
  return (
    <div className={cn(classes.root, className)}>
      <div className={classes.content}>{children}</div>
    </div>
  );
};
