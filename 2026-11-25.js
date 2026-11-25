function fizzBuzz(n) {
  // Predefined array size for faster inserts
  let result = new Array(n);

  for (let i = 0; i <= n; i++) {
    if (i % 15 === 0) result[i - 1] = "FizzBuzz";
    else if (i % 3 === 0) result[i - 1] = "Fizz";
    else if (i % 5 === 0) result[i - 1] = "Buzz";
    else result[i - 1] = i;
  }

  return result;
}

console.log(fizzBuzz(2));
console.log(fizzBuzz(4));
console.log(fizzBuzz(8));
console.log(fizzBuzz(20));
console.log(fizzBuzz(50));

/*
Or Javascript 'way', but performance hit on .from() and .map() (two arrays)

const fizzBuzz = (n) => 
  Array.from({ length: n })
    .map((_, index) => {
      const num = index + 1;
      if (num % 15 === 0) return "FizzBuzz";
      if (num % 3 === 0) return "Fizz";
      if (num % 5 === 0) return "Buzz";
      return num;
    });

console.log(fizzBuzz(20)); 
*/

/*
Method I've used to solved before

function fizzBuzz(n) {
  let result = [];

  for (let i = 1; i <= n; i++) {
    let value = "";
    if (i % 3 === 0) value += "Fizz";
    if (i % 5 === 0) value += "Buzz";
    if (value === "") value = i;

    result.push(value)
  }

  return result;
}

console.log(fizzBuzz(20)); 
*/
