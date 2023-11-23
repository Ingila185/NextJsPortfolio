import experience from "@/pages/experience";
import { useState, useEffect } from 'react'
import Accordion from "./_accordion";
import {workExperience} from '../../pages/api/experience';
import { workerData } from "worker_threads";
export default function Experience()
{
    return (

<div className="p-10 grid lg: grid-cols-2 xl: grid-cols-4 sm: grid-cols-1 ">

{
workExperience.map(( exp, idx ) => (
  <div className="p-5 m-2 box-content border-2 rounded-lg border-indigo-500/100" key = {idx} >
    <h3>{exp.company}</h3>
    <a className='text-blue-500' href = {exp.url}>{exp.url}</a>
    <h2>{exp.title}</h2>
  <span>{exp.from} - {exp.to}</span>
  
    </div>


        ))
        }

</div>
 )
}