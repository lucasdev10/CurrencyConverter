import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyOptionsComponent } from './currency-options.component';

describe('CurrencyOptionsComponent', () => {
  let component: CurrencyOptionsComponent;
  let fixture: ComponentFixture<CurrencyOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrencyOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
