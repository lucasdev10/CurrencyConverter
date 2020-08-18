import { TestBed } from '@angular/core/testing';

import { CurrencyApiService } from './currency-api.service';

describe('ApiService', () => {
  let service: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrencyApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
