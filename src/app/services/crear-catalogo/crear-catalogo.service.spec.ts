import { TestBed } from '@angular/core/testing';

import { CrearCatalogoService } from './crear-catalogo.service';

describe('CrearCatalogoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CrearCatalogoService = TestBed.get(CrearCatalogoService);
    expect(service).toBeTruthy();
  });
});
