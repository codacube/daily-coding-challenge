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

/*
Or Javascript 'way'

const fizzBuzz = (n) => 
  Array.from({ length: n })
    .map((_, index) => {
      const num = index + 1;
      if (num % 15 === 0) return "FizzBuzz";
      if (num % 3 === 0) return "Fizz";
      if (num % 5 === 0) return "Buzz";
      return num.toString();
    });

console.log(fizzBuzz(5)); 
*/
