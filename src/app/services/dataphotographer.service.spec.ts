import { TestBed } from '@angular/core/testing';

import { DataphotographerService } from './dataphotographer.service';

describe('DataphotographerService', () => {
  let service: DataphotographerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataphotographerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
