import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CheckNumberValidator} from "./validator/CheckNumber"

export class AddFormControl extends FormControl {
  label: string;
  modelProperty: string;

  constructor(label: string, property: any, value: any, validator: any) {
    super(value, validator);
    this.label = label;
    this.modelProperty = property;
  }

  getValidationMessages() {
    let messages: string[] = [];
    if (this.errors) {
      for (let errorName in this.errors) {
        switch (errorName) {
          case "required":
            messages.push(`You must enter a ${this.label}`);
            break;
          case "pattern":
            messages.push(`The ${this.label} contains illegal characters`);
            break;
          case "minlength":
            messages.push(`A ${this.label} must be at least ${this.errors['minlength'].requiredLength} characters`);
            break;
          case "maxlength":
            messages.push(`A ${this.label} must be no more than ${this.errors['maxlength'].requiredLength} characters`);
            break;
          case "email":
            messages.push(`Not a valid ${this.label}`);
            break;
          case "phone":
            messages.push(`Not a valid ${this.label}`);
            break;
          case "limit":
            messages.push(`A ${this.label} cannot be more than ${this.errors['limit'].limit}`)
        }
      }
    }
    return messages;
  }
}

export class AddFormGroup extends FormGroup {
  constructor() {
    super({
      name: new AddFormControl('Name', 'name', '', Validators.required),
      age: new AddFormControl("Age", 'age', '', Validators.compose([
        Validators.required,
        CheckNumberValidator.Limit(140),
        Validators.pattern("^[0-9\.]+$")
      ])),
      email: new AddFormControl('Email', 'email', '',
        Validators.compose([
          Validators.required,
          Validators.pattern("^\\w+([-+.]\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$"),
          Validators.minLength(5),
          Validators.maxLength(30)
        ])
      ),
      phone: new AddFormControl('Phone', 'phone', '',
        Validators.compose([
          Validators.required,
          Validators.pattern("^1[34578]\\d{9}$")
        ])
      ),
    });
  }

  get AddFormControls(): AddFormControl[] {
    return Object.keys(this.controls).map(k => this.controls[k] as AddFormControl);
  }

  getValidationMessages(name: string): string[] {
    return (this.controls[name] as AddFormControl).getValidationMessages();
  }

  getAddFormValidationMessages(): string[] {
    let messages: string[] = [];
    Object.values(this.controls).forEach(c => {
      messages.push(...(c as AddFormControl).getValidationMessages());
    })
    return messages;
  }
}
