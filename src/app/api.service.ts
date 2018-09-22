import { Injectable } from '@angular/core';
import { Observable, of, pipe } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { map, catchError } from 'rxjs/operators';
import { DecimalPipe } from '@angular/common'

import { Currency } from './dataModels/currency';
import { ExternalRate } from './dataModels/externalRate';
import { InternalRates } from './dataModels/internalRate';
import { Operations } from './dataModels/operations';

import { MOCKUP_currencies } from '../mockups/mockCurrency';
import { MOCKUP_operations } from '../mockups/mockOperations';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private urlBase = 'https://api.exchangeratesapi.io/';
  private currencies: Currency[];
  private operations: Operations;
  private format: (value: any, digitsInfo?: string, locale?: string) => string;

  constructor(
    private decimalPipe: DecimalPipe, 
    private http: HttpClient
  ) {
    this.currencies = MOCKUP_currencies;
    this.operations = MOCKUP_operations;
    this.format = (value, digitsInfo?, locale?) => 
      this.decimalPipe.transform(value, digitsInfo, locale); // It was loosing scope of the pipe
  }

  getCurrencies(): Currency[]{
    return this.currencies;
  }

  getRates(base: string, date: string): Observable<InternalRates[]>{
    const url = `${this.urlBase}${date}?base=${base}`,
      pattern = '1.4-4';

    return this.http.get<ExternalRate>(url).pipe(
      map(result => {
        let internalRates = <InternalRates[]>[];
        Object.keys(result.rates).map(key => {
          const value = result.rates[key],
            sellRate = this.format(
              value * this.operations.sellModifier, 
              pattern
            ),
            buyRate = this.format(
              value * this.operations.buyModifier, 
              pattern
            );

          internalRates.push({
            code: key, 
            sellRate: sellRate, 
            buyRate: buyRate,
            supported: this.currencies.some(currency => currency.code === key)
          });
          
        });
        return internalRates;
      })
    )
  }
}
