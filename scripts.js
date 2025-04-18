function init() {
    renderHauptgerichte()
    renderBeilagen()
    renderDesserts()
    renderGetränke()
    getBasketFromLocalStorage()
    renderBasket()
}
function renderHauptgerichte() {
    let contentRef = document.getElementById('hauptgerichte_speisen')
    contentRef.innerHTML = ""
    for (let index = 0; index < menu.hauptgerichte.length; index++) {
        contentRef.innerHTML += getHauptgerichtSpeisenHtml(index)
    }
}
function renderBeilagen() {
    let contentRef = document.getElementById('beilagen_speisen')
    contentRef.innerHTML = ""
    for (let index = 0; index < menu.beilagen.length; index++) {
        contentRef.innerHTML += getBeilageSpeisenHtml(index)
    }
}
function renderDesserts() {
    let contentRef = document.getElementById('desserts_speisen')
    contentRef.innerHTML = ""
    for (let index = 0; index < menu.desserts.length; index++) {
        contentRef.innerHTML += getDessertSpeisenHtml(index)
    }
}
function renderGetränke() {
    let contentRef = document.getElementById('getränke_speisen')
    contentRef.innerHTML = ""
    for (let index = 0; index < menu.getränke.length; index++) {
        contentRef.innerHTML += getGetränkeHtml(index)
    }
}
function pushToBasket(index, category) {
    let item = menu[category][index];

    let existingItem = basket.find(function(basketItem) {
        return basketItem.name === item.name;
    });

    if (existingItem) {
        existingItem.amount++;
    } else {
        basket.push({
            name: item.name,
            amount: 1,  
            preis: item.preis
        });
    }

    saveBasketTolocalStorage()
    renderBasket();
}
function renderBasket(){
    let contentRef = document.getElementById('basket_items')
    contentRef.innerHTML = ""

    for (let index = 0; index < basket.length; index++) {
        contentRef.innerHTML += getBasketHtml(index)
    }

    if (basket.length > 0) {
        renderBill();
        document.getElementById('bill').style.display = 'flex';
    } else {
        document.getElementById('bill').style.display = 'none';
    }
}
function calculatePreis(amount, preis) {
    let total = amount * preis;
    return total.toFixed(2)
}
function renderBill() {
    let Zwischensumme = ClaculateZwischensumme()
    let Lieferkosten = checkLieferkosten()
    let Gesamt = checkTotalAmount()

    let contentRef = document.getElementById('bill')
    contentRef.innerHTML = getBillHtml(Zwischensumme, Lieferkosten, Gesamt)
}
function ClaculateZwischensumme() {
    let total = 0;
    for (let i = 0; i < basket.length; i++) {
        total += basket[i].amount * basket[i].preis; 
    }
    return total
}
function checkLieferkosten() {
    return 5.00
}
function checkTotalAmount() {
    return ClaculateZwischensumme() + checkLieferkosten()
}
function minusAmount(index) {
    if (basket[index].amount > 1) {
        basket[index].amount--; 
    } else {
        basket.splice(index, 1);  
    }

    saveBasketTolocalStorage();
    renderBasket();
}
function plusAmount(index) {
    basket[index].amount++;

    saveBasketTolocalStorage();
    renderBasket();
}
function remove(index) {
    basket.splice(index, 1);

    saveBasketTolocalStorage();
    renderBasket();
}
