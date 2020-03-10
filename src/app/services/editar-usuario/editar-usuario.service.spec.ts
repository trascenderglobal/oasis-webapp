import { TestBed } from '@angular/core/testing';

import { EditarUsuarioService } from './editar-usuario.service';

describe('EditarUsuarioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EditarUsuarioService = TestBed.get(EditarUsuarioService);
    expect(service).toBeTruthy();
  });
});
