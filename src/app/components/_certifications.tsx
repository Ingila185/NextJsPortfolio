import { useState, useEffect } from 'react'
import {certifications} from '../api/certifications';
export default function Certifications()
{
    return (
<div className='p-10 mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 m-8 gap-6 '>

    { certifications.map((cert, idx)=>

<div key = {idx} className="max-w-screen  rounded overflow-hidden shadow-lg bg-gradient-to-t from-gray-900 to-slate-500 ">
<a target='_blank' href= {cert.url}>
<img className="w-full" src={cert.logo} alt="Certifications" />
</a>
<div className="px-6 py-4">
  <div className="font-bold text-md sm-2">{cert.name}</div>
</div>
<div className="px-6 pt-4 pb-2">
  {cert.courses.map((course,idx)=>
  <span key = {idx} className="inline-block bg-gray-300 hover:bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-900 hover:text-gray-400 mr-2 mb-2">
    {course.tag}
    </span>
  
  )}    
  
 
</div>
</div>






)}


    </div>

 )

}