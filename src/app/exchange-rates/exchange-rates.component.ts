import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';

import { Currency } from '../dataModels/currency';
import { InternalRates } from '../dataModels/internalRate';


@Component({
  selector: 'app-exchange-rates',
  templateUrl: './exchange-rates.component.html',
  styleUrls: ['./exchange-rates.component.css']
})
export class ExchangeRatesComponent implements OnInit {
  private currencies: Currency[];
  private rates: InternalRates[];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.currencies = this.apiService.getCurrencies();
  }

  getRates(e): void {
    this.apiService.getRates(e.base.code, e.date).subscribe(data => {
      console.log(data);
      this.rates = data;
    });
  }

}
