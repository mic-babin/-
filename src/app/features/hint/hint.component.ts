import { Component, Input, OnInit } from '@angular/core';
import { Question } from 'src/app/models/question';
import { LanguageService } from 'src/app/shared/services/language.service';

@Component({
  selector: 'app-hint',
  templateUrl: './hint.component.html',
  styleUrls: ['./hint.component.scss'],
})
export class HintComponent implements OnInit {
  @Input() question: Question;

  constructor(public language: LanguageService) {}

  ngOnInit(): void {}
}
