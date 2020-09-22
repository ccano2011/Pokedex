// const APIdomain = 'https://pokeapi.co/api/v2/pokemon/';


const submitButton = document.querySelector("#submit");
const pokemonSearch = document.querySelector("#pokemonSearch");

//I could not figure out how to prevent the default behavior of clicking the button.
submitButton.addEventListener("click", userInput, async (event) => {
  event.preventDefault();
})


async function userInput() {
  try {   //stopwatch @ 15:00

    let userInput = pokemonSearch.value;
    console.log(userInput)
    const response = await axios.get(`https://cors-anywhere.herokuapp.com/https://pokeapi.co/api/v2/pokemon/${userInput}`)
    console.log(response)
  } catch (error) {
    console.log(`Error: ${error}`)
  }
}
// userInput()
// button.addEventListener('click', async (event) => {
//   // Prevent form from doing it's thing.
//   event.preventDefault();
