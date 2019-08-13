import { TestBed } from '@angular/core/testing';

import { PurchaseordersService } from './purchaseorders.service';

describe('PurchaseordersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PurchaseordersService = TestBed.get(PurchaseordersService);
    expect(service).toBeTruthy();
  });
});
