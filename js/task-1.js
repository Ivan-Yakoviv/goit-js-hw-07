const mainList = document.querySelectorAll(".item");
// mainList.style.listStyle = "none";
console.log(mainList.length);
console.log(`Number of categories: ${mainList.length}`);
mainList.forEach(function (item) {
    const title = item.querySelector(".title");
    title.style.margin = "0";
    title.style.fontSize = "24px";
    title.style.lineHeight = "1.33"; /* 133.333% */
    title.style.letterSpacing = "0.04em";
    const list = item.querySelector("ul");
    
    list.style.padding = "0";
    list.style.listStyle = "none";
    list.style.width = "360px";
    list.style.display = "flex";
    list.style.flexDirection = "column";
    list.style.gap = "8px";
    list.style.alignItems = "flex-start";
    list.parentElement.style.listStyle = "none";
    list.parentElement.style.width = "360px";
    list.parentElement.style.display = "flex";
    list.parentElement.style.flexDirection = "column";
    list.parentElement.style.gap = "16px";
    list.parentElement.style.borderRadius = "8px";
    list.parentElement.style.padding = "16px";
    console.log(`Categorie: ${title.textContent}`);
        const name = item.querySelectorAll("li");
        console.log(`Elements: ${name.length}`);
    });
    
    // name.classList.add("name");
    
    
    // return item;
const adList = document.querySelector("#categories");
console.log(adList.innerHTML);
adList.style.justifyContent = "center";