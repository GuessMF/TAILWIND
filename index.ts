const GEN_BUTTON: any = document.querySelector("#genButton");
const GENERATED_PASS: any = document.querySelector("#generatedPass");
const PASS_LENGTH: any = document.querySelector("#copy-input");
const LENGTH_NUM: any = document.querySelector("#generatedPass");
const LOWER_CASE: any = document.querySelector("#lowerCase");
const UPPER_CASE: any = document.querySelector("#upperCase");
const WITH_NUMBERS: any = document.querySelector("#numbers");
const WITH_SYMBOLS: any = document.querySelector("#symbols");
const LENGHT_VALUE: any = document.querySelector("#length-value");
const COPY_INPUT: any = document.querySelector("#copy-input");
const PASSWORD_INPUT: any = document.querySelector("#password_input");

let randNum: number;
let newPassword: string = "abcdefghig";
let newFF: string = "";

const LETTERS: string[] = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const SYMBOLS = ["!", "@", "#", "$", "%", "&", "?", "-", "+", "=", "~"];

function toLower() {
  LENGTH_NUM.value = PASS_LENGTH.value;
  for (let i: number = 0; i <= PASS_LENGTH.value - 1; i++) {
    randNum = Math.floor(Math.random() * LETTERS.length);
    newPassword += LETTERS[randNum];
  }
}

function toUpper() {
  for (let n: number = 0; n <= newPassword.length / 4; n++) {
    randNum = Math.floor(Math.random() * newPassword.length);
    newPassword = newPassword.replace(
      newPassword[randNum],
      newPassword[randNum].toUpperCase()
    );
  }
}
function withNumbers() {
  for (let n: number = 0; n <= newPassword.length / 4; n++) {
    randNum = Math.floor(Math.random() * 10);
    let nummmm: string = String(randNum);
    newPassword = newPassword.replace(newPassword[randNum], nummmm);
  }
}
function withSymbols() {
  for (let n: number = 0; n <= newPassword.length / 4; n++) {
    randNum = Math.floor(Math.random() * 11);
    newPassword = newPassword.replace(newPassword[randNum], SYMBOLS[randNum]);
  }
}

GEN_BUTTON.addEventListener("click", () => {
  newPassword = "";
  toLower();
  UPPER_CASE.checked ? toUpper() : null;
  WITH_NUMBERS.checked ? withNumbers() : null;
  WITH_SYMBOLS.checked ? withSymbols() : null;
  GENERATED_PASS.value = newPassword;
});

PASSWORD_INPUT.addEventListener("click", () => {
  let copyText: any = document.getElementById("generatedPass");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);
});

COPY_INPUT.addEventListener("input", (e: any) => {
  LENGHT_VALUE.textContent = e.target.value;
});
