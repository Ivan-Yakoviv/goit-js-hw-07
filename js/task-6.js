function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const controlsBox = document.querySelector("#controls");
const boxesBox = document.querySelector("#boxes");
const input = document.querySelector("input");
const createBtn = document.querySelector("#controls button[data-create]");
const destroyBtn = document.querySelector("#controls button[data-destroy]");

function createBoxes(amount) {
  boxesBox.innerHTML = "";
  const markup = [];
  for (let i = 0; i < amount; i += 1) {
    const size = 30 + i * 10;
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    markup.push(box);
  }
  boxesBox.append(...markup);
}

createBtn.addEventListener("click", createClick);

function createClick() {
  const amount = input.value;
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = "";
  }
}

destroyBtn.addEventListener("click", destroyClick);

function destroyClick() {
  boxesBox.innerHTML = "";
}