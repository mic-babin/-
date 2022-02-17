import { Injectable } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { Question } from 'src/app/models/question';
import { Section } from 'src/app/models/section';
import * as data from '../form.data';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  constructor() {}

  formTemplate: Section[] = data.formTemplate;

  filterAndSort(form) {
    form = form.filter((section: Section) => !section.isHidden);
    form.sort((a, b) => parseFloat(a.order) - parseFloat(b.order));

    form.forEach((section: Section) => {
      section.questions.sort(
        (a, b) => parseFloat(a.order) - parseFloat(b.order)
      );
    });
    return form;
  }

  checkAction(question: Question, answer: any) {
    let actionRules = question.actionRules;
    if (actionRules) {
      if (actionRules.filter((aR) => aR.show).length > 0) {
        this.show(question, answer);
      }
    }
  }

  getRule(aR, answer, showAnwser) {
    if (aR.rule === 'equals') return answer == showAnwser;
    return false;
  }

  show(question: Question, answer: any) {
    let showAR = question.actionRules.filter((aR) => aR.show)[0];
    let showArray = showAR.show.questions;
    let showAnwser = showAR.show.answer;
    this.formTemplate.forEach((section) =>
      section.questions.filter((question) => {
        if (showArray.includes(question.label.en)) {
          if (this.getRule(showAR, answer, showAnwser)) {
            question.showed = true;
          } else {
            question.showed = false;
          }
        }
      })
    );
    return true;
  }

  updateRequiredValidator(form: FormGroup, question: Question) {
    if (question.isHidden) {
      console.log(
        'Showed:',
        question.showed,
        'Hidden:',
        question.isHidden,
        'Required:',
        form.controls[question.label.en].hasValidator(Validators.required),
        'Valid:',
        form.controls[question.label.en].valid
      );

      if (!question.showed) {
        form.controls[question.label.en].removeValidators(Validators.required);
        form.controls[question.label.en].updateValueAndValidity;
      }

      if (question.showed && question.required) {
        form.controls[question.label.en].addValidators(Validators.required);
        form.controls[question.label.en].updateValueAndValidity;

        console.log(
          'Showed:',
          question.showed,
          'Hidden:',
          question.isHidden,
          'Required:',
          form.controls[question.label.en].hasValidator(Validators.required),
          'Valid:',
          form.controls[question.label.en].valid
        );
      }
    }
    return form.controls[question.label.en].hasValidator(Validators.required);
  }
}
