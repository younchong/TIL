class ProductService {
  constructor(ProductClient) {
    this.ProductClient = ProductClient;
  }

  fetchAvailableItems() {
    return this.ProductClient
      .fetchItems()
      .then((items) => items.filter((item) => item.available));
  }
}

module.exports = ProductService;