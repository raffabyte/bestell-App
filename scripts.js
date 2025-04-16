function init() {
    renderHauptgerichte()
}

function renderHauptgerichte() {
    let contentRef = document.getElementById('hauptgerichte_speisen')
    contentRef = ""
    for (let index = 0; index < menu.hauptgerichte.length; index++) {
        let contetntRef = document.getElementById('hauptgerichte_speisen')
        contetntRef.innerHTML += getHauptgerichtSpeisenHtml(index)
    }
}