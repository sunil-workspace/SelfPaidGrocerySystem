import { TestBed, inject } from '@angular/core/testing';

import { MemberidValidatorService } from './memberid-validator.service';

describe('MemberidValidatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MemberidValidatorService]
    });
  });

  it('should be created', inject([MemberidValidatorService], (service: MemberidValidatorService) => {
    expect(service).toBeTruthy();
  }));
});
