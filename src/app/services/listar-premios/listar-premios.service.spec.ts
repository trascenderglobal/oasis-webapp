import { TestBed } from '@angular/core/testing';

import { ListarPremiosService } from './listar-premios.service';

describe('ListarPremiosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListarPremiosService = TestBed.get(ListarPremiosService);
    expect(service).toBeTruthy();
  });
});
