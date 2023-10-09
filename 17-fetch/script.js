console.log("tess");

let pokemonFromPromise = []
fetch("https://pokeapi.deno.dev/pokemon?limit=10")
.then(res => {
  console.log(res);
  return res.json()
})
.then(res => {
  console.log(res);
  pokemonFromPromise = [...res]
  console.log(pokemonFromPromise);
})
.catch(err => {
  console.log(err);
})



let listPokemon = document.getElementById('list-pokemon')

async function getDataPokemon () {
  try {
    let respons = await fetch("https://pokeapi.deno.dev/pokemon?limit=10")
    let pokemons = await respons.json()

    console.log(pokemons);

    pokemons.map((item, index) => {
      let cardPokemon = `
        <div>
          <img src=${item.imageUrl} alt="..." width="200" />
          <h3>${item.name}</h3>
        </div>
      `
      listPokemon.innerHTML += cardPokemon
    })

  } catch (error) {
    console.log(error);
  }
}

getDataPokemon()