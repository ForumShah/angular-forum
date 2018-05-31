import { TestBed, inject } from '@angular/core/testing';

import { GetAppDataService } from './get-app-data.service';

describe('GetAppDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetAppDataService]
    });
  });

  it('should be created', inject([GetAppDataService], (service: GetAppDataService) => {
    expect(service).toBeTruthy();
  }));
});
