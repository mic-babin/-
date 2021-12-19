import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestComponent } from './test/test.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NzMenuModule } from 'ng-zorro-antd/menu';

import { MainNavComponent } from './main-nav/main-nav.component';

import { IconDefinition } from '@ant-design/icons-angular';
import {
  NzIconModule,
  NZ_ICON_DEFAULT_TWOTONE_COLOR,
  NZ_ICONS,
} from 'ng-zorro-antd/icon';

import * as AllIcons from '@ant-design/icons-angular/icons';

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(
  (key) => antDesignIcons[key]
);

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
  providers: [
    { provide: NZ_ICON_DEFAULT_TWOTONE_COLOR, useValue: '#00ff00' }, // If not provided, Ant Design's official blue would be used
    { provide: NZ_ICONS, useValue: icons },
  ],
})
export class SharedModule {}
