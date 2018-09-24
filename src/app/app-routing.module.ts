import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExchangeRatesComponent } from './exchange-rates/exchange-rates.component';

const routes: Routes = [
  { path: '', redirectTo: '/rates', pathMatch: 'full' },
  { path: 'rates', component: ExchangeRatesComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule { }
