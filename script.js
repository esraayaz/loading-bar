const counter = document.querySelector(".counter");
const front = document.querySelector(".front");

let number = 0;

updateNumber();

function updateNumber() {
  counter.textContent = number + "%"; //
  front.style.width = number + "%"; //
  number++;

  if (number < 101) {
    setTimeout(updateNumber, 20);
  }
}
