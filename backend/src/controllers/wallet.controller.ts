import express from 'express';
import WalletService from '../services/wallet.service';

class WalletController {
  path = '/wallet';
  router = express.Router();
  private walletService;

  constructor() {
    this.intializeRoutes();
    this.walletService = new WalletService();
  }

  intializeRoutes() {
    this.router.get(this.path, this.getWalletInfo);
    this.router.post('/addCoins', this.addCoins);
    this.router.post('/addCash', this.addCash);
  }

  addCoins = (request: express.Request, response: express.Response) => {
    this.walletService.addCoins(request.body.coins);
    response.send({ message: 'success' });
  };

  addCash = (request: express.Request, response: express.Response) => {
    this.walletService.addCash(request.body.cash);
    response.send({ message: 'success' });
  };

  getWalletInfo = (request: express.Request, response: express.Response) => {
    response.send(this.walletService.getWalletInfo());
  };
}

export default WalletController;
