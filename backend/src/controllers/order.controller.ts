import express from 'express';
import OrderService from '../services/order.service';

class OrderController {
  path = '/order';
  router = express.Router();
  private orderService;

  constructor() {
    this.intializeRoutes();
    this.orderService = new OrderService();
  }

  intializeRoutes() {
    this.router.get(this.path, this.getAllOrders);
    this.router.post(this.path, this.orderItem);
    this.router.post('/refund', this.refundItem);
  }

  getAllOrders = (request: express.Request, response: express.Response) => {
    response.send(this.orderService.getAllOrders());
  };

  orderItem = (request: express.Request, response: express.Response) => {
    try {
      this.orderService.orderItem(request.body.type);
      response.send({ message: 'success' });
    } catch (error) {
      response.status(400).send({ error: error.message });
    }
  };

  refundItem = (request: express.Request, response: express.Response) => {
    try {
      this.orderService.refundItem(request.body.type);
      response.send({ message: 'success' });
    } catch (error) {
      response.status(400).send({ error: error.message });
    }
  };
}

export default OrderController;
