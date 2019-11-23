import { TestBed } from '@angular/core/testing';

import { ListarStatusService } from './listar-status.service';

describe('ListarStatusService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListarStatusService = TestBed.get(ListarStatusService);
    expect(service).toBeTruthy();
  });
});
