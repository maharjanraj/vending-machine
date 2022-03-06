import { ItemType } from '../interfaces/IProduct';
import ProductService from './product.service';
import db from '../database';

class OrderService {
  getAllOrders() {
    return Object.values(db.findOrders());
  }

  orderItem(type: ItemType) {
    const item = db.findProduct(type);
    const walletCash = db.findWalletCash();
    const walletCoins = db.findWalletCoins();

    if (walletCash + walletCoins < item.price) {
      throw new Error('Not enough wallet');
    }

    let pending = 0;

    // use wallet cash
    if (walletCash >= item.price) {
      db.addCash(item.price);
      db.removeWalletCash(item.price);
    } else if (walletCash > 0) {
      // use both wallets
      pending = item.price - walletCash;

      // use wallet cash first
      db.addCash(walletCash);
      db.removeWalletCash(walletCash);

      // then use wallet coins
      db.addCoins(pending);
      db.removeWalletCoins(pending);
    } else {
      // use wallet coins
      db.addCoins(item.price);
      db.removeWalletCoins(item.price);
    }

    db.addItem(type);
  }

  refundItem(type: ItemType) {
    const item = db.findProduct(type);
    const cash = db.findCash();
    const coins = db.findCoins();

    // use wallet cash
    if (cash >= item.price) {
      db.addWalletCash(item.price);
      db.removeCash(item.price);
    } else if (coins >= item.price) {
      // use wallet coins
      db.addWalletCoins(item.price);
      db.removeCoins(item.price);
    }

    db.removeItem(type);
  }
}

export default OrderService;
