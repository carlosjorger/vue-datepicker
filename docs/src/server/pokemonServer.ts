import type { Pokemon, PokemonLink } from "@/components/examples/Pokemon";

export const fetchPokemons = async (limit: number) => {
  const pokemons = [] as Pokemon[];
  const { results } = await fetch(
    `https://pokeapi.co/api/v2/pokemon/?limit=${limit}`
  ).then<{
    results: PokemonLink[];
  }>((res) => res.json());

  for (const result of results) {
    const pokemon = await fetch(result.url).then<Pokemon>((res) => res.json());
    pokemons.push(pokemon);
  }
  return pokemons;
};
