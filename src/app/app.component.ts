import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from './shared/services/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'form-builder-interface';

  constructor(
    private translate: TranslateService,
    public language: LanguageService
  ) {
    translate.setDefaultLang(this.language.get());
  }
}
