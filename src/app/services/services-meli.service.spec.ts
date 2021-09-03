import { TestBed } from '@angular/core/testing';

import { ServicesMeliService } from './services-meli.service';

describe('ServicesMeliService', () => {
  let service: ServicesMeliService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesMeliService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
