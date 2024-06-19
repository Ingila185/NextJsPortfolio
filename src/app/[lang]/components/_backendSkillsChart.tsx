'use client';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { techSkills } from '../api/skills';
export default function Backendskills() {
    const data = techSkills.backend;
    return (
        <ResponsiveContainer width="90%" height={300}>

            <BarChart data={data}>
                <XAxis type="category" dataKey="name" padding={{ left: 20, right: 20 }} />
                <YAxis dataKey="years" type="number" />
                <Tooltip labelStyle={{ color: '#110F50' }} />
                <Legend verticalAlign="top" />

                <Bar dataKey="years" fill="#C605FA" barSize={40} activeBar={false} name="Backend Frameworks (Years)" />
            </BarChart>
        </ResponsiveContainer>

    )

}