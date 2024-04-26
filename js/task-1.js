const mainList = document.querySelectorAll(".item");
console.log(mainList.item.h2);
console.log(`Number of categories: ${mainList.length}`);
mainList.forEach((categorie) =>
    console.log(`Categorie: ${categorie.title}`)
);