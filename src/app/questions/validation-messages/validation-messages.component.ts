import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, ValidationErrors } from '@angular/forms';
import { ValidationService } from 'src/app/form/services/validation.service';
import { Question } from 'src/app/models/question';
import { LanguageService } from 'src/app/shared/services/language.service';

@Component({
  selector: 'app-validation-messages',
  templateUrl: './validation-messages.component.html',
  styleUrls: ['./validation-messages.component.scss'],
})
export class ValidationMessagesComponent implements OnInit {
  @Input() question: Question;
  @Input() form: FormGroup;

  constructor(
    private validation: ValidationService,
    public language: LanguageService
  ) {}

  ngOnInit(): void {}

  validate(): ValidationErrors | null {
    return this.form.valid ? null : { text: { valid: false } };
  }

  validateField(field: string, validation) {
    return this.validation.validateField(this.form, field, validation);
  }
}
