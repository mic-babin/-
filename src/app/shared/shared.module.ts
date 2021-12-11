import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestComponent } from './test/test.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { MainNavComponent } from './main-nav/main-nav.component';

@NgModule({
  declarations: [TestComponent, MainNavComponent],
  imports: [
    CommonModule,
    NzMenuModule,
    NzIconModule,
    RouterModule,
    TranslateModule,
  ],
  exports: [TestComponent, MainNavComponent],
})
export class SharedModule {}
