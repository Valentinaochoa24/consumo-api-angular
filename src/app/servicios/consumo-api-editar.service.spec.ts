import { TestBed } from '@angular/core/testing';

import { ConsumoApiEditarService } from './consumo-api-editar.service';

describe('ConsumoApiEditarService', () => {
  let service: ConsumoApiEditarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsumoApiEditarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
