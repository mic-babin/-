import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextBoxComponent } from './text-box/text-box.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { AddressComponent } from './address/address.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { BooleanComponent } from './boolean/boolean.component';
import { SelectComponent } from './select/select.component';
import { TranslateModule } from '@ngx-translate/core';
import { NgxBootstrapMultiselectModule } from 'ngx-bootstrap-multiselect';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { MultipleInputComponent } from './multiple-input/multiple-input.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NgxMaskModule } from 'ngx-mask';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { SliderComponent } from './slider/slider.component';
import { ValidationMessagesComponent } from './validation-messages/validation-messages.component';

@NgModule({
  declarations: [
    TextBoxComponent,
    FileUploadComponent,
    AddressComponent,
    DatePickerComponent,
    BooleanComponent,
    SelectComponent,
    MultipleInputComponent,
    SliderComponent,
    ValidationMessagesComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NzRadioModule,
    NzIconModule,
    NzInputModule,
    NzButtonModule,
    NzDatePickerModule,
    BrowserModule,
    FormsModule,
    TranslateModule,
    NgxBootstrapMultiselectModule,
    GooglePlaceModule,
    NzToolTipModule,
    NzSliderModule,
    NgxMaskModule,
  ],
  exports: [
    TextBoxComponent,
    FileUploadComponent,
    AddressComponent,
    DatePickerComponent,
    BooleanComponent,
    SelectComponent,
    MultipleInputComponent,
    SliderComponent,
  ],
})
export class QuestionsModule {}
