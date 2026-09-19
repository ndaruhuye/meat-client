import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing-module';
import { HomePage } from './page/home-page/home-page';

@NgModule({
  declarations: [HomePage],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
