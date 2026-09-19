import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataDeletionRoutingModule } from './data-deletion-routing-module';
import { DataDeletionPage } from './page/data-deletion-page/data-deletion-page';

@NgModule({
  declarations: [DataDeletionPage],
  imports: [CommonModule, DataDeletionRoutingModule],
})
export class DataDeletionModule {}
