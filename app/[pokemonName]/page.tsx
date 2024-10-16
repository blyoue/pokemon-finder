import { getPokemonObject } from "@/lib/pokemonAPI";
import Image from "next/image";
import { StatsChart } from "@/components/ui/statschart";
import { Card, CardContent, CardFooter } from "@/components/ui/card";


export default async function PokemonPage({ params }: { params: { pokemonName: string } }) {
    const { pokemonName } = params;
    const pokemonObject = await getPokemonObject(pokemonName);
    const pokemonStats = pokemonObject.stats;
    // console.log("######", pokemonStats)
    return (
        <>
            <div className="flex flex-col md:flex-row justify-center items-center xl:justify-around w-full mt-20 xl:w-2/3">
                <div className="w-2/3 md:w-2/5 xl:w-2/5">
                    <Card className="md:px-10 md:py-16 m-auto">
                        <CardContent className="p-0">
                            <div className="relative pt-[100%] w-full m-auto min-w-20">
                                <Image 
                                    src={pokemonObject.sprites.other['official-artwork'].front_default}
                                    fill
                                    className="object-cover"
                                    alt={"Picture of" + pokemonName}
                                />
                            </div>
                        </CardContent>
                        <CardFooter className="flex-col p-0 md:mt-6 mb-6 md:mb-0">
                            <h1 className="text-center font-pixel text-xl md:text-3xl font-bold capitalize">{pokemonName}</h1>
                        </CardFooter>
                    </Card>
                </div>
                <div className="w-full md:w-1/2 xl:w-2/5 flex flex-col h-full justify-between md:px-10 xl:px-0">
                    <StatsChart pokemonStats={pokemonStats}/>
                    <div className="grid grid-cols-2 w-full text-xl capitalize">
                        {pokemonStats.map((stat, index) => {
                            return (
                                    <h2 key={index} className="mx-auto font-pixel text-base lg:text-xl"><span>{stat.stat.name.replace('special-', 'sp. ')}:</span> {stat.base_stat}</h2>
                            )})
                    }
                    </div>
                </div>
            </div>
        </>
    )
}