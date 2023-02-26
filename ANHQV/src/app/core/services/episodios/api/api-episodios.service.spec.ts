import { TestBed } from '@angular/core/testing';

import { ApiEpisodiosService } from './api-episodios.service';

describe('ApiEpisodiosService', () => {
  let service: ApiEpisodiosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiEpisodiosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
