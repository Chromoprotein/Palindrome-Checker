function palindrome(str) {
  const strFiltered = str
    .toLowerCase()
    .split("")
    .filter((character) => /[a-zA-Z0-9]/.test(character));

  const strReversed = strFiltered.slice().reverse().join("");

  return strFiltered.join("") == strReversed;
}

console.log(palindrome("not a palindrome"));
