import { TestBed } from '@angular/core/testing';

import { AddassetService } from './addasset.service';

describe('AddassetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddassetService = TestBed.get(AddassetService);
    expect(service).toBeTruthy();
  });
});
