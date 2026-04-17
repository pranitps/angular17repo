import { TestBed } from '@angular/core/testing';

import { Msgservice } from './msgservice';

describe('Msgservice', () => {
  let service: Msgservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Msgservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
