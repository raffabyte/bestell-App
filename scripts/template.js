function getHauptgerichtSpeisenHtml(index) {
    return `<div onclick="addToBasket(${index}, 'hauptgerichte')" class="speise_div">
    <h3>${menu.hauptgerichte[index].name}</h3>
    <p class="speisen_beschreibung">${menu.hauptgerichte[index].beschreibung}</p>
    <p class="speisen_preis">${menu.hauptgerichte[index].preis}€</p>
    <button class="plus_button">
    <img class="plus" src="assets/img/plus.png">
    </button>
    </div>`
}
function getBeilageSpeisenHtml(index) {
    return `<div onclick="addToBasket(${index}, 'beilagen')" class="speise_div">
    <h3>${menu.beilagen[index].name}</h3>
    <p class="speisen_beschreibung">${menu.beilagen[index].beschreibung}</p>
    <p class="speisen_preis">${menu.beilagen[index].preis}€</p>
    <button class="plus_button">
    <img class="plus" src="assets/img/plus.png">
    </button>
    </div>`
}
function getDessertSpeisenHtml(index) {
    return `<div onclick="addToBasket(${index}, 'desserts')" class="speise_div">
    <h3>${menu.desserts[index].name}</h3>
    <p class="speisen_beschreibung">${menu.desserts[index].beschreibung}</p>
    <p class="speisen_preis">${menu.desserts[index].preis}€</p>
    <button class="plus_button">
    <img class="plus" src="assets/img/plus.png">
    </button>
    </div>`
}
function getGetränkeHtml(index) {
    return `<div onclick="addToBasket(${index}, 'getränke')" class="speise_div">
    <h3>${menu.getränke[index].name}</h3>
    <p class="speisen_beschreibung">${menu.getränke[index].beschreibung}</p>
    <p class="speisen_preis">${menu.getränke[index].preis}€</p>
    <button class="plus_button">
    <img class="plus" src="assets/img/plus.png">
    </button>
    </div>`
}
function getBasketHtml(index, category) {
    return `<div class="basket_item">
    <h4>${menu[category][index].name}</h4>
    <div class="dispaly_flex">
    <button class="minusPlus_button"><img class="minusUndPlus" src="assets/img/minus.png"></button>
    <p>${menu[category][index].amount}</p>
    <button class="minusPlus_button"><img class="minusUndPlus" src="assets/img/plus.png"></button>
    </div>
    </div>`
}