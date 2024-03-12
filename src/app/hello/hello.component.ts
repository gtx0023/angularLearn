import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  name: string = 'Angular 12';
  isShowName: boolean = false;
  colors: string[] = ['red', 'green', 'blue', 'yellow', 'pink'];

  // 双向绑定
  title: string = '双向绑定';

  // 动态表单
  age: FormControl = new FormControl(18);

  // 动态表单控件组
  loginForm = new FormGroup({
    username: new FormControl('',[
      Validators.required,
      Validators.minLength(6),
    ]),
    password: new FormControl('')
  });

  dateStr: Date = new Date();

  constructor() {
  }

  ngOnInit(): void {
  }

  inpChange(event: any) {
    console.log(event.target.value);
  }

  getInpValue(value: string) {
    console.log(value);
  }

  changeContent() {
    this.title = '双向绑定已经改变';
  }

  submitForm() {
    console.log('表单校验', this.loginForm.valid, this.loginForm);
    console.log(this.loginForm.value);
  }
}
