import db from '../database';

class BalanceService {
  getBalanceInfo() {
    return {
      coins: db.findCoins(),
      cash: db.findCash(),
    };
  }
}

export default BalanceService;
