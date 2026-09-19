import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TermsOfServicePage } from './page/terms-of-service-page/terms-of-service-page';

const routes: Routes = [{ path: '', component: TermsOfServicePage }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TermsOfServiceRoutingModule {}
