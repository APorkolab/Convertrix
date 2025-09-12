import { Item } from './item';

describe('Item', () => {
  it('should create an instance', () => {
    expect(new Item(1, 'Test Item', 10, 5, 'Test description')).toBeTruthy();
  });
});
