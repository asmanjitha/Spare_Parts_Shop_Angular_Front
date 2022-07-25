import { TestBed, inject } from '@angular/core/testing';

import { PartdataService } from './partdata.service';

describe('PartdataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PartdataService]
    });
  });

  it('should be created', inject([PartdataService], (service: PartdataService) => {
    expect(service).toBeTruthy();
  }));
});
