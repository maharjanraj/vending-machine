import { getItem } from '../helpers';
import IProduct, { ItemType } from '../interfaces/IProduct';

type Products = {
  [ItemType.COKE]: IProduct;
  [ItemType.PEPSI]: IProduct;
  [ItemType.DEW]: IProduct;
};

// In memory database
class Database {
  private static instance: Database;
  private orders: Products;
  private products: Products;
  private coins: number;
  private cash: number;
  private walletCoins: number;
  private walletCash: number;

  constructor() {
    this.coins = 100;
    this.cash = 200;
    this.walletCoins = 0;
    this.walletCash = 0;
    this.products = {
      [ItemType.COKE]: getItem(ItemType.COKE, 10),
      [ItemType.PEPSI]: getItem(ItemType.PEPSI, 10),
      [ItemType.DEW]: getItem(ItemType.DEW, 10),
    };

    this.orders = {
      [ItemType.COKE]: getItem(ItemType.COKE, 0),
      [ItemType.PEPSI]: getItem(ItemType.PEPSI, 0),
      [ItemType.DEW]: getItem(ItemType.DEW, 0),
    };
  }

  public static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }

  findProduct(type: ItemType) {
    return this.products[type];
  }

  findProducts() {
    return this.products;
  }

  findOrders() {
    return this.orders;
  }

  findCoins() {
    return this.coins;
  }

  findCash() {
    return this.cash;
  }

  findWalletCoins() {
    return this.walletCoins;
  }

  findWalletCash() {
    return this.walletCash;
  }

  addCoins(coin: number) {
    this.coins += coin;
  }

  removeCoins(coin: number) {
    const rem = (this.coins -= coin);
    if (rem < 0) throw new Error('Not enough coins.');
    this.coins = rem;
  }

  addCash(cash: number) {
    this.cash += cash;
  }

  removeCash(cash: number) {
    const rem = (this.cash -= cash);
    if (rem < 0) throw new Error('Not enough cash.');
    this.cash = rem;
  }

  addWalletCoins(coin: number) {
    this.walletCoins += coin;
  }

  removeWalletCoins(coin: number) {
    const rem = (this.walletCoins -= coin);
    if (rem < 0) throw new Error('Not enough wallet coins.');
    this.walletCoins = rem;
  }

  addWalletCash(cash: number) {
    this.walletCash += cash;
  }

  removeWalletCash(cash: number) {
    const rem = (this.walletCash -= cash);
    if (rem < 0) throw new Error('Not enough wallet cash.');
    this.walletCash = rem;
  }

  addItem(type: ItemType) {
    const canBuy = this.products[type].stock > 0;
    if (!canBuy) {
      throw new Error('Out of order!');
    }
    this.orders[type].stock++;
    this.products[type].stock--;
  }

  removeItem(type: ItemType) {
    const canRemove = this.orders[type].stock > 0;
    if (!canRemove) {
      throw new Error('No item to remove.');
    }
    this.orders[type].stock--;
    this.products[type].stock++;
  }

  resetOrders() {
    this.orders = {
      [ItemType.COKE]: getItem(ItemType.COKE, 0),
      [ItemType.PEPSI]: getItem(ItemType.PEPSI, 0),
      [ItemType.DEW]: getItem(ItemType.DEW, 0),
    };
  }

  resetWallet() {
    this.walletCash = 0;
    this.walletCoins = 0;
  }
}

const instance = Database.getInstance();

export default instance;
