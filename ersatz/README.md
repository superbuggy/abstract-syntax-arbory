# Ersatz AST

## Ersatz Lexer

```js
// Define recognized operators and corresponding functions
const operations = {
  "-": (a, b) => a - b,
  "+": (a, b) => a + b,
  "*": (a, b) => a * b,
  "/": (a, b) => a / b,
};
```

## Ersatz Parser

> Recursive :(

```js
const evaluate = (polishNotationExpression) => {
  const [operator, ...numberChars] = polishNotationExpression.split(/\s/);
  const numbers = numberChars.map(Number);
  return operations[operator](...numbers);
};

// Parses and calculates a polish notation expression, iteratively w/ recursion

// @param string expression : a Polish prefix notation expression
// @returns number
exports.calculate = function calculate(expression) {
  // Defines a Regular Expression to group polish notation sub-expressions
  const unitaryExpressionPattern = /([\+\-\*\/] -?\d+(\.\d+)? -?\d+(\.\d+)?)/g;

  // replace sub-expressions with their evaluated result
  const iterativeCalculation = expression.replace(
    unitaryExpressionPattern,
    evaluate
  );

  // if any evaluation remains to be done, call the function again with the new
  // expression, with its subexpressions replaced with their evaluated values
  // the recursion is purposefully kept in tail position, in the else statement
  if (!unitaryExpressionPattern.test(iterativeCalculation)) {
    return Number(iterativeCalculation);
  } else {
    return calculate(iterativeCalculation);
  }
};
```

## Embeds?

> Who knows if GH will parse these embeds 🤷‍♂️

https://github.com/superbuggy/abstract-syntax-arbory/blob/2cef94fa8a982492940a9f31ed00f3db3400b3eb/ersatz/index.js#L1-L7

https://github.com/superbuggy/abstract-syntax-arbory/blob/2cef94fa8a982492940a9f31ed00f3db3400b3eb/ersatz/index.js#L9-L39