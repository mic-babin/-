import { Injectable } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { Question } from 'src/app/models/question';

@Injectable({
  providedIn: 'root',
})
export class ValidationService {
  validated: boolean;
  constructor() {}

  get(question: Question) {
    console.log(question);
    let validators = [
      this.checkRequired(question.required),
      this.checkPattern(question.pattern),
    ];
    return validators;
  }

  checkRequired(required: boolean) {
    return required ? Validators.required : Validators.nullValidator;
  }

  checkPattern(pattern: RegExp | undefined) {
    return pattern ? Validators.pattern(pattern) : Validators.nullValidator;
  }

  setValidated(validated: boolean) {
    this.validated = validated;
  }

  checkValidated() {
    return this.validated;
  }

  validateField(form: FormGroup, field: string, validation: string) {
    return (
      (form.get(field).hasError(validation) && form.get(field).touched) ||
      (form.get(field).hasError(validation) && this.validated)
    );
  }

  validateForm(form: FormGroup, second?) {
    return (
      (!form.valid && this.validated) || (this.validated && second === null)
    );
  }
}
