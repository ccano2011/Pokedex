// const APIdomain = 'https://pokeapi.co/api/v2/pokemon/';
const submitButton = document.querySelector("#submit");
const pokemonSearch = document.querySelector("#pokemonSearch");
const topOfPage = document.querySelector(".topOfPage");

submitButton.addEventListener("click", userInput)

//CORS Work around: https://cors-anywhere.herokuapp.com/

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
  const pokemonName = document.querySelector('#name');
  pokemonName.innerHTML = pokemon.name;

  const sprite = document.querySelector('#spritePic');
  sprite.setAttribute('src', pokemon.sprites.front_default);

  const pokedexID = document.querySelector("#idNum");
  pokedexID.innerHTML = pokemon.id;


}