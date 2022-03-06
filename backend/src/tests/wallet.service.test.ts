import WalletService from '../services/wallet.service';

describe('wallet service', () => {
  describe('getWalletInfo', () => {
    let walletService = new WalletService();

    test('should update wallet cash and coins', () => {
      walletService.addCash(10);
      walletService.addCoins(200);
      const actual = walletService.getWalletInfo();
      expect(actual).toEqual({ cash: 10, coins: 200 });
    });
  });
});
