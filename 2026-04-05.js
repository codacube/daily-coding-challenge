function getRotation(n) {
  if (n <= 0) return "none";

  const digitCount = countDigits(n);

  for (let i = 0; i < digitCount; i++) {
    if (n % digitCount === 0) {
      return i;
    }
    n = rotateDigits(n);
  }

  return "none";
}

function countDigits(num) {
  return Math.abs(num).toString().length;
}

function rotateDigits(num) {
  const str = String(num);
  return Number(str.slice(1) + str[0]); // Moves the first digit to the end
}
