// Cleaner method
function isFizzBuzz(sequence) {
  return sequence.every((item, i) => {
    const n = i + 1;
    let expected = n;

    if (n % 15 === 0) expected = "FizzBuzz";
    else if (n % 3 === 0) expected = "Fizz";
    else if (n % 5 === 0) expected = "Buzz";

    if (item !== expected) {
      console.log(`(element ${n}) fail: expected '${expected}', got '${item}'`);
      return false;
    }

    return true;
  });
}

console.log(`test 1 (true) = ${isFizzBuzz([1, 2, "Fizz", 4])}`); // true
console.log(`test 2 (false) = ${isFizzBuzz([1, 2, 3, 4])}`); // false
console.log(`test 3 (false) = ${isFizzBuzz([1, 2, "Fizz", 4, "Buzz", 7])}`); // false
console.log(
  `test 4 (false) = ${isFizzBuzz([1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, "FizzBuzz"])}`,
); // false.
console.log(
  `test 5 (false) = ${isFizzBuzz([1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, "Fizz"])}`,
); // false.
console.log(
  `test 6 (false) = ${isFizzBuzz([1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, "Buzz"])}`,
); // false.
console.log(
  `test 7 (true) = ${isFizzBuzz([1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz", 16, 17, "Fizz", 19, "Buzz", "Fizz", 22, 23, "Fizz", "Buzz", 26, "Fizz", 28, 29, "FizzBuzz", 31, 32, "Fizz", 34, "Buzz", "Fizz", 37, 38, "Fizz", "Buzz", 41, "Fizz", 43, 44, "FizzBuzz", 46, 47, "Fizz", 49, "Buzz"])}`,
); // true.

/*

// My original method

function isFizzBuzz(sequence) {
  const result = sequence.every((item, i) => {
    i++
    // console.log(`pass= ${item}, ${i}`)

    if (i % 15 === 0) {
      if (item !== "FizzBuzz") {
        console.log(` (element ${i}) fail: expected 'FizzBuzz', got '${item}'`)
        return false
      }
    } else if (i % 3 === 0) {
      if (item !== "Fizz") {
        console.log(` (element ${i}) fail: expected 'Fizz', got '${item}'`)
        return false
      }
    } else if (i % 5 === 0) {
      if (item !== "Buzz") {
        console.log(` (element ${i}) fail: expected 'Buzz', got '${item}'`)
        return false
      }
    } else if (i !== item) {
      console.log(` (element ${i}) fail: expected '${i} == ${i}', got '${item}'`)
      return false
    }

    return true
  })

  return result;
}

*/
