import { TestBed } from '@angular/core/testing';

import { IsauthenticatedService } from './isauthenticated.service';

describe('IsauthenticatedService', () => {
  let service: IsauthenticatedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IsauthenticatedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
