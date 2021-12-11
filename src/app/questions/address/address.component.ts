import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
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
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { Subscription } from 'rxjs';
import { ValidationService } from 'src/app/form/services/validation.service';
import { Question } from 'src/app/models/question';
import { LanguageService } from 'src/app/shared/services/language.service';
import { MultiSelectService } from 'src/app/shared/services/multi-select.service';
import { AddressService } from './address.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: AddressComponent,
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: AddressComponent,
    },
  ],
})
export class AddressComponent
  implements ControlValueAccessor, Validator, OnDestroy, OnInit
{
  showGoogleAddress: boolean = true;
  googleAddress: any;
  options = {
    componentRestrictions: {
      country: ['CA'],
    },
  };

  @ViewChild('placesRef') placesRef: GooglePlaceDirective;

  public handleAddressChange(address: any) {
    this.googleAddress = address.address_components;
    this.form.patchValue({
      number: this.getAddress('street_number') || '',
      street: this.getAddress('route') || '',
      city:
        this.getAddress('sublocality_level_1') ||
        this.getAddress('locality') ||
        '',
      province: this.getAddress('administrative_area_level_1') || '',
      postalCode: this.getAddress('postal_code') || '',
    });
    this.showGoogleAddress = false;
  }
  form: FormGroup;
  formTemplate: Question[];
  provEn: IMultiSelectOption[] = this.dropdown.provEn;
  provFr: IMultiSelectOption[] = this.dropdown.provFr;
  textFr: IMultiSelectTexts = this.dropdown.textFr;
  textEn: IMultiSelectTexts = this.dropdown.textEn;
  settings: IMultiSelectSettings = this.dropdown.settings;
  @Input() question: Question;
  @Input() formValidated: boolean;
  onTouched = () => {};
  onChangeSub: Subscription;
  constructor(
    private fb: FormBuilder,
    public language: LanguageService,
    private dropdown: MultiSelectService,
    private validation: ValidationService,
    private address: AddressService
  ) {}

  ngOnInit() {
    this.formTemplate = this.address.getTemplate(this.question.required);

    this.form = this.fb.group({});
    this.formTemplate.forEach((question) => {
      this.form.addControl(
        question.label,
        this.fb.control(null, this.validation.get(question))
      );
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
    return this.form.valid ? null : { Address: { valid: false } };
  }

  getAddress(type: string) {
    return this.googleAddress.filter((x) => x.types[0] == type)[0]?.long_name;
  }

  validateField(field: string, validation: string) {
    return this.validation.validateField(this.form, field, validation);
  }

  validateForm() {
    return this.validation.validateForm(this.form, this.googleAddress);
  }
}
