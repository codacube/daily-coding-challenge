function isValidMessage(message, validator) {
  // Sanity checks
  if (!message || typeof message !== "string") return false;
  if (!validator || typeof validator !== "string") return false;

  const words = message.split(" ");

  // The lengths should match
  if (words.length !== validator.length) return false;

  const allValid = words.every((word, i) => {
    const result =
      word.slice(0, 1).toLowerCase() === validator[i].toLowerCase();
    return result;
  });

  return allValid;
}

console.log(isValidMessage("hello world", "hw")); // true.
console.log(isValidMessage("ALL CAPITAL LETTERS", "acl")); // true.
console.log(isValidMessage("Coding challenge are boring.", "cca")); // false.
console.log(
  isValidMessage("The quick brown fox jumps over the lazy dog.", "TQBFJOTLD"),
); // true.
console.log(
  isValidMessage("The quick brown fox jumps over the lazy dog.", "TQBFJOTLDT"),
); // false.
console.log(
  isValidMessage("The quick brown fox jumps over the lazy dog.", 258429085),
); // false.
