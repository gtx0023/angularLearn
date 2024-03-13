import {Component, EventEmitter, Input, KeyValueChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {ListService} from '@/service/list.service';
import {LogService} from '@/service/log.service';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-b2c-communicate',
  templateUrl: './b2c-communicate.component.html',
  styleUrls: ['./b2c-communicate.component.css']
})
export class B2cCommunicateComponent implements OnInit {

  @Input() type!: string;
  @Output() typeChange = new EventEmitter<string>();

  otherType = 'Boolean';

  list: Array<string> = [];
  logArray: Array<string> = [];
  queryParams: any;

  constructor(private listService: ListService, private logService: LogService, private rouerInfo: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.list = this.listService.getList();
    this.logArray = this.logService.getLog();
    this.queryParams = this.rouerInfo.snapshot.queryParams;
  }

  ngOnChanges(changes: KeyValueChanges<string, any>): void {
    console.log('changes-------', changes);
  }

  changeType(type: string): void {
    this.type = type;
    console.log('changeType----type changed to', this.type, type);
    this.typeChange.emit(this.type);
  }

  addItem(): void {
    this.listService.addListItem(Math.random().toString(36).substr(2, 5));
  }

  protected readonly JSON = JSON;
}
