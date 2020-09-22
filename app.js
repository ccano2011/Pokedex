// Code used as reference (w3school):
// "userInput()
// button.addEventListener('click', async (event) => {
//   // Prevent form from doing it's thing.
//   event.preventDefault();"

// const APIdomain = 'https://pokeapi.co/api/v2/pokemon/';
const submitButton = document.querySelector("#submit");
const pokemonSearch = document.querySelector("#pokemonSearch");
const topOfPage = document.querySelector(".top-of-page");

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
    console.log(response.data.name)
    // renderList()
    response.data.name
  } catch (error) {
    console.log(`Error: ${error}`)
  }
}
// userInput()

// function renderList() {
//   const pokemonName = document.createElement('h1')  //;
//   userInput()
//   console.log(name)
//   pokemonName.innerHTML = `${name}`
//   document.querySelector('.topOfPage').appendChild(name)
// }
// console.log(renderList())
