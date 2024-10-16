import {
    Card,
    CardContent,
  } from "@/components/ui/card";

import Link from "next/link";
import Image from "next/image";



interface PokemonCardProps {
    name: string;
    id: number;
}

export default function PokemonCard({ name, id }: PokemonCardProps) {
    return (
        <>
            <Link href={name}>
                <Card>
                    <CardContent className="p-2 flex items-center justify-around rounded-md border md:px-4 lg:px-2 py-2 h-20">
                        <div className="relative w-1/2 max-w-20 h-full">
                            <Image alt={name} fill priority className="object-cover" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}/>
                        </div>
                        <h2 className="capitalize text-xs lg:text-sm text-center font-bold">{name}</h2>
                    </CardContent>
                </Card>
            </Link>
        </>
    );
}