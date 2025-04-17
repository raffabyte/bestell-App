function getHauptgerichtSpeisenHtml(index) {
    return `<div onclick="addToBasketHauptgerichte(${index})" class="speise_div">
    <h3>${menu.hauptgerichte[index].name}</h3>
    <p class="speisen_beschreibung">${menu.hauptgerichte[index].beschreibung}</p>
    <p class="speisen_preis">${menu.hauptgerichte[index].preis}€</p>
    <button class="plus_button">
    <img class="plus" src="assets/img/plus.png">
    </button>
    </div>`
}
function getBeilageSpeisenHtml(index) {
    return `<div onclick="addToBasketBeilagen(${index})" class="speise_div">
    <h3>${menu.beilagen[index].name}</h3>
    <p class="speisen_beschreibung">${menu.beilagen[index].beschreibung}</p>
    <p class="speisen_preis">${menu.beilagen[index].preis}€</p>
    <button class="plus_button">
    <img class="plus" src="assets/img/plus.png">
    </button>
    </div>`
}
function getDessertSpeisenHtml(index) {
    return `<div onclick="addToBasketDessert(${index})" class="speise_div">
    <h3>${menu.desserts[index].name}</h3>
    <p class="speisen_beschreibung">${menu.desserts[index].beschreibung}</p>
    <p class="speisen_preis">${menu.desserts[index].preis}€</p>
    <button class="plus_button">
    <img class="plus" src="assets/img/plus.png">
    </button>
    </div>`
}
function getGetränkeHtml(index) {
    return `<div onclick="addToBasketGetränke(${index})" class="speise_div">
    <h3>${menu.getränke[index].name}</h3>
    <p class="speisen_beschreibung">${menu.getränke[index].beschreibung}</p>
    <p class="speisen_preis">${menu.getränke[index].preis}€</p>
    <button class="plus_button">
    <img class="plus" src="assets/img/plus.png">
    </button>
    </div>`
}
function getBasketHtml() {
    return `<div>
    </div>`
}