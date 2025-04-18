function init() {
    renderHauptgerichte()
    renderBeilagen()
    renderDesserts()
    renderGetränke()
}
function renderHauptgerichte() {
    let contentRef = document.getElementById('hauptgerichte_speisen')
    contentRef = ""
    for (let index = 0; index < menu.hauptgerichte.length; index++) {
        let contetntRef = document.getElementById('hauptgerichte_speisen')
        contetntRef.innerHTML += getHauptgerichtSpeisenHtml(index)
    }
}
function renderBeilagen() {
    let contentRef = document.getElementById('beilagen_speisen')
    contentRef = ""
    for (let index = 0; index < menu.beilagen.length; index++) {
        let contetntRef = document.getElementById('beilagen_speisen')
        contetntRef.innerHTML += getBeilageSpeisenHtml(index)
    }
}
function renderDesserts() {
    let contentRef = document.getElementById('desserts_speisen')
    contentRef = ""
    for (let index = 0; index < menu.desserts.length; index++) {
        let contetntRef = document.getElementById('desserts_speisen')
        contetntRef.innerHTML += getDessertSpeisenHtml(index)
    }
}
function renderGetränke() {
    let contentRef = document.getElementById('getränke_speisen')
    contentRef = ""
    for (let index = 0; index < menu.getränke.length; index++) {
        let contetntRef = document.getElementById('getränke_speisen')
        contetntRef.innerHTML += getGetränkeHtml(index)
    }
}
function addToBasket(index, category) {
    menu[category][index].amount++
    let speiseAnzahl = menu[category][index].amount
    if(speiseAnzahl === 1) {
        let contetntRef = document.getElementById('basket_items')
        contetntRef.innerHTML += getBasketHtml(index, category) 
    }
    
}