import express from 'express';
import CheckoutService from '../services/checkout.service';

class CheckoutController {
  path = '/checkout';
  router = express.Router();
  private checkoutService;

  constructor() {
    this.intializeRoutes();
    this.checkoutService = new CheckoutService();
  }

  intializeRoutes() {
    this.router.get(this.path, this.checkout);
  }

  checkout = (request: express.Request, response: express.Response) => {
    response.send(this.checkoutService.checkout());
  };
}

export default CheckoutController;
