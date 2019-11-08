import { TestBed } from '@angular/core/testing';

import { EliminarPremioService } from './eliminar-premio.service';

describe('EliminarPremioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EliminarPremioService = TestBed.get(EliminarPremioService);
    expect(service).toBeTruthy();
  });
});
