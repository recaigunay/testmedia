import { TestBed } from '@angular/core/testing';

import { InventoryService } from './inventory.service';

describe('InventoryserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InventoryService = TestBed.get(InventoryService);
    expect(service).toBeTruthy();
  });
});
