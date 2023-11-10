const assert = require("node:assert").strict;
const calculator = require(".");

const it = (expectation, func) => {
  const message = expectation.replace(/(\w+)(s)/, "$1");
  try {
    func();
    console.log(`✅ it does ${message}`);
  } catch (error) {
    console.error(`❌ it does not ${message}`);
  }
};

const describe = (testSuiteName, func) => {
  console.log(`${testSuiteName} test suite running...`);
  func();
};

const evaluateWith = (value, func) => {
  const result = func(value);
  console.log(`Evaluated '${value}' to be ${result}`);
  return result;
};

const calculate = (value) => evaluateWith(value, calculator.calculate);

describe("Calculator", function () {
  it("returns zero", function () {
    const result = calculate("0");
    return assert.equal(result, 0);
  });

  it("performs addition", function () {
    const result = calculate("+ 7 9");
    return assert.equal(result, 7 + 9);
  });

  it("performs subtraction and multiplication", function () {
    const result = calculate("- 5 * 6 3");
    return assert.equal(result, 5 - 6 * 3);
  });

  it("performs addition and multiplication", function () {
    const result = calculate("* + 6 5 9");
    return assert.equal(result, (6 + 5) * 9);
  });

  it("performs subtraction and division", function () {
    const result = calculate("/ - 19 7 + 4 2");
    return assert.equal(result, (19 - 7) / (4 + 2));
  });

  it("performs multiplication and division with a negative numerator", function () {
    const result = calculate("* 13 / -51 17");
    return assert.equal(result, (13 * -51) / 17);
  });
  it("performs addition and division with decimal terms", function () {
    const result = calculate("+ + 9 / 6.5 13 / 1.5 3.0");
    return assert.equal(result, 9 + 6.5 / 13 + 1.5 / 3.0);
  });
});
