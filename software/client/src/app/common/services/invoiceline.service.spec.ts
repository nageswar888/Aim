import { TestBed } from '@angular/core/testing';

import { InvoicelineService } from './invoiceline.service';

describe('InvoicelineService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InvoicelineService = TestBed.get(InvoicelineService);
    expect(service).toBeTruthy();
  });
});
