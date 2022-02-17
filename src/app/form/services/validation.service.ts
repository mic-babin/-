import { ComponentFactoryResolver, Injectable } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { Question } from 'src/app/models/question';

@Injectable({
  providedIn: 'root',
})
export class ValidationService {
  validated: boolean;
  constructor() {}

  get(question: Question) {
    if (!question.isHidden) {
      let validators = [
        this.checkRequired(question),
        this.checkPattern(question.pattern),
        this.checkMin(question.min),
        this.checkMax(question.max),
        this.checkMinLength(question.minLength),
        this.checkMaxLength(question.maxLength),
      ];
      return validators;
    } else {
      console.log([Validators.nullValidator]);
      return [Validators.nullValidator];
    }
  }

  checkRequired(question: Question) {
    if (question.isHidden) {
      return Validators.nullValidator;
    } else {
      return question.required ? Validators.required : Validators.nullValidator;
    }
  }
  // get(question: Question) {
  //   // if (!question.isHidden) {
  //   let validators = [
  //     this.checkRequired(question),
  //     this.checkPattern(question.pattern),
  //     this.checkMin(question.min),
  //     this.checkMax(question.max),
  //     this.checkMinLength(question.minLength),
  //     this.checkMaxLength(question.maxLength),
  //   ];
  //   return validators;

  //   // } else {
  //   //   console.log([Validators.nullValidator]);
  //   //   return [Validators.nullValidator];
  //   // }
  // }

  // checkRequired(question: Question) {
  //   // if (question.isHidden) {
  //   //   return Validators.nullValidator;
  //   // } else {
  //   return question.required ? Validators.required : Validators.nullValidator;
  //   // }
  // }

  checkPattern(pattern: RegExp | undefined) {
    return pattern ? Validators.pattern(pattern) : Validators.nullValidator;
  }

  checkMin(min: number | undefined) {
    return min ? Validators.min(min) : Validators.nullValidator;
  }

  checkMax(max: number | undefined) {
    return max ? Validators.max(max) : Validators.nullValidator;
  }

  checkMinLength(minLength: number | undefined) {
    return minLength
      ? Validators.minLength(minLength)
      : Validators.nullValidator;
  }

  checkMaxLength(maxLength: number | undefined) {
    return maxLength
      ? Validators.maxLength(maxLength)
      : Validators.nullValidator;
  }

  setValidated(validated: boolean) {
    this.validated = validated;
  }

  checkValidated() {
    return this.validated;
  }

  validateField(form: FormGroup, field: string, validation: string) {
    // console.log(validation, form.get(field).hasError(validation));
    return (
      (form.get(field).hasError(validation) && form.get(field).touched) ||
      (form.get(field).hasError(validation) && this.validated)
    );
  }

  validateForm(form: FormGroup, second?) {
    return (
      (!form.valid && this.validated) ||
      (this.validated && second === null) ||
      (!form.valid && form.touched)
    );
  }
}
