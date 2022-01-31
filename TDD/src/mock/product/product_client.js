class ProductClient {
  fetchItems() {
    return fetch("http://example.com").then((response) => 
    response.json()
    );
  }
}

module.exports = ProductClient;