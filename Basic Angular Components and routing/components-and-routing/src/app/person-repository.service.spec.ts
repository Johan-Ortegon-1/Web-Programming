import { TestBed } from '@angular/core/testing';

import { PersonRepositoryService } from './person-repository.service';

describe('PersonRepositoryService', () => {
  let service: PersonRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
