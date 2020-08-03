import { TestBed } from '@angular/core/testing';

import { BasicAuthHttpInterceptService } from './basic-auth-http-intercept.service';

describe('BasicAuthHttpInterceptService', () => {
  let service: BasicAuthHttpInterceptService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasicAuthHttpInterceptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
