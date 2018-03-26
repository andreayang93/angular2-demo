import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ FormsModule,ReactiveFormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {DataService} from './data.service';
import { HttpClient } from '@angular/common/http';
import {MainModule} from './main/main.module'
import { CustomersModule } from './user/customers.module'
import {AppRoutingModule} from './app-routing.module'


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MainModule,
    MainModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [HttpClient,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
