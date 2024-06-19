'use client';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { techSkills } from '../api/skills';
import { px } from "framer-motion";
export default function Frontendskills() {
    const data = techSkills.frontend;
    return (
                    <ResponsiveContainer width="90%" height={300}>
            <BarChart layout={"vertical"} data={data}>
                <XAxis type="number" dataKey="years" fontSize={15} />
                <YAxis dataKey="name" type="category" fontSize={15} padding={{ top: 5, bottom: 5 }} />
                <Legend verticalAlign="top" />

                <Tooltip labelStyle={{ color: '#110F50' }} />
                <Bar dataKey="years" fill="#FA05D5" barSize={20} activeBar={false} name="Frontend Frameworks (Years)" />
            </BarChart>
        </ResponsiveContainer>

    )
}