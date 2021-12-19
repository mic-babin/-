import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuestionsModule } from '../questions/questions.module';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { FeaturesModule } from '../features/features.module';

@NgModule({
  declarations: [FormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    QuestionsModule,
    FeaturesModule,
    NzStepsModule,
    NzButtonModule,
  ],
  exports: [FormComponent],
})
export class FormModule {}
