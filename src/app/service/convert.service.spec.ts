import { TestBed } from '@angular/core/testing';

import { ConvertService } from './convert.service';

describe('ConvertService', () => {
  let service: ConvertService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConvertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a list of items', () => {
    const items = service.getItems();
    expect(items).toBeDefined();
    expect(items.length).toBe(20);
  });

  it('should compare items by length', () => {
    // Eiffel Tower (324m) vs average automobile (4.48056m)
    const result = service.compareItems(4, 1, 'length', 1);
    expect(result).toBeCloseTo(72.31, 2);
  });

  it('should compare items by weight', () => {
    // Oscar Academy Award (3.85kg) vs Turkish Angora cat (4kg)
    const result = service.compareItems(6, 7, 'weight', 1);
    expect(result).toBeCloseTo(0.96, 2);
  });

  it('should handle quantity', () => {
    // 2 Eiffel Towers vs average automobile
    const result = service.compareItems(4, 1, 'length', 2);
    expect(result).toBeCloseTo(144.62, 2);
  });
});
