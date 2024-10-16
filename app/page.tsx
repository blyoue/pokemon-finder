import { getPokemonList } from "@/lib/pokemonAPI";
import PokemonGrid from "./pokemon-grid";
export default async function Home() {
  const pokemonList = await getPokemonList();
  return (
    <>
      <PokemonGrid pokemonList={pokemonList}/>
    </>
  );
}
