import { Injectable } from '@angular/core';
import { Observable, of, pipe } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { DecimalPipe } from '@angular/common';

import { Currency } from './dataModels/currency';
import { ExternalRate } from './dataModels/externalRate';
import { InternalRates } from './dataModels/internalRate';
import { Operations } from './dataModels/operations';

import { mockCurrencies } from '../mockups/mockCurrency';
import { mockOperations } from '../mockups/mockOperations';


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
    this.currencies = mockCurrencies;
    this.operations = mockOperations;
    this.format = (value, digitsInfo?, locale?) =>
      this.decimalPipe.transform(value, digitsInfo, locale); // It was loosing scope of the pipe
  }

  getCurrencies(): Currency[] {
    return this.currencies;
  }

  getRates(base: string, date: string): Observable<InternalRates[]> {
    const url = `${this.urlBase}${date}?base=${base}`;

    return this.http.get<ExternalRate>(url).pipe(
      map(result => this.transformRates(result)),
      catchError(this.handleError(null))
    );
  }

  transformRates(result: ExternalRate) {
    const pattern = '1.4-4',
      internalRates = <InternalRates[]>[];
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
  }

  private handleError<T>(result?: T) {
    return (error: any): Observable<T> => {
      return of(result as T);
    };
  }
}
