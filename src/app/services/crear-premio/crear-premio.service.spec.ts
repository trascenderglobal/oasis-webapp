import { TestBed } from '@angular/core/testing';

import { CrearPremioService } from './crear-premio.service';

describe('CrearPremioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CrearPremioService = TestBed.get(CrearPremioService);
    expect(service).toBeTruthy();
  });
});
