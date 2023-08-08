// 2667. Create Hello World Function

/**
 * @return {Function}
 */
var createHelloWorld = function () {
  return function (...args) {};
};

var createHelloWorld = function () {
  return () => "Hello World";
};
/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */
