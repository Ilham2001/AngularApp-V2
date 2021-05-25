import { TestBed } from '@angular/core/testing';

import { AccessModeService } from './access-mode.service';

describe('AccessModeService', () => {
  let service: AccessModeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccessModeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
