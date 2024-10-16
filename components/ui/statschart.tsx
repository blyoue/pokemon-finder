"use client"

import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts"

import {
  ChartConfig,
  ChartContainer,
} from "@/components/ui/chart"
import { Stat } from "@/types/pokemon"




const chartConfig = {
  stat: {
    label: "value",
    color: "#ffffff",
  },
} satisfies ChartConfig

export function StatsChart({ pokemonStats }: { pokemonStats: Stat[]}) {
    console.log(pokemonStats)
    const chartData = pokemonStats.map(s => { 
        const name = s.stat.name.replace('special-', 'sp. ');
        const modifiedName = name[0].toUpperCase() + name.slice(1);
        return {stat: modifiedName , value: s.base_stat}
    })
    return (
        <ChartContainer config={chartConfig} className="mx-auto aspect-square h-auto w-full">
            <RadarChart data={chartData} outerRadius="60%">
                <PolarAngleAxis dataKey="stat" tick={{ fontSize: 16, fill: "#ffffff", dy: 2, fontFamily: '"Pixelify Sans"'}}/>
                <PolarGrid />
                <Radar
                    dataKey="value"
                    fill="#4884d8"
                    fillOpacity={0.6}
                    dot={{
                        r: 5,
                        fillOpacity: 1,
                    }}
                />
            </RadarChart>
        </ChartContainer>
    )
}
