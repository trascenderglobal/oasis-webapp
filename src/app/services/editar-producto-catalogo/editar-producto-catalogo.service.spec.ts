import { TestBed } from '@angular/core/testing';

import { EditarProductoCatalogoService } from './editar-producto-catalogo.service';

describe('EditarProductoCatalogoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EditarProductoCatalogoService = TestBed.get(EditarProductoCatalogoService);
    expect(service).toBeTruthy();
  });
});
