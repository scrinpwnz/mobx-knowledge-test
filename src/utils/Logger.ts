import { ReactNode } from 'react';
import { makeAutoObservable } from 'mobx';

export interface Log {
  id: string | number;
  timestamp: Date;
  content: ReactNode;
  type: 'log' | 'error';
}

export class Logger {
  private readonly logs: Log[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  getLogs(): Log[] {
    return this.logs;
  }

  log(content: ReactNode): void {
    this.logs.push({
      id: Math.random(),
      timestamp: new Date(),
      type: 'log',
      content,
    });
  }

  error(content: ReactNode): void {
    this.logs.push({
      id: Math.random(),
      timestamp: new Date(),
      type: 'error',
      content,
    });
  }
}
