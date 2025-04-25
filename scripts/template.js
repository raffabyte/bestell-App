function getHauptgerichtSpeisenHtml(index) {
    return `<div onclick="pushToBasket(${index}, 'hauptgerichte')" class="speise_div">
    <h3>${menu.hauptgerichte[index].name}</h3>
    <p class="speisen_beschreibung">${menu.hauptgerichte[index].beschreibung}</p>
    <p class="speisen_preis">${menu.hauptgerichte[index].preis}€</p>
    <button class="plus_button">
    <img class="plus" src="assets/img/plus.png">
    </button>
    </div>`
}

function getBeilageSpeisenHtml(index) {
    return `<div onclick="pushToBasket(${index}, 'beilagen')" class="speise_div">
    <h3>${menu.beilagen[index].name}</h3>
    <p class="speisen_beschreibung">${menu.beilagen[index].beschreibung}</p>
    <p class="speisen_preis">${menu.beilagen[index].preis}€</p>
    <button class="plus_button">
    <img class="plus" src="assets/img/plus.png">
    </button>
    </div>`
}

function getDessertSpeisenHtml(index) {
    return `<div onclick="pushToBasket(${index}, 'desserts')" class="speise_div">
    <h3>${menu.desserts[index].name}</h3>
    <p class="speisen_beschreibung">${menu.desserts[index].beschreibung}</p>
    <p class="speisen_preis">${menu.desserts[index].preis}€</p>
    <button class="plus_button">
    <img class="plus" src="assets/img/plus.png">
    </button>
    </div>`
}

function getGetränkeHtml(index) {
    return `<div onclick="pushToBasket(${index}, 'getränke')" class="speise_div">
    <h3>${menu.getränke[index].name}</h3>
    <p class="speisen_beschreibung">${menu.getränke[index].beschreibung}</p>
    <p class="speisen_preis">${menu.getränke[index].preis}€</p>
    <button class="plus_button">
    <img class="plus" src="assets/img/plus.png">
    </button>
    </div>`
}

function getBasketHtml(index) {
    return `<div class="basket_item">
     <h4>${basket[index].name}</h4>
     <div class="dispaly_flex">
     <button onclick="minusAmount(${index})" class="minusPlusMüleimer_button"><img class="minusUndPlus" src="assets/img/minus.png"></button>
     <p>${basket[index].amount}x</p>
     <button onclick="plusAmount(${index})" class="minusPlusMüleimer_button"><img class="minusUndPlus" src="assets/img/plus.png"></button>
     <p class="preisAmountDishes">${calculatePreis(basket[index].amount, basket[index].preis)}€</p>
     <button onclick="remove(${index})" class="minusPlusMüleimer_button"><img class="Mülleimer" src="assets/img/mulleimer.png"></button>
     </div>
     <div class="grauer_seperator_small"></div>
     </div>`
}

function getBillHtml(Zwischensumme, Lieferkosten, Gesamt) {
    return `<div class="FlexBetween">
    <p class="zwischensummeLieferkosten">Zwischensumme</p>
    <p class="zwischensummeLieferkosten">${Zwischensumme.toFixed(2)}€</p></div>
    <div class="FlexBetween">
    <p class="zwischensummeLieferkosten">Lieferkosten</p>
    <p class="zwischensummeLieferkosten">${Lieferkosten.toFixed(2)}€</p></div>
    <div class="FlexBetween">
    <p class="gesamt">Gesamt</p>
    <p class="gesamt">${Gesamt.toFixed(2)}€</p></div>`
}