// Code used as reference (w3school):
// "userInput()
// button.addEventListener('click', async (event) => {
// event.preventDefault();"

// const APIdomain = 'https://pokeapi.co/api/v2/pokemon/';
const submitButton = document.querySelector("#submit");
const pokemonSearch = document.querySelector("#pokemonSearch");
const topOfPage = document.querySelector(".topOfPage");

submitButton.addEventListener("click", userInput)//, async (event) => {
// event.preventDefault();})

//CORS Work around: https://cors-anywhere.herokuapp.com/

const pokedexNumber = document.querySelector(".pokedexID");
const spritePicture = document.querySelector(".picture");
const pokemonInfo = document.querySelector(".info");
const pokemonType = document.querySelector(".type");
const baseStats = document.querySelector(".base-stats");

async function userInput(e) {
  e.preventDefault()
  try {
    let userInput = pokemonSearch.value;
    // console.log(userInput)
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${userInput}`)
    console.log(response.data)
    renderList(response.data)
  } catch (error) {
    console.log(`Error: ${error}`)
  }
}
// userInput()

const renderList = pokemon => {
  const pokemonName = document.createElement('h1');
  pokemonName.innerHTML = pokemon.name;
  topOfPage.appendChild(pokemonName);

  const sprite = document.createElement('img');
  sprite.setAttribute('src', pokemon.sprites.front_default);
  spritePicture.appendChild(sprite);
}