import db from '../database';

class ProductService {
  getAllProducts() {
    return Object.values(db.findProducts());
  }
}

export default ProductService;
