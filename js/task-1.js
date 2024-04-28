const mainList = document.querySelectorAll(".item");

console.log(`Number of categories: ${mainList.length}`);
mainList.forEach(function (item) {
    const title = item.querySelector(".title");
    const list = item.querySelector("ul");
    console.log(`Categorie: ${title.textContent}`);
    const name = list.querySelectorAll("li");
    console.log(`Elements: ${name.length}`);
    name.forEach(function (nameItem) {
        // const nameItemText = nameItem.querySelector("li");
        nameItem.style.border = "1px solid #808080";
        nameItem.style.borderRadius = "4px";
        nameItem.style.width = "360px";
        nameItem.style.height = "40px";
        nameItem.style.flexShrink = "0";
        nameItem.style.fontSize = "16px";
        nameItem.style.lineHeight = "1.5";
        nameItem.style.letterSpacing = "0.04em";
        nameItem.style.boxSizing = "borderBox";
        nameItem.style.paddingTop = "8px";
        nameItem.style.paddingBottom = "8px";
        nameItem.style.paddingLeft = "16px";
    });
    
    
    title.style.margin = "0";
    title.style.fontSize = "24px";
    title.style.lineHeight = "1.33"; /* 133.333% */
    title.style.letterSpacing = "0.04em";
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
    });
    
    // name.classList.add("name");
    
    
    // return item;
const adList = document.querySelector("#categories");
console.log(adList.innerHTML);
// adList.style.justifyContent = "center";