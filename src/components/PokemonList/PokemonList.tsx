import { useState } from 'react';
import { createUseStyles } from 'react-jss';
import { Pokemon, useGetPokemons } from '../../hooks/useGetPokemons';
import { PokemonListItem } from '../PokemonListItem';

export const PokemonList = () => {
  const classes = useStyles();
  const { pokemons, loading } = useGetPokemons();

  return (
    <div className={classes.root}>
      {loading && <div>Loading...</div>}
      {pokemons.map(({ id, name, image, number, types }) => {
        return <PokemonListItem key={id} id={id} number={number} types={types} name={name} image={image} />
      })}
    </div>
  );
};

const useStyles = createUseStyles(
  {
    root: {
      width: '100%',
      border: '1px solid red',
      textAlign: 'center',
      padding: '32px',
      boxSizing: 'border-box',
    },
  },
  { name: 'PokemonList' }
);
