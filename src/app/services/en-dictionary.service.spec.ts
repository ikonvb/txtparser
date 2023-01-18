import { TestBed } from '@angular/core/testing';

import { EnDictionaryService } from './en-dictionary.service';

describe('EnDictionaryService', () => {
  let service: EnDictionaryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnDictionaryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
