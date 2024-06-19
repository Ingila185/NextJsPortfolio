'use client';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from "recharts";
import {techSkills} from '../api/skills';
import Frontendskills from './_frontendSkillsChart';
import Backendskills from "./_backendSkillsChart";
import Languageskills from "./_languageSkills";
import Miscskills from "./_miscSkills";


export default function Skills () {
    return (
<div className="p-5">

        <div className="m-5 flex flex-row xl:flex-row lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-5 justify-center">
        <div className="w-1/2 md:w-full sm:w-full xs:w-full h-full   rounded-lg  bg-slate-800 hover:scale-110 duration-300">
        <Frontendskills />
        </div>
       
        <div className="w-1/2 md:w-full sm:w-full xs:w-full h-full   rounded-lg  bg-slate-800 hover:scale-110 duration-300">
        <Backendskills />
        </div>
</div>
        <div className="m-5 flex  flex-row xl:flex-row lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-5 justify-center">

        <div className="w-1/2 md:w-full sm:w-full xs:w-full h-full  rounded-lg  bg-slate-800 hover:scale-110 duration-300">
        <Languageskills />
        </div>

        <div className="w-1/2  md:w-full sm:w-full xs:w-full h-full  rounded-lg  bg-slate-800 hover:scale-110 duration-300">
        <Miscskills />
        </div>
        
        
        
        
        </div>
        </div>
    )
}