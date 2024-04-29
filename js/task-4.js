const form = document.querySelector(".login-form");

form.addEventListener("submit", handSubmit);

function handSubmit(event) {
    event.preventDefault();

    const elements = event.currentTarget.elements;

    const info = {
        email: elements.email.value,
        password: elements.password.value,
    }

    if (elements.email.value === "" || elements.password.value === "") {
        alert('All form fields must be filled in');
        return false;
    }

    console.log(info);

    event.currentTarget.reset()
};

const label = document.querySelector("label");
const button = document.querySelector("button");
const input = document.querySelector("input")

form.style.display = "flex";
form.style.width = "408px";
form.style.flexDirection = "column";
form.style.gap = "16px";
form.style.padding = "24px";

label.style.display = "flex";
label.style.flexDirection = "column";
label.style.alignItems = "flex-start";
label.style.gap = "8px";
label.style.fontSize = "16px";
label.style.lineHeight = "1.5"; /* 150% */
label.style.letterSpacing = "0.04em";

input.style.display = "flex";
input.style.width = "360px";
input.style.height = "40px";
input.style.justifyContent = "center";
input.style.alignItems = "center";
input.style.color = "#808080";
input.style.fontSize = "16px";

button.style.display = "flex";
button.style.width = "86px";
button.style.height = "40px";
button.style.padding = "8px 16px";
button.style.justifyContent = "center";
button.style.alignItems = "center";
button.style.gap = "10px";
button.style.borderRadius = "8px";
button.style.background = "#4E75FF";
button.style.color = "#FFF";
button.style.fontSize = "16px";
button.style.fontWeight = "500";
button.style.lineHeight = "1.5"; /* 150% */
button.style.letterSpacing = "0.04em";



console.log(form.innerHTML);



