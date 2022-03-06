import { ItemType } from '../interfaces/IProduct';

// Factory pattern
export const getItem = (type: ItemType, stock: number) => {
  switch (type) {
    case ItemType.COKE:
      return {
        name: ItemType.COKE,
        stock,
        price: 20,
        image:
          'https://toppng.com/uploads/preview/coke-11538594118bozpkbnfjz.png',
      };

    case ItemType.PEPSI:
      return {
        name: ItemType.PEPSI,
        stock,
        price: 25,
        image:
          'https://toppng.com/uploads/preview/pepsi-11528319882yfqx8sanmq.png',
      };

    case ItemType.DEW:
      return {
        name: ItemType.DEW,
        stock,
        price: 30,
        image:
          'https://toppng.com/uploads/preview/mountain-dew-11526062209ljlifblwja.png',
      };
  }
};
