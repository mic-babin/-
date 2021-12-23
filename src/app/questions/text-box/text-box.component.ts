import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import {
  ControlValueAccessor,
  FormBuilder,
  FormGroup,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator,
} from '@angular/forms';
import { Subscription } from 'rxjs';
import { ValidationService } from 'src/app/form/services/validation.service';
import { Question } from 'src/app/models/question';
import { LanguageService } from 'src/app/shared/services/language.service';

@Component({
  selector: 'app-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: TextBoxComponent,
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: TextBoxComponent,
    },
  ],
})
export class TextBoxComponent
  implements ControlValueAccessor, Validator, OnDestroy, OnInit
{
  @Input() question: Question;
  onTouched = () => {};
  onChangeSub: Subscription;
  form: FormGroup;
  hidePassword: boolean = true;

  constructor(
    private fb: FormBuilder,
    private validation: ValidationService,
    public language: LanguageService
  ) {}
  ngOnInit() {
    this.form = this.fb.group({
      [this.question.label.en]: [null, this.validation.get(this.question)],
    });
  }

  registerOnChange(onChange: any) {
    this.onChangeSub = this.form.valueChanges.subscribe(onChange);
  }
  ngOnDestroy() {
    this.onChangeSub.unsubscribe();
  }
  writeValue(value: any) {
    if (value) {
      this.form.setValue(value);
    }
  }
  registerOnTouched(onTouched: any) {
    this.onTouched = onTouched;
  }
  setDisabledState(disabled: boolean) {
    if (disabled) {
      this.form.disable();
    } else {
      this.form.enable();
    }
  }

  validate(): ValidationErrors | null {
    return this.form.valid
      ? null
      : { [this.question.label.en]: { valid: false } };
  }

  togglePasswordView() {
    this.hidePassword = !this.hidePassword;
    console.log(this.hidePassword);
  }
}
