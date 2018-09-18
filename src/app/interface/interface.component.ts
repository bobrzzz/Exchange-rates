import { Component, OnInit, Input } from '@angular/core';
import { Currency } from './../dataModels/currency';

@Component({
  selector: 'app-interface',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.css']
})
export class InterfaceComponent implements OnInit {
  @Input() currencies: Currency[];

  constructor() { }

  ngOnInit() {
    console.log(this.currencies)
  }

}
