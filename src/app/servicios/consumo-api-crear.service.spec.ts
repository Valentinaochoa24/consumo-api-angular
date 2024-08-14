import { TestBed } from '@angular/core/testing';

import { ConsumoApiCrearService } from './consumo-api-crear.service';

describe('ConsumoApiCrearService', () => {
  let service: ConsumoApiCrearService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsumoApiCrearService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
