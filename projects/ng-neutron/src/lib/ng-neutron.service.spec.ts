import { TestBed } from '@angular/core/testing';

import { NgNeutronService } from './ng-neutron.service';

describe('NgNeutronService', () => {
  let service: NgNeutronService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgNeutronService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
