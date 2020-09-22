// Code used as reference (w3school):
// "userInput()
// button.addEventListener('click', async (event) => {
//   // Prevent form from doing it's thing.
//   event.preventDefault();"

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
userInput()

const renderList = species => {
  for (const pokemon in species) {
    console.log(species[pokemon].name)
    const pokemonName = document.createElement('h1')
    pokemonName.innerHTML = species[pokemon].name
    topOfPage.appendChild(pokemonName);
  }
}
// console.log(renderList())
