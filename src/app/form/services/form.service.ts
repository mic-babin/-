import { Injectable } from '@angular/core';
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
      // section.questions = section.questions.filter(
      //   (question: Question) => !question.isHidden
      // );
      section.questions.sort(
        (a, b) => parseFloat(a.order) - parseFloat(b.order)
      );
    });
    return form;
  }

  show(question: Question, answer: any) {
    let showArray = question.show.questions;
    let showAnwser = question.show.answer;
    this.formTemplate.forEach((section) =>
      section.questions.filter((question) => {
        if (showArray.includes(question.label.en)) {
          if (answer == showAnwser) {
            question.isHidden = false;
          } else {
            question.isHidden = true;
          }
        }
      })
    );
    console.log(showArray);
    return true;
  }
}
