// Variáveis
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");

const btnTry = document.querySelector("#btnTry");
const btnBack = document.querySelector("#btnBack");

let randomNumber = Math.round(Math.random() * 10);

let xAttempts = 1;

// Eventos
btnTry.addEventListener("click", PersonClickTry);
btnBack.addEventListener("click", PersonBackClick);

// Função CallBack
function PersonClickTry(event) {
  event.preventDefault();

  if (inputNumber.value !== "") {
    document.querySelector("#inputNumber");
    console.log(inputNumber.value);

    if (Number(inputNumber.value) == randomNumber) {
      togleScreen();

      document.querySelector(".screen2 h2").innerHTML =
        "Parabéns você acertou em " + xAttempts + " tentativas!";
    }

    inputNumber.value = "";
    xAttempts++;
  }
}

function PersonBackClick() {
  togleScreen();
  xAttempts = 1;
  randomNumber = Math.round(Math.random() * 10);
}

function togleScreen() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}
