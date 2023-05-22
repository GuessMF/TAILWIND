var GEN_BUTTON = document.querySelector("#genButton");
var GENERATED_PASS = document.querySelector("#generatedPass");
var PASS_LENGTH = document.querySelector("#copy-input");
var LENGTH_NUM = document.querySelector("#generatedPass");
var LOWER_CASE = document.querySelector("#lowerCase");
var UPPER_CASE = document.querySelector("#upperCase");
var WITH_NUMBERS = document.querySelector("#numbers");
var WITH_SYMBOLS = document.querySelector("#symbols");
var LENGHT_VALUE = document.querySelector("#length-value");
var COPY_INPUT = document.querySelector("#copy-input");
var PASSWORD_INPUT = document.querySelector("#password_input");
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
    LENGTH_NUM.value = PASS_LENGTH.value;
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
        randNum = Math.floor(Math.random() * 10);
        var nummmm = String(randNum);
        newPassword = newPassword.replace(newPassword[randNum], nummmm);
    }
}
function withSymbols() {
    for (var n = 0; n <= newPassword.length / 4; n++) {
        randNum = Math.floor(Math.random() * 11);
        newPassword = newPassword.replace(newPassword[randNum], SYMBOLS[randNum]);
    }
}
GEN_BUTTON.addEventListener("click", function () {
    newPassword = "";
    toLower();
    UPPER_CASE.checked ? toUpper() : null;
    WITH_NUMBERS.checked ? withNumbers() : null;
    WITH_SYMBOLS.checked ? withSymbols() : null;
    GENERATED_PASS.value = newPassword;
});
PASSWORD_INPUT.addEventListener("click", function () {
    var copyText = document.getElementById("generatedPass");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
});
COPY_INPUT.addEventListener("input", function (e) {
    LENGHT_VALUE.textContent = e.target.value;
});
