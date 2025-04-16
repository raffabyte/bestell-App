function getHauptgerichtSpeisenHtml(index) {
    return `<div class="speise_div">
    <h3>${menu.hauptgerichte[index].name}</h3>
    <p>${menu.hauptgerichte[index].beschreibung}</p>
    <p>${menu.hauptgerichte[index].preis}</p>
    </div>`
}