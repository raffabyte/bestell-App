function saveBasketTolocalStorage() {
    localStorage.setItem("basket", JSON.stringify(basket))
}

function getBasketFromLocalStorage() {
    let basketString = localStorage.getItem("basket");
    if (basketString) {
        basket = JSON.parse(basketString);
    } else {
        basket = [];
    }
}

function localStorageLieferung() {
    if (localStorage.getItem('lieferung') === 'liefern') {
        liefernLassen()
    }
    else if ((localStorage.getItem('lieferung') === 'abholen')) {
        selbstAbholen()
    }
}

function saveAmountOfBasket() {
    localStorage.setItem("basketLength", JSON.stringify(basket.length));
}

function getAmountOfBasket() {
    let count = localStorage.getItem("basketLength");
    count = count ? JSON.parse(count) : 0;
    return count
}
