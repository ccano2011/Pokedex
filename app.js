// const APIdomain = 'https://pokeapi.co/api/v2/pokemon/';
const submitButton = document.querySelector("#submit");
const pokemonSearch = document.querySelector("#pokemonSearch");
const topOfPage = document.querySelector(".topOfPage");

submitButton.addEventListener("click", userInput)

//Potential CORS Work around: https://cors-anywhere.herokuapp.com/


async function userInput(e) {
  e.preventDefault()
  try {
    let userInput = pokemonSearch.value.toLowerCase();
    // console.log(userInput)
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${userInput}`)
    // console.log(response.data)
    renderList(response.data)

  } catch (error) {
    console.log(`Error: ${error}`)
  }
}
// userInput()

const renderList = pokemon => {
  const pokemonName = document.querySelector('#name');
  pokemonName.innerHTML = pokemon.name.toUpperCase();

  const sprite = document.querySelector('#spritePic');
  sprite.setAttribute('src', pokemon.sprites.front_default);

  const pokedexID = document.querySelector("#idNum");
  pokedexID.innerHTML = pokemon.id
  pokemonDescription(pokemon.id)
}
// const pokedexID = document.querySelector("#idNum").value
// console.log(pokemonID)

function pokeInfo(string) {
  let pokeInfo = document.querySelector('#flavorText');
  pokeInfo.innerHTML = textEntries
}


async function pokemonDescription(id) {
  try {
    const returnId = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}/`)
    let flavorTextPacket = returnId.data.flavor_text_entries
    // console.log(flavorTextPacket)
    textEntries = getflavorText(flavorTextPacket)
    // console.log(textEntries)
    pokeInfo(textEntries)
  } catch (error) {
    console.log(`Error: ${error}`)
  }
}

// mac's help:

function getflavorText(pokedexEntry) {
  for (let i = 0; i < pokedexEntry.length; i++) {
    if (pokedexEntry[i].language.name === 'en') {
      // console.log(pokedexEntry[i])
      return pokedexEntry[i].flavor_text;
    }
  }
}

// work around jQuery loop that gave me the idea
// for : ['language']['name'] == 'en'
