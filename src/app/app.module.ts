import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormModule } from './form/form.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QuestionsModule } from './questions/questions.module';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgxBootstrapMultiselectModule } from 'ngx-bootstrap-multiselect';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';

// Exports
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormModule,
    SharedModule,
    QuestionsModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule,
    NgxMaskModule.forRoot(),
    GooglePlaceModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    NgxBootstrapMultiselectModule,
  ],
  providers: [],

  bootstrap: [AppComponent],
})
export class AppModule {}
