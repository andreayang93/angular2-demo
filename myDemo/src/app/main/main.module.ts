import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import {AdminComponent } from './admin/admin.component'

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule
  ],
  declarations: [AdminComponent]
})
export class MainModule { }
