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
    updateBasketCount()
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

    helper()
}

function helper() {
    saveAmountOfBasket()
    updateBasketCount()
    saveBasketTolocalStorage()
    renderBasket();
}

function renderBasket(){
    let contentRef = document.getElementById('basket_items')
    contentRef.innerHTML = ""

    for (let index = 0; index < basket.length; index++) {
        contentRef.innerHTML += getBasketHtml(index)
    }

    helperTwo()
}

function helperTwo() {
    changeBasketImg()
    hideLieferungIfEmpty()
    hideBill()
    hideText()
    hidebutton()
}

function hidebutton() {
    if (basket.length > 0) {
        document.getElementById('button_div').style.display = 'flex'
    }
    else {
        document.getElementById('button_div').style.display = 'none'
    }
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

    helper()
}

function plusAmount(index) {
    basket[index].amount++;

    saveBasketTolocalStorage();
    renderBasket();
}

function remove(index) {
    basket.splice(index, 1);

    helper()
}

function toggleBasket() {
    document.getElementById('basket_wrapper').classList.toggle('basket_open')
    document.getElementById('overflow_hidden').classList.toggle('overflow')
}

function checkIfBasketFull() {
    if (basket > 0) {
        
    }
}

function changeBasketImg() {
    let headerImg = document.getElementById('headerImg')
    let buttonImg = document.getElementById('buttonImg')

    if (basket.length > 0) {
        headerImg.src = "assets/img/voll_einkaufswagen.png"
        buttonImg.src = "assets/img/voll_einkaufswagen.png"
    }
    else {
        headerImg.src = "assets/img/leer_einkaufswagen.png"
        buttonImg.src = "assets/img/leer_einkaufswagen.png"
    }
}

function toggleFinish() {
    document.getElementById('overlay').classList.toggle('d_none')
    document.body.classList.toggle('no-scroll');
    document.getElementById('basket_wrapper').classList.remove('basket_open')
    document.getElementById('overflow_hidden').classList.remove('overflow')
    basket = [];
    localStorage.clear();
    init()
}

function updateBasketCount() {
    const count = getAmountOfBasket();
    const countElement = document.querySelector('.basket_count');
    countElement.textContent = count;
    countElement.style.display = count === 0 ? 'none' : 'inline-block';
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
