import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcFieldsComponent } from './calc-fields.component';

describe('CalcFieldsComponent', () => {
  let component: CalcFieldsComponent;
  let fixture: ComponentFixture<CalcFieldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalcFieldsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
