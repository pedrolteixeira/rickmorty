async function getPersonagens() {
    const personagens = await (await fetch('https://rickandmortyapi.com/api/character')).json()
    ExibirPersonagens(personagens)
}
getPersonagens()    










