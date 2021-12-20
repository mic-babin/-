import {
  AfterViewChecked,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ValidationService } from './services/validation.service';
import * as data from './form.data';
import { Section } from '../models/section';
import { LanguageService } from '../shared/services/language.service';
import { FormService } from './services/form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit, AfterViewChecked {
  @ViewChild('formWrapper') formWrapper: ElementRef;
  date!: { year: number; month: number };
  form!: FormGroup;
  formTemplate: Section[] = data.formTemplate;
  current = 0;

  constructor(
    private fb: FormBuilder,
    private validation: ValidationService,
    private renderer: Renderer2,
    public language: LanguageService,
    private formAction: FormService
  ) {}

  ngOnInit() {
    this.form = this.fb.group({});
    this.formTemplate = this.formAction.filterAndSort(this.formTemplate);
    this.formTemplate.forEach((section) => {
      this.form.addControl(section.title.en, this.fb.group([]));
      // let q = section.questions.filter((question) => !question.isHidden);
      // q.sort((a, b) => parseFloat(b.order) - parseFloat(a.order));

      section.questions.forEach((question) => {
        (this.form.controls[section.title.en] as FormGroup).addControl(
          question.label.en,
          this.fb.control(
            null,
            this.validation.checkRequired(question.required)
          )
        );
      });
    });

    this.validation.setValidated(false);
  }

  ngAfterViewChecked() {
    this.formWrapper.nativeElement
      .querySelectorAll('.anticon-check svg')
      .forEach((svg) => {
        this.renderer.setAttribute(svg, 'fill', '#004161');
        this.renderer.setStyle(svg, 'transform', 'translateY(-5px)');
      });
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form);
    } else {
      this.validation.setValidated(true);
    }
  }

  pre(): void {
    this.current -= 1;
  }

  next(): void {
    this.current += 1;
  }
}
