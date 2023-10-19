import React, { useEffect, useState } from "react";
import CardPokemon from "./card-pokemon";

function ListPokemon2() {
  const [input, setInput] = useState("");
  const [pokemons, setPokemons] = useState([]);
  const [filterPokemons, setFilterPokemons] = useState([]);

  useEffect(() => {
    getPokemon();
  }, []);

  useEffect(() => {
    let filter = pokemons.filter((item) =>
      item.name.toLowerCase().includes(input)
    );
    setFilterPokemons(filter);
  }, [input]);

  async function getPokemon() {
    const response = await fetch("https://pokeapi.deno.dev/pokemon?limit=20");
    const data = await response.json();
    setPokemons(data);
    setFilterPokemons(data);
  }

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <h1>Pokemon</h1>

      <input
        type="text"
        name="input"
        placeholder="cari pokemon"
        value={input}
        onChange={handleInput}
      />

      {pokemons.length == 0 ? (
        <div>Loading...</div>
      ) : (
        <div>
          {filterPokemons.length == 0 ? (
            <div>data tidak ditemukan</div>
          ) : (
            filterPokemons.map((item) => (
              <CardPokemon key={item.id} pokemon={item} atk={50} />
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default ListPokemon2;
