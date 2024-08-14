import { TestBed } from '@angular/core/testing';

import { ConsumoApiUsersService } from './consumo-api-users.service';

describe('ConsumoApiUsersService', () => {
  let service: ConsumoApiUsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsumoApiUsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
