let newPasswodrd: string = "";
const genButton: any = document.querySelector("#genButton");
let generatedPass: any = document.querySelector("#generatedPass");
let randNum: number;

function newRandom() {
  randNum = Math.random() * 100;
}
genButton.addEventListener("click", () => {
  //   console.log(randNum);
  console.log(generatedPass.textContent);
  newRandom();
  generatedPass.textContent = randNum;
});
