import {FormControl} from "@angular/forms";

export class CheckNumberValidator {
  static Limit(limit: number): any {
    return (control: FormControl): { [key: string]: any } | null => {
      let val = Number(control.value)
      if (!isNaN(val) && val > limit) {
        return {"limit": {"limit": limit, "actualValue": val, "message": "The number is too large"}};
      } else {
        return null;
      }
    };
  }
}
