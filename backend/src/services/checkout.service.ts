import db from '../database';

class CheckoutService {
  checkout() {
    const walletCash = db.findWalletCash();
    const walletCoins = db.findWalletCoins();

    db.resetOrders();
    db.resetWallet();

    return { cash: walletCash, coins: walletCoins };
  }
}

export default CheckoutService;
