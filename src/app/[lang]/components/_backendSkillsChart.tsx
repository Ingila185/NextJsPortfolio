'use client';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import {techSkills} from '../api/skills';
export default function Backendskills () {
    const data = techSkills.backend;
    return (

<BarChart width={500} height={300} data={data}>
      <XAxis type="category"   dataKey="name"  />
      <YAxis dataKey="years" type="number" />
      <Tooltip labelStyle={{color:'#110F50'}}/>
      <Bar dataKey="years" fill="#C605FA" barSize={40} activeBar={false} />
    </BarChart>
    )
}