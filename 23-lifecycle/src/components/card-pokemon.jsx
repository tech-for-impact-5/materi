import React from "react";

import PropTypes from 'prop-types';

function CardPokemon({ pokemon, atk }) {
  let {imageUrl, name, color} = pokemon

  return (
    <div style={{backgroundColor: color}}>
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
