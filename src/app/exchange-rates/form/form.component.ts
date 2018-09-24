import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';

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
  });

  constructor(
    private fb: FormBuilder,
    private datePipe: DatePipe,
  ) { }

  ngOnInit() {
    const todayDate = this.datePipe.transform(Date.now(), 'yyyy-MM-dd');
    this.exchangeRatesForm.get('base').setValue(this.currencies.find(q => q.default));
    this.exchangeRatesForm.get('date').setValue(todayDate);
  }

  onSubmit(): void {
    this.request.emit(this.exchangeRatesForm.value);
    console.warn(this.exchangeRatesForm.value);
  }

}
