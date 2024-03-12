import { Injectable } from '@angular/core';
import { LogService } from '@/service/log.service';

@Injectable({
  // root 代表app根目录，
  // null代表不限，可以在任何地方使用，
  // 指定目录则只能在指定目录使用
  providedIn: 'root' // <- root | null
})
export class ListService {

  constructor(private logService: LogService) { }

  list: Array<string> = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

  getList(): Array<string> {
    return this.list;
  }

  addListItem(item: string): void {
    this.list.push(item);
    this.logService.addLog('add item: ' + item);
  }
}
