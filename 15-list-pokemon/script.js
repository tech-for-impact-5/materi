let pokemons = [
  {
    id: 1,
    name: "Bulbasaur",
    genus: "Seed Pokémon",
    description:
      "A strange seed was planted on its back at birth. The plant sprouts and grows with this POKéMON.",
    imageUrl: "https://pub-460ada4f152c4135a7ec0881a2cb1330.r2.dev/1.webp",
    color: "#d1e8dd",
  },
  {
    id: 2,
    name: "Ivysaur",
    genus: "Seed Pokémon",
    description:
      "When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.",
    imageUrl: "https://pub-460ada4f152c4135a7ec0881a2cb1330.r2.dev/2.webp",
    color: "#bbd4db",
  },
  {
    id: 3,
    name: "Venusaur",
    genus: "Seed Pokémon",
    description:
      "The plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.",
    imageUrl: "https://pub-460ada4f152c4135a7ec0881a2cb1330.r2.dev/3.webp",
    color: "#dbd4d8",
  },
  {
    id: 4,
    name: "Charmander",
    genus: "Lizard Pokémon",
    description:
      "Obviously prefers hot places. When it rains, steam is said to spout from the tip of its tail.",
    imageUrl: "https://pub-460ada4f152c4135a7ec0881a2cb1330.r2.dev/4.webp",
    color: "#f6ddcb",
  },
  {
    id: 5,
    name: "Charmeleon",
    genus: "Flame Pokémon",
    description:
      "When it swings its burning tail, it elevates the temperature to unbearably high levels.",
    imageUrl: "https://pub-460ada4f152c4135a7ec0881a2cb1330.r2.dev/5.webp",
    color: "#f3cbc5",
  },
];

let listPokemon = document.getElementById("list-pokemon")

pokemons.map((item, index) => {
  console.log(item);

  let cardPokemon = `
  <div class="col" data-bs-toggle="modal" data-bs-target="#exampleModal" >
    <div class="card" onclick="showModal(${index})">
      <img src=${item.imageUrl} class="card-img-top" alt="..."  />
      <div class="card-body">
        <h5 class="card-title">${item.name}</h5>
        <p class="card-text">
          ${item.description}
        </p>
      </div>
    </div>
  </div>
`;

  listPokemon.innerHTML += cardPokemon
})

function showModal(index) {
  console.log(index);
  let modalTitle = document.getElementById("modal-title")
  let modalContent = document.getElementById("modal-content")

  let pokemon = pokemons[index]
  modalTitle.innerHTML = pokemon.name
  modalContent.innerHTML = pokemon.description
}


