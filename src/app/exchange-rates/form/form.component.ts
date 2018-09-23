import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { Currency } from './../../dataModels/currency';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() currencies: Currency[];
  @Output() request: EventEmitter<object> = new EventEmitter<object>();

  exchangeRatesForm = this.fb.group({
    base: ['', Validators.required],
    date: ['', Validators.required]
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    console.log(this.currencies);
    this.exchangeRatesForm.get('base').setValue(this.currencies.find(q=>q.default));
  }

  onSubmit(): void {
    this.request.emit(this.exchangeRatesForm.value);
    console.warn(this.exchangeRatesForm.value);
  }

}
