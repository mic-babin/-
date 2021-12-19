import { Component, Input, OnInit } from '@angular/core';
import { Question } from 'src/app/models/question';
import { LanguageService } from 'src/app/shared/services/language.service';

@Component({
  selector: 'app-tool-tip',
  templateUrl: './tool-tip.component.html',
  styleUrls: ['./tool-tip.component.scss'],
})
export class ToolTipComponent implements OnInit {
  @Input() question: Question;

  constructor(public language: LanguageService) {}

  ngOnInit(): void {}
}
