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

https://github.com/superbuggy/abstract-syntax-arbory/blob/2cef94fa8a982492940a9f31ed00f3db3400b3eb/ersatz/index.js#L9-L39