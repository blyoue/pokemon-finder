"use client"

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label"
import { useState } from "react";
import PokemonCard from "./pokemon-card";


interface Pokemon {
  name: string;
  url: string;
}

interface PokemonGridProps {
  pokemonList: Pokemon[]
}


export default function PokemonGrid({ pokemonList }: PokemonGridProps) {
  // console.log(pokemonList);
  const [ searchTerm, setSearchTerm ] = useState("")
  const searchFilter = (pokemonList: Pokemon[]) => {
    return pokemonList.filter((pokemon: Pokemon) => pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }
  const filteredPokemonList = searchFilter(pokemonList);
  return (
    <>
      <div>
        <h3 className="text-2xl pb-6 text-center">Search For Your Pokemon</h3>
        <div className="grid w-full max-w-sm items-center gap-1.5 mx-auto">
            <Label htmlFor="pokemonName">Pokemon Name</Label>
            <Input 
                value={searchTerm}
                autoComplete="off"
                id="pokemonName"
                placeholder="Charizard, Pikachu, etc."
                type="text"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
        </div>
    </div>
    <div className="mb-32 mt-16 w-full xl:w-1/2 grid grid-cols-2 md:grid-cols-3 lg:gap-6 gap-4 text-center lg:mb-0 lg:grid-cols-4">
        {filteredPokemonList.map((pokemon, id) => {
          const pokemonId = Number(pokemon.url.split('/pokemon/')[1].replace('/',''));
          return (
            <PokemonCard name={pokemon.name} id={pokemonId} key={id}/>
          )
        })}
    </div>
  </>
  );
}
