'use client';

import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { techSkills } from "../api/skills";

export default function Languageskills()
{

    const data = techSkills.languages;
    data.map((item) => Number(item.years) * 100);

//console.log(data);

    return (
  
<BarChart width={500} height={300} data={data} >
      <XAxis type="category"   dataKey="name"  padding={{left: 20, right: 20}} />
      <YAxis dataKey="years" type="number" />
      <Tooltip labelStyle={{color:'#110F50'}}/>
      <Bar dataKey="years" fill="#FA9C00"  barSize={40} activeBar={false} />
    </BarChart>
    );
}