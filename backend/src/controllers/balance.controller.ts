import express from 'express';
import BalanceService from '../services/balance.service';

class BalanceController {
  path = '/balance';
  router = express.Router();
  private balanceService;

  constructor() {
    this.intializeRoutes();
    this.balanceService = new BalanceService();
  }

  intializeRoutes() {
    this.router.get(this.path, this.getBalanceInfo);
  }

  getBalanceInfo = (request: express.Request, response: express.Response) => {
    response.send(this.balanceService.getBalanceInfo());
  };
}

export default BalanceController;
