const fetchProduct = require("../async.js");

test("the test is Milk", () => {
  return expect(fetchProduct("milk")).resolves.toEqual({ item: "Milk", price: 200 });
})

test("the network error", () => {
  return expect(fetchProduct("error")).rejects.toMatch("error");
})

