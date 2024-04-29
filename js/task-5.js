const button = document.querySelector(".change-color");
const widget = document.querySelector(".widget");
const textColor = document.querySelector(".color");


button.addEventListener("click", changeColor);
function changeColor() {
   function getRandomHexColor() {
    // widget.parentElement.style.backgroundColor = "getRandomHexColor";
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  };
  const color = getRandomHexColor();
  widget.parentElement.style.backgroundColor = `${color}`;
  textColor.textContent = `${color}`;
  textColor.style.color = `${color}`;
  console.log("The button was pressed and now the next image will appear");
  // console.log(getRandomHexColor());
  console.log(color);
  
};



// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// console.log(color);