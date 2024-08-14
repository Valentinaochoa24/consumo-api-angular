import { TestBed } from '@angular/core/testing';

import { GestionService } from './consumo-api.service';

describe('GestionService', () => {
  let service: GestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
