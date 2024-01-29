import { TestBed } from '@angular/core/testing';

import { ListPersonnelServiceService } from '../list-personnel-service.service';

describe('ListPersonnelServiceService', () => {
  let service: ListPersonnelServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListPersonnelServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
