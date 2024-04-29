const inputName = document.querySelector("#name-input");

inputName.addEventListener("input", handInput);

function handInput(event) {
    const outputName = document.querySelector("#name-output");
    if (event.target.value.trim() === "") {
        outputName.textContent = "Anonymous";
    } else {
        outputName.textContent = event.currentTarget.value.trim();
    }
}

inputName.style.width = "360px"; 
inputName.style.height = "40px"; 
inputName.style.color = "#2E2F42";
inputName.style.fontSize = "16px";