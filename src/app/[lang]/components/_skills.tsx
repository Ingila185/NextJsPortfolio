'use client';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from "recharts";
import {techSkills} from '../api/skills';
import Frontendskills from './_frontendSkillsChart';
import Backendskills from "./_backendSkillsChart";
import Languageskills from "./_languageSkills";
import Miscskills from "./_miscSkills";


export default function Skills () {
    return (


        <div className="m-8 xl:grid xl:grid-cols-2 xl:gap-4 lg:grid lg:grid-cols-2 lg:gap-4 md:grid-cols-1 md:gap-2 sm:grid-cols-1 sm:gap-2 xs:grid-cols-1 xs:gap-2 ">
        <div className="m-2 rounded-lg  bg-slate-800 hover:scale-110 duration-300">
        <Frontendskills />
        </div>
        
        <div className="m-2 rounded-lg  bg-slate-800 hover:scale-110 duration-300">
        <Backendskills />
        </div>

        <div className="m-2 rounded-lg  bg-slate-800 hover:scale-110 duration-300">
        <Languageskills />
        </div>

        <div className="m-2 rounded-lg  bg-slate-800 hover:scale-110 duration-300">
        <Miscskills />
        </div>
        
        </div>
    )
}