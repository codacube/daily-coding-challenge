function fizzBuzz(n) {
  let result = [];

  for (let i = 1; i <= n; i++) {
    switch (true) {
      case i % 3 === 0 && i % 5 === 0:
        result.push("FizzBuzz");
        break;
      case i % 3 === 0:
        result.push("Fizz");
        break;
      case i % 5 === 0:
        result.push("Buzz");
        break;

      default:
        result.push(i);
    }
  }

  return result;
}

console.log(fizzBuzz(2));
console.log(fizzBuzz(4));
console.log(fizzBuzz(8));
console.log(fizzBuzz(20));
console.log(fizzBuzz(50));
