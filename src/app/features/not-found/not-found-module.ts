import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotFoundRoutingModule } from './not-found-routing-module';

import { NotFoundPage } from './page/not-found-page/not-found-page';

@NgModule({
  declarations: [NotFoundPage],
  imports: [CommonModule, NotFoundRoutingModule],
})
export class NotFoundModule {}
