import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Question } from '../models/question';
import { ValidationService } from './services/validation.service';
import * as data from './form.data';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  date!: { year: number; month: number };

  form!: FormGroup;
  formTemplate: Question[] = data.formTemplate;

  current = 0;

  index = 'First-content';

  pre(): void {
    this.current -= 1;
    this.changeContent();
  }

  next(): void {
    this.current += 1;
    this.changeContent();
  }

  done(): void {
    console.log('done');
  }

  changeContent(): void {
    switch (this.current) {
      case 0: {
        this.index = 'First-content';
        break;
      }
      case 1: {
        this.index = 'Second-content';
        break;
      }
      case 2: {
        this.index = 'third-content';
        break;
      }
      default: {
        this.index = 'error';
      }
    }
  }
  constructor(private fb: FormBuilder, private validation: ValidationService) {
    this.form = this.fb.group({});
    this.formTemplate.forEach((question) => {
      this.form.addControl(
        question.label,
        this.fb.control(null, this.validation.checkRequired(question.required))
      );
    });
  }
  ngOnInit() {
    this.validation.setValidated(false);
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form);
    } else {
      this.validation.setValidated(true);
    }
  }
  getStyle(value: string) {
    return value;
  }
}
