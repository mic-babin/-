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

import { getISOWeek } from 'date-fns';

import { en_US, NzI18nService } from 'ng-zorro-antd/i18n';
import { LanguageService } from 'src/app/shared/services/language.service';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: DatePickerComponent,
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: DatePickerComponent,
    },
  ],
})
export class DatePickerComponent
  implements ControlValueAccessor, Validator, OnDestroy, OnInit
{
  date = null;
  @Input() question: Question;
  onTouched = () => {};
  onChangeSub: Subscription;
  form: FormGroup;
  events: string[] = [];

  constructor(
    private fb: FormBuilder,
    private validation: ValidationService,
    private i18n: NzI18nService,
    public language: LanguageService
  ) {}
  ngOnInit() {
    this.i18n.setLocale(en_US);
    this.form = this.fb.group({
      date: [null, this.validation.get(this.question)],
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
    return this.form.valid ? null : { text: { valid: false } };
  }

  onChange(result: Date): void {
    console.log('onChange: ', result);
  }

  validateField(field: string, validation) {
    return this.validation.validateField(this.form, field, validation);
  }
}
