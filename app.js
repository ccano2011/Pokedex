// Code used as reference (w3school):
// userInput()
// button.addEventListener('click', async (event) => {
//   // Prevent form from doing it's thing.
//   event.preventDefault();

const APIdomain = 'https://pokeapi.co/api/v2/pokemon/';
const submitButton = document.querySelector("#submit");
const pokemonSearch = document.querySelector("#pokemonSearch");
const pokemonName = document.querySelector(".top-of-page");
const pokedexNumber = document.querySelector(".pokedexID");
const spritePicture = document.querySelector(".picture");
const pokemonInfo = document.querySelector(".info");
const pokemonType = document.querySelector(".type");
const baseStats = document.querySelector(".base-stats");

//Janice & I tried to figure out how to prevent the default behavior of clicking the button.
//Finally figured it out after looking at the Dog-code-along. 
//The part that's commented out is what I had originally tried w/ Janice
submitButton.addEventListener("click", userInput)//, async (event) => {
// event.preventDefault();})


async function userInput(e) {
  e.preventDefault()
  try {   //stopwatch @ 15:00
    let userInput = pokemonSearch.value;
    console.log(userInput)
    const response = await axios.get(`https://cors-anywhere.herokuapp.com/https://pokeapi.co/api/v2/pokemon/${userInput}`)
    console.log(response)
    //printList(response.data.Search)
  } catch (error) {
    console.log(`Error: ${error}`)
  }
}
userInput()

