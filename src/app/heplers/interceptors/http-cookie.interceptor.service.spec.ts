import { TestBed } from '@angular/core/testing';

import { HttpCookie.InterceptorService } from './http-cookie.interceptor.service';

describe('HttpCookie.InterceptorService', () => {
  let service: HttpCookie.InterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpCookie.InterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
