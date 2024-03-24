import {Component, OnInit} from '@angular/core';
import {NgForm, FormGroup} from "@angular/forms";
import {AddFormControl, AddFormGroup} from "@app/formModel/form.model";

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {

  newForm: any = {};
  formSubmitted: boolean = false;
  formGroup: AddFormGroup = new AddFormGroup();
  constructor() {
  }

  ngOnInit(): void {
  }

  submitForm() {
    Object.keys(this.formGroup.controls).forEach(c => this.newForm[c] = this.formGroup.controls[c].value);
    this.formSubmitted = true;
    if(this.formGroup.valid) {
      console.log(this.newForm);
    }
  }
}
