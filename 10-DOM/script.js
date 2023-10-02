// ========================= DOM ==============================
let hello = document.getElementsByTagName("h1")[0];

// hello.innerHTML = "Selamat datang"
// hello.innerText = "uuuuy"
// hello.textContent = "helloooooo"

console.log(hello.innerHTML);
console.log(hello.innerText);
console.log(hello.textContent);

hello.remove();

// ================== menampilkan data ========================
let hewan = ["badak", "gajah", "biawak", "jerapah", "unta"];
let listHewan = document.getElementById("list-hewan");
// --------------------------------
// ###### Cara 1
for (let i = 0; i < hewan.length; i++) {
  let cardHewan = `
    <div class="card">
      <img scr="" />
      <p>${hewan[i]}</p>
    </div>
  `;

  listHewan.innerHTML += cardHewan;
}

// --------------------------------
// ###### Cara 2
// for (let i=0; i < hewan.length; i++) {
//   let card = document.createElement('div')
//   let text = document.createTextNode(hewan[i])
//   card.append(text)
//   card.classList.add("card")

//   listHewan.append(card)
// }

// ====================== Click pada Card ========================
let pokemon = [
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

let listPokemon = document.getElementById("list-pokemon");
let textPokemon = document.getElementById("text-pokemon");
// --------------------------
// ####### Cara 1
// for (let i = 0; i < pokemon.length; i++) {
//   let cardPokemon = `
//     <div class="card" onclick="getCard('${pokemon[i].name}')">
//       <img src=${pokemon[i].imageUrl} />
//       <p>${pokemon[i].name}</p>
//     </div>
//   `;

//   listPokemon.innerHTML += cardPokemon;
// }

// function getCard (text) {
//   console.log(text);
//   textPokemon.innerText = text
// }

// --------------------------
// ####### Cara 2
for (let i = 0; i < pokemon.length; i++) {
  let cardPokemon = `
    <div class="card">
      <img src=${pokemon[i].imageUrl} />
      <p>${pokemon[i].name}</p>
    </div>
  `;

  listPokemon.innerHTML += cardPokemon;
}

listPokemon.addEventListener("click", (event) => {
  if (event.target.closest(".card")) {
    const text = event.target.closest(".card").querySelector("p");
    console.log(text.innerText);
  }
});

// ====================== FORM ============================
let username = document.getElementById("username");
let password = document.getElementById("password");
let btnLogin = document.getElementById("btn-login");
let listLog = document.getElementById("log-login");

btnLogin.addEventListener("click", (event) => {
  event.preventDefault();
  console.log(username.value, password.value);

  let cardUser = `
    <div>
      <span>${username.value}</span>
      <span>${password.value}</span>
    </div>
  `;

  listLog.innerHTML += cardUser;
});
