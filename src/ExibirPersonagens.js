function ExibirPersonagens(json){

    var section = document.getElementById("cards")

    json.results.map(function(personagem){
        section.innerHTML += `
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="${personagem.image}" alt="Card image cap">
            <div class="card-body">
                <p class="card-title" style="font-weight : 600;">${personagem.name}</p>
                <p class="card-text">Espécie: ${personagem.species}</p>
            </div>
         </div>
        `
    })
}
