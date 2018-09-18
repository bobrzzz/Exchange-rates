import { Injectable } from '@angular/core';

import { Currency } from './dataModels/currency';

import { MOCKUP_currencies } from './../mockups/mockCurrency';
import { MOCKUP_operations } from './../mockups/mockOperations';

@Injectable({
  providedIn: 'root'
})
export class InternalApiService {
  currencies: Currency[];
  operations;

  constructor() {
    this.currencies = MOCKUP_currencies; 
    this.operations = MOCKUP_operations; 
   }

  getCurrencies(){
    return this.currencies;
  }

  getSellInterest(){
    return this.operations.sellModifier;
  }

  getBuyInterest(){
    return this.operations.buyModifier;
  }
}
