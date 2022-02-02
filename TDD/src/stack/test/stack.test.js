const Stack = require("../stack.js");

describe("Stack", () => {
  let stack;
  beforeEach(() => {
    stack = new Stack;
  })
  it("is created empty", () => {
    expect(stack.size()).toBe(0);
  })
  it("push", () => {
    stack.push(1)
    expect(stack.size()).toBe(1);
    
  })
  
  describe("pop", () => {
    it ("throws an error if stack is empty", () => {
      expect(() => {
        stack.pop();
      }).toThrow("Stack is empty");
    })

    it ("returns the last pushed item and remove it from the stack", () => {
      stack.push("🍌");
      stack.push("🍍");
      expect(stack.pop()).toBe("🍍");
      expect(stack.size()).toBe(1);
    })
  })

  describe("peek", () => {
    it ("throws an error if stack is empty", () => {
      expect(() => {
        stack.peek();
      }).toThrow("Stack is empty");
    })

    it ("returns last pushed items and stay it in the stack", () => {
      stack.push("🍌");
      stack.push("🍍");
      expect(stack.peek()).toBe("🍍");
      expect(stack.size()).toBe(2);
    })
  })
})


// TDD, test 먼저 구현하고 실패한걸 패스하도록 만들기