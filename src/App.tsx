import classes from './App.module.scss';
import { Task1, Task2, Task3, Task4, Task5 } from './tasks';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Card } from './components/Card';
import { Navigation } from './components/Navigation';

function App() {
  return (
    <BrowserRouter>
      <div className={classes.root}>
        <div className={classes.wrapper}>
          <div className={classes.layout}>
            <Card className={classes.header}>
              <Navigation />
            </Card>
            <Card className={classes.content}>
              <Routes>
                <Route path={'/task-1'} element={<Task1 />} />
                <Route path={'/task-2'} element={<Task2 />} />
                <Route path={'/task-3'} element={<Task3 />} />
                <Route path={'/task-4'} element={<Task4 />} />
                <Route path={'/task-5'} element={<Task5 />} />
                <Route path={'*'} element={<Navigate to="/task-1" replace />} />
              </Routes>
            </Card>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
