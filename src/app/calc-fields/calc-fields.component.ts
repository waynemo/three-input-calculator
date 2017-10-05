import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc-fields',
  templateUrl: './calc-fields.component.html',
  styleUrls: ['./calc-fields.component.css']
})
export class CalcFieldsComponent implements OnInit {

  fieldA: string;
  fieldB: string;
  fieldC: string;

  fieldADisabled: string;
  fieldBDisabled: string;
  fieldCDisabled: string;

  constructor() { }

  ngOnInit() {

  }

  fieldAChange(newValue: string) {
    const fieldANumber: number = this.convertToNumber(this.fieldA);
    const fieldBNumber: number = this.convertToNumber(this.fieldB);
    const fieldCNumber: number = this.convertToNumber(this.fieldC);

    if (fieldANumber) {
      if (fieldBNumber && !this.fieldBDisabled) {
        this.fieldC = (fieldANumber + fieldBNumber).toString();
        this.fieldCDisabled = 'true';
      }
      else if (fieldCNumber && !this.fieldCDisabled) {
        this.fieldB = (fieldANumber + fieldCNumber).toString();
        this.fieldBDisabled = 'true';
      }
    }
    else {
      if (this.fieldBDisabled) {
        this.fieldB = null;
        this.fieldBDisabled = null;
      }
      else if (this.fieldCDisabled) {
        this.fieldC = null;
        this.fieldCDisabled = null;
      }
    }
  }

  fieldBChange(newValue: string) {
    const fieldANumber: number = this.convertToNumber(this.fieldA);
    const fieldBNumber: number = this.convertToNumber(this.fieldB);
    const fieldCNumber: number = this.convertToNumber(this.fieldC);

    if (fieldBNumber) {
      if (fieldANumber && !this.fieldADisabled) {
        this.fieldC = (fieldBNumber + fieldANumber).toString();
        this.fieldCDisabled = 'true';
      }
      else if (fieldCNumber && !this.fieldCDisabled) {
        this.fieldA = (fieldBNumber + fieldCNumber).toString();
        this.fieldADisabled = 'true';
      }
    }
    else {
      if (this.fieldADisabled) {
        this.fieldA = null;
        this.fieldADisabled = null;
      }
      else if (this.fieldCDisabled) {
        this.fieldC = null;
        this.fieldCDisabled = null;
      }
    }
  }

  fieldCChange(newValue: string) {
    const fieldANumber: number = this.convertToNumber(this.fieldA);
    const fieldBNumber: number = this.convertToNumber(this.fieldB);
    const fieldCNumber: number = this.convertToNumber(this.fieldC);

    if (fieldCNumber) {
      if (fieldANumber && !this.fieldADisabled) {
        this.fieldB = (fieldCNumber + fieldANumber).toString();
        this.fieldBDisabled = 'true';
      }
      else if (fieldBNumber && !this.fieldBDisabled) {
        this.fieldA = (fieldCNumber + fieldBNumber).toString();
        this.fieldADisabled = 'true';
      }
    }
    else {
      if (this.fieldADisabled) {
        this.fieldA = null;
        this.fieldADisabled = null;
      }
      else if (this.fieldBDisabled) {
        this.fieldB = null;
        this.fieldBDisabled = null;
      }
    }
  }

  private convertToNumber(value: string) {
    return isNaN(<any>value) ? NaN : parseFloat(value);
  }
}
