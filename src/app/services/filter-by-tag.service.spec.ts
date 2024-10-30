import { TestBed } from '@angular/core/testing';

import { FilterByTagService } from './filter-by-tag.service';

describe('FilterByTagService', () => {
  let service: FilterByTagService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterByTagService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
