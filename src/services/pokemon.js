import axiosPokes from ".";

const pokemons = {
  get: () => axiosPokes.get("pokedex/kalos")
};

export default pokemons;
