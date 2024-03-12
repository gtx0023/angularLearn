import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor() { }

  logArray: Array<string> = [];

  getLog(): Array<string> {
    return this.logArray;
  }

  addLog(log: string): void {
    this.logArray.push(log);
  }
}
