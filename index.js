var newPasswodrd = "";
var genButton = document.querySelector("#genButton");
var generatedPass = document.querySelector("#generatedPass");
var randNum;
function newRandom() {
    randNum = Math.random() * 100;
}
genButton.addEventListener("click", function () {
    //   console.log(randNum);
    console.log(generatedPass.textContent);
    newRandom();
    generatedPass.textContent = randNum;
});
