import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecurityRoutingModule } from './security-routing-module';
import { SecurityPage } from './page/security-page/security-page';

@NgModule({
  declarations: [SecurityPage],
  imports: [CommonModule, SecurityRoutingModule],
})
export class SecurityModule {}
