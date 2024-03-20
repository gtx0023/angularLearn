import {Component, OnInit} from '@angular/core';
import {NgForm, FormGroup} from "@angular/forms";
import {AddFormControl, AddFormGroup} from "@app/model/form.model";

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {

  formGroup: FormGroup = new AddFormGroup();
  constructor() {
  }

  ngOnInit(): void {
  }

}
