const ProductService = require("../product_service_no_di.js");
const ProductClient = require("../product_client.js");
jest.mock("../product_client.js");

describe("fetches", () => {
  const fetchItems = jest.fn(async () => [
    { item: "milk", available: true },
    { item: "meat", available: false }
  ]);
  let productService;
  // mockImplementation method is useful when you need to define the default implementation on a mock function
  ProductClient.mockImplementation(() => {
    return {
      fetchItems,
    };
  });

  beforeEach(() => {
    productService = new ProductService();
  });

  it("fetch", async () => {
    const items = await productService.fetchAvailableItems();
    expect(items.length).toBe(1);
    expect(items).toEqual([{ item: "milk", available: true }])
  });

  it("fetch", async () => {
    const items = await productService.fetchAvailableItems();
    expect(fetchItems).toHaveBeenCalledTimes(1);
  })
})