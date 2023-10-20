import React from "react";

import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";

function CardPokemon({ pokemon, atk }) {
  const navigate = useNavigate()
  let {imageUrl, name, color} = pokemon

  const toDetail = () => {
    console.log(pokemon.id);
    navigate(`/pokemon/${pokemon.id}`)
  }

  return (
    <div style={{backgroundColor: color}} onClick={toDetail}>
      <img src={imageUrl} alt="" width={150} />
      <h3>{name}</h3>
      <span>{atk + 10}</span>
    </div>
  );
}

CardPokemon.propTypes = {
  pokemon: PropTypes.object,
  atk: PropTypes.number
}

export default CardPokemon;
