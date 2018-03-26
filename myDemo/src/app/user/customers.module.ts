import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersRoutingModule } from './customers-routing.module';
import {LoginComponent } from './login/login.component'

@NgModule({
  imports: [
    CommonModule,
    CustomersRoutingModule
  ],
  declarations: [LoginComponent]
})
export class CustomersModule { }
