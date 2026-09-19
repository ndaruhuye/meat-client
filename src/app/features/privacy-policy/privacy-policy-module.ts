import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivacyPolicyRoutingModule } from './privacy-policy-routing-module';
import { PrivacyPolicyPage } from './page/privacy-policy-page/privacy-policy-page';

@NgModule({
  declarations: [PrivacyPolicyPage],
  imports: [CommonModule, PrivacyPolicyRoutingModule],
})
export class PrivacyPolicyModule {}
