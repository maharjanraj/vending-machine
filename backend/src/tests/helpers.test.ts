// unit tests
import { getItem } from '../helpers';
import { ItemType } from '../interfaces/IProduct';

describe('helpers', () => {
  describe('getItem', () => {
    test('should return correct coke object', () => {
      const actual = getItem(ItemType.COKE, 10);
      expect(actual.name).toBe('Coke');
      expect(actual.price).toBe(20);
      expect(actual.stock).toBe(10);
    });

    test('should return correct pepsi object', () => {
      const actual = getItem(ItemType.PEPSI, 20);
      expect(actual.name).toBe('Pepsi');
      expect(actual.price).toBe(25);
      expect(actual.stock).toBe(20);
    });
  });
});
