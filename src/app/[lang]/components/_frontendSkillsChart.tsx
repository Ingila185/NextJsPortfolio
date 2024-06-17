'use client';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import {techSkills} from '../api/skills';
export default function Frontendskills () {
    const data = techSkills.frontend;
    return (
        <ResponsiveContainer  width={500} height="100%">
            <BarChart layout ={"vertical"} width={500} height={300} data={data}>
      <XAxis type="number" dataKey="years"  />
      <YAxis dataKey="name" type="category"  />
      <Tooltip labelStyle={{color:'#110F50'}}/>
      <Bar dataKey="years" fill="#FA05D5" barSize={20} activeBar={false} />
    </BarChart>
    </ResponsiveContainer>

    )
}