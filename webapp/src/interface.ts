export interface IProduct {
  name: string;
  image: string;
  price: number;
  stock: number;
}

export interface IBalance {
  coins: number;
  cash: number;
}

export enum ItemEnum {
  COKE = 'Coke',
  PEPSI = 'Pepsi',
  DEW = 'Dew',
}

export type ItemType = {
  [ItemEnum.COKE]: string;
  [ItemEnum.PEPSI]: string;
  [ItemEnum.DEW]: string;
};
