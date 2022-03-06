import express from 'express';
import OrderService from '../services/order.service';
import ProductService from '../services/product.service';

class ProductController {
  path = '/product';
  router = express.Router();
  private productService;

  constructor() {
    this.intializeRoutes();
    this.productService = new ProductService();
  }

  intializeRoutes() {
    this.router.get(this.path, this.getAllProducts);
  }

  getAllProducts = (request: express.Request, response: express.Response) => {
    response.send(this.productService.getAllProducts());
  };
}

export default ProductController;
