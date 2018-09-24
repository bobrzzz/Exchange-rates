import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeRatesComponent } from './exchange-rates.component';
import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DatePipe, DecimalPipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';



fdescribe('ExchangeRatesComponent', () => {
  let component: ExchangeRatesComponent;
  let fixture: ComponentFixture<ExchangeRatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ExchangeRatesComponent, FormComponent, TableComponent],
      imports: [ReactiveFormsModule, HttpClientModule],
      providers: [DatePipe, DecimalPipe]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangeRatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
