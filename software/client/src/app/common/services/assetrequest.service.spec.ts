import { TestBed } from '@angular/core/testing';

import { AssetrequestService } from './assetrequest.service';

describe('AssetrequestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AssetrequestService = TestBed.get(AssetrequestService);
    expect(service).toBeTruthy();
  });
});
