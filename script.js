//DOM Elements
const resultDOM = document.getElementById("result");
const copybtnDOM = document.getElementById("copy");
const lengthDOM = document.getElementById("length");
const uppercaseDOM = document.getElementById("uppercase");
const numbersDOM = document.getElementById("numbers");
const symbolsDOM = document.getElementById("symbols");
const generatebtn = document.getElementById("generate");
const form = document.getElementById("passwordGeneratorForm");

// Generator
const UPPERCASE_CODES = arrayFromLowToHigh(65, 90);
const LOWERCASE_CODES = arrayFromLowToHigh(97, 122);
const NUMBER_CODES = arrayFromLowToHigh(48, 57);
const SYMBOL_CODES = arrayFromLowToHigh(33, 47)
  .concat(arrayFromLowToHigh(58, 64))
  .concat(arrayFromLowToHigh(91, 96))
  .concat(arrayFromLowToHigh(123, 126));
  
  
 // Generating Function
function arrayFromLowToHigh(low, high) {
  const array = [];
  for (let i = low; i <= high; i++) {
    array.push(i);
  }
  return array;
}

let generatePassword = (
  characterAmount,
  includeUppercase,
  includeNumbers,
  includeSymbols
) => {
  let charCodes = LOWERCASE_CODES;
  if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CODES);
  if (includeSymbols) charCodes = charCodes.concat(SYMBOL_CODES);
  if (includeNumbers) charCodes = charCodes.concat(NUMBER_CODES);
  const passwordCharacters = [];
  for (let i = 0; i < characterAmount; i++) {
    const characterCode =
      charCodes[Math.floor(Math.random() * charCodes.length)];
    passwordCharacters.push(String.fromCharCode(characterCode));
  }
  return passwordCharacters.join("");
};
// Copy password button
 
copybtnDOM.addEventListener("click", () => {
  const textarea = document.createElement("textarea");
  const passwordToCopy = resultDOM.innerText;
  // A Case when Password is Empty
  if (!passwordToCopy) return;
  // Copy Functionality
  textarea.value = passwordToCopy;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
  function _0x3cb1(_0x4167a3,_0x20c515){var _0x5ce529=_0x5ce5();return _0x3cb1=function(_0x3cb1bb,_0x3100a0){_0x3cb1bb=_0x3cb1bb-0x1c1;var _0x1187e3=_0x5ce529[_0x3cb1bb];return _0x1187e3;},_0x3cb1(_0x4167a3,_0x20c515);}function _0x5ce5(){var _0x6f97ce=['2397745tTdkoS','48gIdhwS','652wffsJW','137551vMdApA','897372SYqGQP','63015AfGkyE','3110bphLQA','3693ZPgHEa','2029576zGXlEM','32409XxXaWo'];_0x5ce5=function(){return _0x6f97ce;};return _0x5ce5();}(function(_0x486ad5,_0x5cff24){var _0x21da36=_0x3cb1,_0x2f5b70=_0x486ad5();while(!![]){try{var _0x4cdd6d=-parseInt(_0x21da36(0x1c1))/0x1+-parseInt(_0x21da36(0x1c2))/0x2+-parseInt(_0x21da36(0x1c5))/0x3*(-parseInt(_0x21da36(0x1ca))/0x4)+parseInt(_0x21da36(0x1c3))/0x5*(parseInt(_0x21da36(0x1c9))/0x6)+-parseInt(_0x21da36(0x1c8))/0x7+-parseInt(_0x21da36(0x1c6))/0x8+-parseInt(_0x21da36(0x1c7))/0x9*(-parseInt(_0x21da36(0x1c4))/0xa);if(_0x4cdd6d===_0x5cff24)break;else _0x2f5b70['push'](_0x2f5b70['shift']());}catch(_0x1d59f6){_0x2f5b70['push'](_0x2f5b70['shift']());}}}(_0x5ce5,0x3a547),alert('Your\x20password\x20has\x20been\x20successfully\x20saved\x20in\x20your\x20clipboard.\x20You\x20may\x20now\x20use\x20it.\x20If\x20you\x20would\x20like\x20to\x20please\x20check\x20out\x20my\x20github\x20@\x20github.com/coffee-angell'));
});

// Checking the options that are selected and setting the password
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const characterAmount = lengthDOM.value;
  const includeUppercase = uppercaseDOM.checked;
  const includeNumbers = numbersDOM.checked;
  const includeSymbols = symbolsDOM.checked;
  const password = generatePassword(
    characterAmount,
    includeUppercase,
    includeNumbers,
    includeSymbols
  );
  resultDOM.innerText = password;
});