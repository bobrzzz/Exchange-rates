import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { DecimalPipe, DatePipe } from '@angular/common';
import { APP_BASE_HREF } from '@angular/common';

import { AppComponent } from './app.component';
import { HttpClient } from 'selenium-webdriver/http';
import { ExchangeRatesComponent } from './exchange-rates/exchange-rates.component';
import { FormComponent } from './exchange-rates/form/form.component';
import { TableComponent } from './exchange-rates/table/table.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ExchangeRatesComponent,
    FormComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [DecimalPipe, DatePipe, { provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
