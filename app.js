// const APIdomain = 'https://pokeapi.co/api/v2/pokemon/';


const submitButton = document.querySelector("#submit");
const pokemonSearch = document.querySelector("#pokemonSearch");
submitButton.addEventListener("click", (event) => {
  userInput;
  event.preventDefault()
});


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
userInput()



// ${ APIdomain }


























