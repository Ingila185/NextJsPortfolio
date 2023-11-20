import { useState, useEffect } from 'react'
import {certifications} from '../../pages/api/certifications';
export default function Certifications()
{
    const [accordionOpen, setAccordionOpen] = useState<boolean>(false)
    useEffect(() => {
        setAccordionOpen(false)
      }, [])
    

    return (
<div>

    { certifications.map((cert, idx)=>

<div key = {idx} className="py-2">
      <h2>
        <button
          className="flex items-center justify-between w-full text-left font-semibold py-2"
          onClick={(e) => { e.preventDefault(); setAccordionOpen(!accordionOpen); }}
          aria-expanded={accordionOpen}
          aria-controls={`accordion-text-01`}
        >
          <h5>{cert.name}</h5>
          <svg className="fill-indigo-500 shrink-0 ml-8" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
            <rect y="7" width="16" height="2" rx="1" className={`ttransform origin-center transition duration-200 ease-out ${accordionOpen && '!rotate-180'}`} />
            <rect y="7" width="16" height="2" rx="1" className={`transform origin-center rotate-90 transition duration-200 ease-out ${accordionOpen && '!rotate-180'}`} />
          </svg>           
        </button>        
      </h2>
      <div
        id={`accordion-text-01`}
        role="region"
        aria-labelledby={`accordion-title-01`}
        className={`grid text-sm text-slate-600 overflow-hidden transition-all duration-300 ease-in-out ${accordionOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
            <ul>    
            { cert.courses.map((course, idx)=>

                <li key = {idx} className="pb-3" >
                 
                 <a href={course.url} target = "_blank" className="inline-flex items-center font-medium text-blue-600 dark:text-blue-500 hover:underline">
                 {course.name}  <svg className="w-4 h-4 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
</svg>
</a>
                </li>
            )}
            </ul>
           
        </div>
      </div>
    </div>

)}


    </div>

 )

}