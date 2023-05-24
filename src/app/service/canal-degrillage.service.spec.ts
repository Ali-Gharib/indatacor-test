import { TestBed } from '@angular/core/testing';

import { CanalDegrillageService } from './canal-degrillage.service';

describe('CanalDegrillageService', () => {
  let service: CanalDegrillageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CanalDegrillageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
