
import { PokemonObject } from "@/types/pokemon";
// getPokemonList -> Get the first 151 pokemon
const POKEMON_API = 'https://pokeapi.co/api/v2/';
interface Pokemon {
    name: string;
    url: string;
}
export async function getPokemonList(): Promise<Pokemon[]> {
    const response = await fetch(POKEMON_API + 'pokemon?limit=151&offset=0');
    const data = await response.json();
    return data.results;
}


// getPokemon -> Get a single pokemon information
export async function getPokemonObject(pokemonName: string): Promise<PokemonObject>{
    const response = await fetch(POKEMON_API + 'pokemon/' + pokemonName);
    const data = await response.json();
    return data;
}
