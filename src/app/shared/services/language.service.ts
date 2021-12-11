import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  lang: string;
  constructor(private translate: TranslateService) {}

  get() {
    this.lang = localStorage.getItem('lang') || 'fr';
    return this.lang;
  }

  set(lang: string) {
    this.lang = lang;
    localStorage.setItem('lang', this.lang);
    this.translate.use(this.lang);
  }

  switch() {
    if (this.get() === 'fr') {
      this.set('en');
    } else {
      this.set('fr');
    }
  }
}
