function saveBasketTolocalStorage() {
    localStorage.setItem("basket", JSON.stringify(basket))
}
function  getBasketFromLocalStorage() {
    let basketString = localStorage.getItem("basket");
    if (basketString) {
        basket = JSON.parse(basketString);
    } else {
        basket = [];
    }
}