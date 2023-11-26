function palindrome(str) {
  const strFiltered = str
    .toLowerCase()
    .split("")
    .filter((character) => /[a-zA-Z0-9]/.test(character));

  const strReversed = strFiltered
    .slice()
    .map((element, index, array) => array[array.length - index - 1])
    .join("");
  console.log(strReversed);

  return strFiltered.join("") == strReversed;
}

console.log(palindrome("ei"));
