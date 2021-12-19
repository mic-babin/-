import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { ToolTipComponent } from './tool-tip/tool-tip.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { HintComponent } from './hint/hint.component';
import { NzAlertModule } from 'ng-zorro-antd/alert';

@NgModule({
  declarations: [ToolTipComponent, HintComponent],
  imports: [CommonModule, NzToolTipModule, NzIconModule, NzAlertModule],
  exports: [ToolTipComponent, HintComponent],
})
export class FeaturesModule {}
