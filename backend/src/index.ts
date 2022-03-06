import express from 'express';
import cors from 'cors';
import ProductController from './controllers/product.controller';
import OrderController from './controllers/order.controller';
import BalanceController from './controllers/balance.controller';
import WalletController from './controllers/wallet.controller';
import CheckoutController from './controllers/checkout.controller';

const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());

// initialize controllers
const controllers = [
  new ProductController(),
  new OrderController(),
  new BalanceController(),
  new WalletController(),
  new CheckoutController(),
];

// register routes
controllers.forEach((controller) => {
  app.use('/', controller.router);
});

// default error handling
app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    res.status(500).send({ error: err.message });
  }
);

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`);
});
