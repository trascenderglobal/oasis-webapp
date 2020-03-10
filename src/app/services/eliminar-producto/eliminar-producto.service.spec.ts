import { TestBed } from '@angular/core/testing';

import { EliminarProductoService } from './eliminar-producto.service';

describe('EliminarProductoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EliminarProductoService = TestBed.get(EliminarProductoService);
    expect(service).toBeTruthy();
  });
});
