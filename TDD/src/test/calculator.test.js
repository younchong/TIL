const Calculator = require("../calculator.js");

describe("Calculator", () => {
  let cal;
  beforeEach(() => {
    cal = new Calculator();
  })
  it("inits with 0", () => {
    expect(cal.value).toBe(0);
  })
// 각각의 테스트 독립적으로, 개별적으로 서로에게 영향을 주지 않도록 구성
  it("set 7", () => {
    cal.set(9);

    expect(cal.value).toBe(9);
  })
  it("clear", () => {
    cal.set(9);
    cal.clear();
    expect(cal.value).toBe(0);
  })
  it("adds", () => {
    cal.set(9);
    
    expect(() => cal.add(92)).toThrow();

  })

  describe("divide", () => {
    it("0 / 0 === NaN", () => {
      cal.divide(0);
      expect(cal.value).toBe(NaN);
    })
    it("1 / 0 === Infinity", () => {
      cal.set(1);
      cal.divide(0);
      expect(cal.value).toBe(Infinity);
    })
  })
})