var GEN_BUTTON = document.querySelector("#genButton");
var GENERATED_PASS = document.querySelector("#generatedPass");
var PASS_LENGTH = document.querySelector("#copy-input");
var LENGTH_NUM = document.querySelector("#selectedValue");
var LOWER_CASE = document.querySelector("#lowerCase");
var UPPER_CASE = document.querySelector("#upperCase");
var WITH_NUMBERS = document.querySelector("#numbers");
var WITH_SYMBOLS = document.querySelector("#symbols");
var randNum;
var newPassword = "abcdefghig";
var newFF = "";
var LETTERS = [
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
var SYMBOLS = ["!", "@", "#", "$", "%", "&", "?", "-", "+", "=", "~"];
function toLower() {
    LENGTH_NUM.textContent = PASS_LENGTH.value;
    for (var i = 0; i <= PASS_LENGTH.value - 1; i++) {
        randNum = Math.floor(Math.random() * LETTERS.length);
        newPassword += LETTERS[randNum];
    }
}
function toUpper() {
    for (var n = 0; n <= newPassword.length / 4; n++) {
        randNum = Math.floor(Math.random() * newPassword.length);
        newPassword = newPassword.replace(newPassword[randNum], newPassword[randNum].toUpperCase());
    }
}
function withNumbers() {
    for (var n = 0; n <= newPassword.length / 4; n++) {
        randNum = Math.floor(Math.random() * newPassword.length);
        var nummmm = String(randNum);
        newPassword = newPassword.replace(newPassword[randNum], nummmm);
    }
}
function withSymbols() {
    for (var n = 0; n <= newPassword.length / 4; n++) {
        randNum = Math.floor(Math.random() * newPassword.length);
        newPassword = newPassword.replace(newPassword[randNum], SYMBOLS[randNum]);
    }
}
GEN_BUTTON.addEventListener("click", function () {
    newPassword = "";
    toLower();
    UPPER_CASE.checked ? toUpper() : console.log("no upper");
    WITH_NUMBERS.checked ? withNumbers() : console.log("no numbers");
    WITH_SYMBOLS.checked ? withSymbols() : console.log("no symbols");
    GENERATED_PASS.textContent = newPassword;
    console.log("eeded");
});
