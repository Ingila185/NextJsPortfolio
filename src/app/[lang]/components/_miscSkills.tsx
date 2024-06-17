'use client';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import {techSkills} from '../api/skills';
export default function Miscskills () {
    const data = techSkills.misc;
    return (
        <ResponsiveContainer  width={500} height="100%">
            <BarChart layout ={"vertical"} width={500} height={300} data={data}>
      <XAxis type="number" dataKey="years"  />
      <YAxis dataKey="name" type="category"  />
      <Tooltip labelStyle={{color:'#62B67E'}}/>
      <Bar dataKey="years" fill="#62B67E" barSize={20} activeBar={false} />
    </BarChart>
    </ResponsiveContainer>

    )
}