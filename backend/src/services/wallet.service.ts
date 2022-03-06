import db from '../database';

class WalletService {
  getWalletInfo() {
    return {
      coins: db.findWalletCoins(),
      cash: db.findWalletCash(),
    };
  }

  addCoins(amount: number) {
    db.addWalletCoins(amount);
  }

  addCash(amount: number) {
    db.addWalletCash(amount);
  }
}

export default WalletService;
