import { TestBed } from '@angular/core/testing';

import { MostrarCatalogoProductoService } from './mostrar-catalogo-producto.service';

describe('MostrarCatalogoProductoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MostrarCatalogoProductoService = TestBed.get(MostrarCatalogoProductoService);
    expect(service).toBeTruthy();
  });
});
