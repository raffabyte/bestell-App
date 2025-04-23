let Lieferkosten = 0

function init() {
    checkIfBasketFull()
    checkScroll()
    renderHauptgerichte()
    renderBeilagen()
    renderDesserts()
    renderGetränke()
    getBasketFromLocalStorage()
    localStorageLieferung()
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
function hideText() {
    if (basket.length > 0) {
        document.getElementById('basket_text').style.display = 'none'
    }
    else {
        document.getElementById('basket_text').style.display = 'flex'
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

    hideLieferungIfEmpty()
    hideBill()
    hideText()
}
function hideBill() {
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
function hideLieferungIfEmpty() {
    if (basket.length > 0) {
        document.getElementById('abholen_liefern').style.display = 'flex'
    }
    else {
        document.getElementById('abholen_liefern').style.display = 'none'
    }
}
function liefernLassen() {
    Lieferkosten = 5
    document.getElementById('selbstAbholen').classList.remove('ausgewählt')
    document.getElementById('liefernLassen').classList.add('ausgewählt')
    localStorage.setItem('lieferung', 'liefern')
    renderBill()
}
function selbstAbholen() {
    Lieferkosten = 0
    document.getElementById('liefernLassen').classList.remove('ausgewählt')
    document.getElementById('selbstAbholen').classList.add('ausgewählt')
    localStorage.setItem('lieferung', 'abholen')
    renderBill()
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
    return Lieferkosten
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
function toggleBasket() {
    document.getElementById('basket_wrapper').classList.toggle('basket_open')
}
function checkIfBasketFull() {
    if (basket > 0) {
        
    }
}

window.addEventListener("scroll", checkScroll);

function checkScroll() {
  var y = window.scrollY;
  var stickyBasket = document.getElementById("sticky_basket");

  if (y > 100) {
    stickyBasket.style.display = "block";
  } else {
    stickyBasket.style.display = "none";
  }
}
