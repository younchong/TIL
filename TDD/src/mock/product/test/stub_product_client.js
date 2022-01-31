class StubProductClient {
  async fetchItems() {
    return [
      { item: "milk", available: true },
      { item: "meat", available: false }
    ];
  }
}

module.exports = StubProductClient;