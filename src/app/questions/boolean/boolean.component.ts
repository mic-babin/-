import {
  AfterContentChecked,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormBuilder,
  FormGroup,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  RequiredValidator,
  ValidationErrors,
  Validator,
  Validators,
} from '@angular/forms';
import { Subscription } from 'rxjs';
import { FormService } from 'src/app/form/services/form.service';
import { ValidationService } from 'src/app/form/services/validation.service';
import { Question } from 'src/app/models/question';
import { LanguageService } from 'src/app/shared/services/language.service';

@Component({
  selector: 'app-boolean',
  templateUrl: './boolean.component.html',
  styleUrls: ['./boolean.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: BooleanComponent,
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: BooleanComponent,
    },
  ],
})
export class BooleanComponent
  implements
    ControlValueAccessor,
    Validator,
    OnDestroy,
    OnInit,
    AfterContentChecked
{
  @Input() question: Question;

  onTouched = () => {};
  onChangeSub: Subscription;
  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private validation: ValidationService,
    public language: LanguageService,
    private formService: FormService
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      [this.question.label.en]: [null, this.validation.get(this.question)],
    });

    this.form.get(this.question.label.en).valueChanges.subscribe((answer) => {
      this.formService.checkAction(this.question, answer);
    });
  }

  ngAfterContentChecked() {
    this.formService.updateRequiredValidator(this.form, this.question);
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
}
