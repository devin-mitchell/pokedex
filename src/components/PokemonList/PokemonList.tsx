import { useEffect, useMemo, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { Pokemon, useGetPokemons } from '../../hooks/useGetPokemons';
import { debounce } from '../../utils';
import { PokemonListItem } from '../PokemonListItem';

export const PokemonList = () => {
  const classes = useStyles();
  const { pokemons, loading } = useGetPokemons();
  const [filteredList, setFilteredList] = useState<Pokemon[]>(pokemons)
  const [searchValue, setSearchValue] = useState<string>('')

  useEffect(() => {
    if (!loading && searchValue === '') {
      setFilteredList(pokemons)
    }
  }, [pokemons])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
    debouncedFilter(e.target.value)
  }

  const debouncedFilter = useMemo(() => debounce((value) => {
    const filtered = pokemons.filter(pokemon => {
      const byName = pokemon.name.toLowerCase().includes(value.toLowerCase())
      const byNumber = pokemon.number.includes(value)
      const byType = pokemon.types.join('').toLowerCase().includes(value)

      return byName || byNumber || byType
    })
    setFilteredList(filtered)
  }, 500), [pokemons])

  return (
    <div className={classes.root}>
      <div className={classes.search}>
        <input
          placeholder="Search by name, type, or number"
          id="search"
          value={searchValue}
          onChange={handleChange}
        />
      </div>
      {loading && <div>Loading...</div>}
      {filteredList.map(({ id, name, image, number, types }) => {
        return (
          <PokemonListItem
            key={id}
            id={id}
            number={number}
            types={types}
            name={name}
            image={image}
          />
        )
      })}
    </div>
  );
};

const useStyles = createUseStyles(
  {
    root: {
      width: '100%',
      textAlign: 'center',
      padding: '32px',
      boxSizing: 'border-box',
    },
    search: {
      display: 'flex',
      justifyContent: 'start',
      alignItems: 'end',
      marginBottom: '2rem',

      '& input': {
        width: '10rem',
        padding: '1rem',
        fontSize: '2rem',
        border: 'none',
        borderBottom: '4px solid black',
        borderLeft: '1px solid black',
        background: '#111',
        outline: '3px solid gray',
        color: 'white',
        borderRadius: '10px',
        transition: 'all 200ms ease-in-out',

        '&:focus': {
          width: '30rem',
          outline: '3px solid white',
          boxShadow: '0 0 25px white'
        },
      },

    },
  },
  { name: 'PokemonList' }
);
