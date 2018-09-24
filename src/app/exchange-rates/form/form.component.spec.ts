import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormComponent } from './form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { MOCKUP_currencies } from './../../../mockups/mockCurrency';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormComponent],
      imports: [ReactiveFormsModule],
      providers: [DatePipe]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    component.currencies = MOCKUP_currencies;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
