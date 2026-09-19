import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataDeletionPage } from './page/data-deletion-page/data-deletion-page';

const routes: Routes = [
  {
    path: '',
    component: DataDeletionPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DataDeletionRoutingModule {}
