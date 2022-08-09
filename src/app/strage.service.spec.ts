import { TestBed } from '@angular/core/testing';

import { StrageService } from './strage.service';

describe('StrageService', () => {
  let service: StrageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StrageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
