export enum ItemType {
  COKE = 'Coke',
  PEPSI = 'Pepsi',
  DEW = 'Dew',
}

export default interface IProduct {
  name: string;
  image: string;
  price: number;
  stock: number;
}
