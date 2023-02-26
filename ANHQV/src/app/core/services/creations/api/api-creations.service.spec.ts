import { TestBed } from '@angular/core/testing';

import { ApiCreationsService } from './api-creations.service';

describe('ApiCreationsService', () => {
  let service: ApiCreationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiCreationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
