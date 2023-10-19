import React, { useEffect, useState } from "react";
import CardPokemon from "./card-pokemon";

function ListPokemon() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    async function getPokemon() {
      const response = await fetch("https://pokeapi.deno.dev/pokemon?limit=20");
      const data = await response.json();
      setPokemons(data);
    }

    getPokemon();
  }, []);

  console.log(pokemons);

  return (
    <div>
      <h1>Pokemon</h1>

      {pokemons.length == 0 ? (
        <div>Loading...</div>
      ) : (
        <div>
          {pokemons.map((item) => (
            <CardPokemon key={item.id} pokemon={item} />
          ))}
        </div>
      )}
    </div>
  );
}

export default ListPokemon;
