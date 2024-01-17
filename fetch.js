// Fetch
//
// POST

const BASE_URL = 'https://pokeapi.co/api/v2/';
const card = document.querySelector(".card--container")
//const card = document.getEle

// Fetch no async
/*
fetch(BASE_URL + 'pokemon/ditto')
    .then(res => res.json())
    .then(data => console.log(data));
*/
// fetch async

const fetchPokemon = async (pokemon) => {
    try {
        const response = await fetch(`${BASE_URL}pokemon/${pokemon}`);
        const parsedResponse = await response.json();
        return parsedResponse;
    } catch (err) {
        console.error(err);
    }
}

const createPokemonCard = (pokemon) => {

    const pokemonName = document.createElement("p");
    const pokemonId = document.createElement("p");
    const pokemonWeight = document.createElement("p");
    const pokemonImage= document.createElement("img");
    

    pokemonName.innerHTML = `Nombre: ${pokemon.name}`;
    pokemonId.innerHTML = `ID: ${pokemon.id}`;
    pokemonWeight.innerHTML = `Peso: ${pokemon.weight}` ;
    pokemonImage.src = pokemon.sprites.front_shiny;

    card.innerHTML = "";

    card.appendChild (pokemonImage);
    card.appendChild (pokemonId);
    card.appendChild (pokemonName);
    card.appendChild (pokemonWeight);
    
    let currentIndexPokemon = 0;

}

const savOnLocalStorage = (pokemon) => {
    const pokemonId= pokemon.id;
    const pokemons = JSON.parse(localStorage.getItem("pokemons")) || [];

    pokemons.push(pokemonId);

    localStorage.setItem("pokemons", JSON.stringify(pokemons));
}

const getInfoLocalStorage = () =>{
 const pokemonlist = JSON.parse(localStorage.getItem("pokemons"));S
} 

// Obtener pokemon
document.getElementById('get-btn')
    .addEventListener('click', async () => {
        const text = document.getElementById('poke-name').value.toLowerCase();
        const pokemon = await fetchPokemon(text);
        console.log(pokemon)
        //localStorage.setItem('currentPokeId', pokemon.id);

        createPokemonCard(pokemon)
        savOnLocalStorage(pokemon)
       

        
    })

document.addEventListener('DOMContentLoaded', async () => {
    const storedId = localStorage.getItem('pokemons');
    const initialId = storedId ? parseInt(storedId) : 1;
    const pokemon = await fetchPokemon(initialId);
    
})

// obtener el anterior

previous.addEventListener('click', async () => {
    
    let currentPosition = currentIndexPokemon

    if (currentIndexPokemon > 0){
        const list = getInfoLocalStorage();
        console.log(list)
        currentIndexPokemon --;
        const pokemonId = list [currentIndexPokemon]
        const pokemon = await fetchPokemon(pokemonId)
        createPokemonCard(pokemon)
    }
})
    //const currentPokeId = parseInt(localStorage.getItem('currentPokeId'));
    //const newId = Math.max(1, currentPokeId -1);
    //const pokemon = await fetchPokemon(newId);
    //console.log(pokemon.name);

// obtener el siguiente

    

next.addEventListener('click', async () => {
        const list = getInfoLocalStorage();
        const pokemonListLength = list.length -1;

        if(currentIndexPokemon < pokemonListLength) {
            currentIndexPokemon++;
            const pokemonId = list(currentIndexPokemon)
            const pokemon = await fetchPokemon (pokemonId)
            createPokemonCard(pokemon);
        }
       
    });



////////////////// POST
//

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
        title: 'title1',
        body: 'Lorem ipsum dolor sit amet',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    }
}).then(res => res.json())
    .then(json => console.log(json))


/////////////////// EJERCICIOS
//- Arreglar el pokemon en localStorage ?
// - Manipular el DOM y agregar una tarjeta del pokemon.
// - El tamaño e info de la tarjeta es a consideración personal.
// - La tarjeta debe mantenerse en la pantalla.
// - La info -> LocalStorage -> Fetch


