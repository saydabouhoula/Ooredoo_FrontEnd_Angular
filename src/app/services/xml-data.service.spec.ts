import { TestBed } from '@angular/core/testing';

import { XmlDataService } from './xml-data.service';

describe('XmlDataService', () => {
  let service: XmlDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(XmlDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
