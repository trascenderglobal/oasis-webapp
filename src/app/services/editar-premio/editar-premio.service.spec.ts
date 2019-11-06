import { TestBed } from '@angular/core/testing';

import { EditarPremioService } from './editar-premio.service';

describe('EditarPremioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EditarPremioService = TestBed.get(EditarPremioService);
    expect(service).toBeTruthy();
  });
});
