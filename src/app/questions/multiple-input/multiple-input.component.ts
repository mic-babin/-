import {
  Component,
  forwardRef,
  Input,
  OnDestroy,
  OnInit,
  Renderer2,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
} from '@angular/forms';
import { Subscription } from 'rxjs';
import { ValidationService } from 'src/app/form/services/validation.service';
import { Question } from 'src/app/models/question';
import { LanguageService } from 'src/app/shared/services/language.service';

@Component({
  selector: 'app-multiple-input',
  templateUrl: './multiple-input.component.html',
  styleUrls: ['./multiple-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MultipleInputComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => MultipleInputComponent),
      multi: true,
    },
  ],
})
export class MultipleInputComponent
  implements ControlValueAccessor, OnInit, OnDestroy
{
  @Input() question?: Question;

  fieldArrayIncomplete = true;
  form!: FormGroup;

  get fieldArray(): FormArray {
    return this.form.controls[this.question?.label.en] as FormArray;
  }

  get formValue(): string[] {
    return this.fieldArray.value as string[];
  }

  private subscriptions: Subscription[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private renderer: Renderer2,
    public validation: ValidationService,
    public language: LanguageService
  ) {}

  ngOnInit(): void {
    this.createFormGroup();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }

  addField(): void {
    this.fieldArray.push(
      new FormControl('', this.validation.checkRequired(this.question))
    );
  }

  deleteField(i: number): void {
    this.fieldArray?.removeAt(i);
  }

  registerOnChange(fn: unknown): void {
    this.onChange = fn;
  }

  writeValue(value: string[]): void {
    if (value) {
      this.form.setValue(value);
    }
  }

  registerOnTouched(fn: unknown): void {
    this.onTouched = fn;
  }

  // communicate the inner form validation to the parent form
  validate(): ValidationErrors | null {
    return this.form.valid ? null : { multipleLine: { valid: false } };
  }

  checkForEmptyFields(): void {
    if (this.formValue.includes('')) {
      this.fieldArrayIncomplete = true;
    } else {
      this.fieldArrayIncomplete = false;
    }
  }

  onChange: any = () => {};
  onTouched: any = () => {};

  private createFormGroup(): void {
    this.form = this.formBuilder.group({
      // [this.question?.label]: this.formBuilder.array([{
      //   select: [null, this.validation.get(this.question)],
      // }])
      [this.question?.label.en]: new FormArray([
        new FormControl('', this.validation.checkRequired(this.question)),
      ]),
    });

    this.subscriptions.push(
      // any time the inner form changes update the parent of any change
      this.form.valueChanges.subscribe(() => {
        this.onChange(this.formValue);
        this.onTouched();
        // Disable add button if array has an empty string
        this.checkForEmptyFields();
      })
    );

    this.onChange(this.form.value);
    this.onTouched();
  }
  validateField(field: string, validation) {
    return this.validation.validateField(this.form, field, validation);
  }
  validateForm() {
    return this.validation.validateForm(this.form);
  }

  lastFieldEmpty() {
    if (this.fieldArray.length > 1) {
      return (
        !(this.fieldArray.controls[this.fieldArray.length - 1].value == '') ||
        this.fieldArray.controls[this.fieldArray.length - 1].touched
      );
    }
    return true;
  }
}
