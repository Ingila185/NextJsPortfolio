import experience from "@/app/experience/page";
import { useState, useEffect } from 'react'
import Accordion from "./_accordion";
import {workExperience} from '../api/experience';
import { workerData } from "worker_threads";
export default function Experience()
{
    return (

<div className="p-10 grid grid-cols-1  lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  m-8 gap-6">

{
workExperience.map(( exp, idx ) => (
 
<div key = {idx} className="max-w-screen  rounded  shadow-lg bg-gradient-to-t from-slate-700 to-slate-800">
<a href = {exp.url} target = "_blank">
<img className="w-full p-5" src={exp.logo} alt="Experience" />
</a>
<div key = {idx} className="px-6 py-4">
  <div key = {idx} className="flex flex-row flex-nowrap gap-4">
  <div key = {idx} className="font-bold text-md mb-2">
    {exp.title}
    </div>
    <div className="font-bold text-md mb-2">
    {exp.from} - {exp.to}
    </div>
    </div>
  <ul className="text-gray-200 text-base text-sm">
   {exp.desc.map((role, idx)=>
   <li key = {idx}>{role}</li>
   )}  </ul>
</div>
{/*<div className="px-6 pt-4 pb-2">
  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#JavaScript</span>
  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#.NET</span>
  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Angular</span>
  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#React</span>
  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Python</span>
  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Django</span>

</div>*/}
</div>


        ))
        }

</div>
 )
}