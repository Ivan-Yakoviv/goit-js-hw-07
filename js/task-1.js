const mainList = document.querySelectorAll(".item");

console.log(mainList.length);
console.log(`Number of categories: ${mainList.length}`);
mainList.forEach(function (item) {
    const title = item.querySelector(".title");
    const list = item.querySelector("ul");
    list.classList.add("list");
    console.log(`Categorie: ${title.textContent}`);
        const name = item.querySelectorAll("li");
        console.log(`Elements: ${name.length}`);
    });
    
    // name.classList.add("name");
    
    
    // return item;
const adList = document.querySelector("#categories");
console.log(adList.innerHTML);
adList.style.justifyContent = "center";