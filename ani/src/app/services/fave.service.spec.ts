import { TestBed } from '@angular/core/testing';

import { FaveService } from './fave.service';

describe('FaveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FaveService = TestBed.get(FaveService);
    expect(service).toBeTruthy();
  });
});
