import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing-module';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactPage } from './page/contact-page/contact-page';
import { SharedModule } from '../../shared/shared-module';

@NgModule({
  declarations: [ContactPage],
  imports: [CommonModule, ReactiveFormsModule, SharedModule, ContactRoutingModule],
})
export class ContactModule {}
