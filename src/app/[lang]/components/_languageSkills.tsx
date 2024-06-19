'use client';

import { Bar, BarChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { techSkills } from "../api/skills";

export default function Languageskills() {

    const data = techSkills.languages;
    data.map((item) => Number(item.years) * 100);

    //console.log(data);

    return (

        <ResponsiveContainer width="90%" height={300}>


            <BarChart data={data} >
                <XAxis type="category" dataKey="name" padding={{ left: 20, right: 20 }} />
                <YAxis dataKey="years" type="number" />
                <Tooltip labelStyle={{ color: '#110F50' }} />
                <Legend verticalAlign="top" />

                <Bar dataKey="years" fill="#FA9C00" activeBar={false} name="Languages (Years)" />
            </BarChart>
        </ResponsiveContainer>
    );
}