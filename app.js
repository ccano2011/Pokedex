// const APIdomain = 'https://pokeapi.co/api/v2/pokemon/';
//Potential CORS Work around: https://cors-anywhere.herokuapp.com/

const submitButton = document.querySelector("#submit");
const pokemonSearch = document.querySelector("#pokemonSearch");
const topOfPage = document.querySelector(".topOfPage");

submitButton.addEventListener("click", userInput);

async function userInput(e) {
  e.preventDefault()
  try {
    let userInput = pokemonSearch.value.toLowerCase();
    console.log(userInput)
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${userInput}`)
    console.log(response.data)
    renderList(response.data)
  } catch (error) {
    console.log(`Error: ${error}`)
  }
}

const renderList = pokemon => {
  const pokemonName = document.querySelector('#name');
  pokemonName.innerHTML = pokemon.name[0].toUpperCase() + pokemon.name.substring(1);
  //^Shout out to Cabe for finding the substring method

  const sprite = document.querySelector('#spritePic');
  sprite.setAttribute('src', pokemon.sprites.front_default);

  const pokeWeight = document.querySelector("#pokeWeight");
  pokeWeight.innerHTML = pokemon.weight + " lbs"

  const pokemonType1 = document.querySelector("#pokeType");
  pokemonType1.innerHTML = pokemon.types[0].type.name

  const pokemonType2 = document.querySelector("#pokeType2")
  if (pokemon.types.length >= 2) {
    pokemonType2.innerHTML = pokemon.types[1].type.name
  } else {
    pokemonType2.innerHTML = ""
  }

  const hp = document.querySelector('#HP');
  hp.innerHTML = "HP " + pokemon.stats[0].base_stat

  const attack = document.querySelector('#Attack');
  attack.innerHTML = "Attack " + pokemon.stats[1].base_stat

  const defense = document.querySelector('#Defense');
  defense.innerHTML = "Defense " + pokemon.stats[2].base_stat

  const specialAttack = document.querySelector('#Special-Attack');
  specialAttack.innerHTML = "Sp. Attack " + pokemon.stats[3].base_stat

  const specialDefense = document.querySelector('#Special-Defense');
  specialDefense.innerHTML = "Sp. Defense " + pokemon.stats[4].base_stat

  const speed = document.querySelector('#Speed');
  speed.innerHTML = "Speed " + pokemon.stats[5].base_stat

  const pokedexID = document.querySelector("#idNum");
  pokedexID.innerHTML = " # " + pokemon.id //Appended the ID # to the DOM from the first API endpoint
  pokemonDescription(pokemon.id)//Pokemon.ID was pulled from the first API endpoint: "id:"
}


function pokeInfo(string) {
  let pokeInfo = document.querySelector('#flavorText');
  pokeInfo.innerHTML = textEntries
}

async function pokemonDescription(id) {
  try {
    const returnId = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}/`)
    let flavorTextPacket = returnId.data.flavor_text_entries
    console.log(flavorTextPacket)
    textEntries = getflavorText(flavorTextPacket)
    console.log(textEntries)
    pokeInfo(textEntries)
  } catch (error) {
    console.log(`Error: ${error}`)
  }
}

// Mac helped me write the following function:

function getflavorText(pokedexEntry) {
  for (let i = 0; i < pokedexEntry.length; i++) {
    if (pokedexEntry[i].language.name === 'en') {
      // console.log(pokedexEntry[i])
      return pokedexEntry[i].flavor_text; //more comments
    }
  }
}

// work around jQuery loop snippet that gave me the idea for 
// how to traverse 2nd endpoint in the API:
// for : ['language']['name'] == 'en'
