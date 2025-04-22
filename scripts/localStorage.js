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