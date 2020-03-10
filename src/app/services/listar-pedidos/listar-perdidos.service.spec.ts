import { TestBed } from '@angular/core/testing';

import { ListarPerdidosService } from './listar-perdidos.service';

describe('ListarPerdidosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListarPerdidosService = TestBed.get(ListarPerdidosService);
    expect(service).toBeTruthy();
  });
});
