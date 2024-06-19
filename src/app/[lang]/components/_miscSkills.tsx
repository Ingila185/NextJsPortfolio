'use client';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { techSkills } from '../api/skills';
export default function Miscskills() {
  const data = techSkills.misc;
  return (

    <ResponsiveContainer width="100%" height={300}>

      <BarChart  data={data}>
        <XAxis dataKey="name" type="category"  fontSize={15} />
        <YAxis type="number" dataKey="years" fontSize={15} padding={{ top: 5, bottom: 5 }} />
        <Tooltip labelStyle={{ color: '#62B67E' }} />
        <Legend verticalAlign="top" />

        <Bar dataKey="years" fill="#62B67E"  activeBar={false} name="Miscellaneous (Years)" />
      </BarChart>
    </ResponsiveContainer>
  )
}