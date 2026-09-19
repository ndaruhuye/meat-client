import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TermsOfServiceRoutingModule } from './terms-of-service-routing-module';

import { TermsOfServicePage } from './page/terms-of-service-page/terms-of-service-page';

@NgModule({
  declarations: [TermsOfServicePage],
  imports: [CommonModule, TermsOfServiceRoutingModule],
})
export class TermsOfServiceModule {}
