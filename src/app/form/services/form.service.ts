import { Injectable } from '@angular/core';
import { Question } from 'src/app/models/question';
import { Section } from 'src/app/models/section';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  constructor() {}

  filterAndSort(form) {
    form = form.filter((section: Section) => !section.isHidden);
    form.sort((a, b) => parseFloat(a.order) - parseFloat(b.order));

    form.forEach((section: Section) => {
      section.questions = section.questions.filter(
        (question: Question) => !question.isHidden
      );
      section.questions.sort(
        (a, b) => parseFloat(a.order) - parseFloat(b.order)
      );
    });
    return form;
  }
}
