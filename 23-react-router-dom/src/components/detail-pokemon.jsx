import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function DetailPokemon() {
  const [pokemon, setPokemon] = useState({})
  const {id} = useParams()

  useEffect(() => {
    getPokemonById()
  }, [])

  const getPokemonById = async () => {
    const {data} = await axios(`https://pokeapi.deno.dev/pokemon/${id}`)
    setPokemon({...data})
    console.log(data);
  }

  return (
    <div>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.imageUrl} width={200} />
    </div>
  )
}

export default DetailPokemon