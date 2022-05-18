import classes from './Navigation.module.scss';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  return (
    <nav className={classes.root}>
      <NavLink to={'/task-1'}>Задача 1</NavLink>
      <NavLink to={'/task-2'}>Задача 2</NavLink>
      <NavLink to={'/task-3'}>Задача 3</NavLink>
      <NavLink to={'/task-4'}>Задача 4</NavLink>
      <NavLink to={'/task-5'}>Задача 5</NavLink>
    </nav>
  );
};
