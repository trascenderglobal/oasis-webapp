import { TestBed } from '@angular/core/testing';

import { EliminarUsuarioService } from './eliminar-usuario.service';

describe('EliminarUsuarioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EliminarUsuarioService = TestBed.get(EliminarUsuarioService);
    expect(service).toBeTruthy();
  });
});
