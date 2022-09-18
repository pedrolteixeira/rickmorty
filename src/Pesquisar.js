function Pesquisar() {

    let input = document.getElementById("buscar");
    let filter = input.value.toUpperCase();
    let cardSection = document.getElementById("cards");
    let cards = cardSection.getElementsByClassName("card");

    for (let i = 0; i < cards.length; i++) {
        let title = cards[i].querySelector(".card-title");
        if (title.innerText.toUpperCase().indexOf(filter) > -1) {
            cards[i].style.display = "";
        } else {
            cards[i].style.display = "none";
        }
    }
}