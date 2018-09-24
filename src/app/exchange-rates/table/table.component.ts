import { Component, Input } from '@angular/core';

import { InternalRates } from './../../dataModels/internalRate';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  private rates: InternalRates[];
  private asc: boolean;

  @Input() set exchangeRates(rates: InternalRates[]) {
    if (rates) {
      this.rates = rates.sort((a, b) => {
        return a.code > b.code ? 1 : a.code < b.code ? -1 : 0;
      });
      this.asc = false;
    }
  }

  constructor() { }

  onCurrencySort(): void {
    this.rates.reverse();
    this.asc = !this.asc;
  }

}
