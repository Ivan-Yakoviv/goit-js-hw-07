const button = document.querySelector(".change-color");
const widget = document.querySelector(".widget");
const textColor = document.querySelector(".color");


button.addEventListener("click", changeColor);
function changeColor() {
   function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  };
  const color = getRandomHexColor();
  widget.parentElement.style.backgroundColor = `${color}`;
  textColor.textContent = `${color}`;
  textColor.style.color = `${color}`;
  console.log(color);
};



