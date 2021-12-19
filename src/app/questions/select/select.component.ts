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
import {
  IMultiSelectOption,
  IMultiSelectTexts,
  IMultiSelectSettings,
} from 'ngx-bootstrap-multiselect';
import { Subscription } from 'rxjs';
import { ValidationService } from 'src/app/form/services/validation.service';
import { Question } from 'src/app/models/question';
import { LanguageService } from 'src/app/shared/services/language.service';
import { MultiSelectService } from 'src/app/shared/services/multi-select.service';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: SelectComponent,
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: SelectComponent,
    },
  ],
})
export class SelectComponent
  implements ControlValueAccessor, Validator, OnDestroy, OnInit
{
  @Input() question: Question;
  onTouched = () => {};
  onChangeSub: Subscription;
  form: FormGroup;

  en: IMultiSelectOption[];
  fr: IMultiSelectOption[];
  textFr: IMultiSelectTexts = this.dropdown.textFr;
  textEn: IMultiSelectTexts = this.dropdown.textEn;
  settings: IMultiSelectSettings = this.dropdown.settings;

  constructor(
    public language: LanguageService,
    private fb: FormBuilder,
    private validation: ValidationService,
    private dropdown: MultiSelectService
  ) {}
  ngOnInit() {
    this.en = this.question.options?.en;
    this.fr = this.question.options?.fr;
    if (this.question?.selectLimit > 1) {
      this.dropdown.settings.autoUnselect = false;
      this.dropdown.settings.closeOnSelect = false;
      this.dropdown.settings.selectionLimit = this.question?.selectLimit;
    }
    this.form = this.fb.group({
      select: [null, this.validation.get(this.question)],
    });
  }

  registerOnChange(onChange: any) {
    this.onChangeSub = this.form?.valueChanges.subscribe(onChange);
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
    return this.form?.valid ? null : { text: { valid: false } };
  }

  validateField(field: string, validation) {
    return this.validation.validateField(this.form, field, validation);
  }
}
