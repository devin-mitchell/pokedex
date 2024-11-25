import { PokemonDetails } from "../../hooks/useGetPokemon";
import { GET_POKEMONS, Pokemon } from "../../hooks/useGetPokemons";

export const POKEMON_MOCK: Pokemon = {
  id: "UG9rZW1vbjowMTU=",
  name: "Beedrill",
  image: "https://img.pokemondb.net/artwork/beedrill.jpg",
  number: "015",
  types: [
    "Bug",
    "Poison"
  ],

}

export const POKEMON_DETAILS_MOCK: PokemonDetails = {
  id: "UG9rZW1vbjowMDY=",
  number: "006",
  name: "Charizard",
  weight: {
    minimum: "79.19kg",
    maximum: "101.81kg",
  },
  height: {
    minimum: "1.49m",
    maximum: "1.91m",
  },
  classification: "Flame Pokémon",
  types: [
    "Fire",
    "Flying"
  ],
  resistant: [
    "Fire",
    "Grass",
    "Fighting",
    "Bug",
    "Steel",
    "Fairy"
  ],
  weaknesses: [
    "Water",
    "Electric",
    "Rock"
  ],
  fleeRate: 0.05,
  maxCP: 2413,
  maxHP: 2602,
  image: "https://img.pokemondb.net/artwork/charizard.jpg",
}

export const GET_POKEMON_MOCK = [
  {
    request: {
      query: GET_POKEMONS,
      variables: {
        first: 151
      },
    },
    result: {
      data: {
        pokemons: [
          {
            id: "UG9rZW1vbjowMDE=",
            name: "Bulbasaur",
            image: "https://img.pokemondb.net/artwork/bulbasaur.jpg",
            number: "001",
            types: [
              "Grass",
              "Poison"
            ],
          },
          {
            id: "UG9rZW1vbjowMDI=",
            name: "Ivysaur",
            image: "https://img.pokemondb.net/artwork/ivysaur.jpg",
            number: "002",
            types: [
              "Grass",
              "Poison"
            ],
          },
          {
            id: "UG9rZW1vbjowMDM=",
            name: "Venusaur",
            image: "https://img.pokemondb.net/artwork/venusaur.jpg",
            number: "003",
            types: [
              "Grass",
              "Poison"
            ],
          },
          {
            id: "UG9rZW1vbjowMDQ=",
            name: "Charmander",
            image: "https://img.pokemondb.net/artwork/charmander.jpg",
            number: "004",
            types: [
              "Fire"
            ],
          },
          {
            id: "UG9rZW1vbjowMDU=",
            name: "Charmeleon",
            image: "https://img.pokemondb.net/artwork/charmeleon.jpg",
            number: "005",
            types: [
              "Fire"
            ],
          },
          {
            id: "UG9rZW1vbjowMDY=",
            name: "Charizard",
            image: "https://img.pokemondb.net/artwork/charizard.jpg",
            number: "006",
            types: [
              "Fire",
              "Flying"
            ],
          },
          {
            id: "UG9rZW1vbjowMDc=",
            name: "Squirtle",
            image: "https://img.pokemondb.net/artwork/squirtle.jpg",
            number: "007",
            types: [
              "Water"
            ],
          },
          {
            id: "UG9rZW1vbjowMDg=",
            name: "Wartortle",
            image: "https://img.pokemondb.net/artwork/wartortle.jpg",
            number: "008",
            types: [
              "Water"
            ],
          },
          {
            id: "UG9rZW1vbjowMDk=",
            name: "Blastoise",
            image: "https://img.pokemondb.net/artwork/blastoise.jpg",
            number: "009",
            types: [
              "Water"
            ],
          },
          {
            id: "UG9rZW1vbjowMTA=",
            name: "Caterpie",
            image: "https://img.pokemondb.net/artwork/caterpie.jpg",
            number: "010",
            types: [
              "Bug"
            ],
          },
        ],
      }
    },
  },
]
