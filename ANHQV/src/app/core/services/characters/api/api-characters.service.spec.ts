import { TestBed } from '@angular/core/testing';

import { ApiCharactersService } from './api-characters.service';

describe('CharactersService', () => {
  let service: ApiCharactersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiCharactersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
