// variables
let randomNumber = Math.floor(Math.random() * 10 + 1);
let userNumber;

let container = document.querySelector(".container");
let displayNum = document.getElementById("correct-num");
let message = document.querySelector(".message");

// bucle 'for' para condicionar cantidad de intentos
for (let i = 1; i <= 3; i++) {
  userNumber = parseInt(prompt(`Choose a number`));

  //si el usuario pierde los tres intentos
  if (i >= 3 && userNumber !== randomNumber) {
    displayNum.textContent = randomNumber;
    message.textContent = `Perdiste 😢 El número era`;
    container.style.backgroundColor = "red";
    break;
  }

  // si el usuario no adivina el número
  if (userNumber !== randomNumber) {
    if (userNumber < randomNumber) {
      alert(
        `El número es mayor que ${userNumber}... te quedan ${3 - i} intentos`
      );
    } else {
      alert(
        `El número es menor que ${userNumber}... te quedan ${3 - i} intentos`
      );
    }
  } else {
    // si el usuario adivina el numero
    displayNum.textContent = randomNumber;
    message.textContent = `Ganaste 🎉!`;
    container.style.backgroundColor = "green";
    break;
  }
}
