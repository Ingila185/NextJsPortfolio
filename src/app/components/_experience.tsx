import experience from "@/pages/experience";
import { useState, useEffect } from 'react'
import Accordion from "./_accordion";
import {workExperience} from '../../pages/api/experience';
import { workerData } from "worker_threads";
export default function Experience()
{
    const [accordionOpen, setAccordionOpen] = useState<boolean>(false)
    useEffect(() => {
        setAccordionOpen(false)
      }, [])
    
    return (

<div>

{/* experience.map((exp, idx)=>

<div key = {idx} className="px-10">
  <h2>
    <button
      className="flex items-center justify-between w-full text-left font-semibold py-2"
      onClick={(e) => { e.preventDefault(); setAccordionOpen(!accordionOpen); }}
      aria-expanded={accordionOpen}
      aria-controls={`accordion-text-{idx}`}
    >
      <h5>{exp.company}</h5>
      <svg className="fill-indigo-500 shrink-0 ml-8" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
        <rect y="7" width="16" height="2" rx="1" className={`ttransform origin-center transition duration-200 ease-out ${accordionOpen && '!rotate-180'}`} />
        <rect y="7" width="16" height="2" rx="1" className={`transform origin-center rotate-90 transition duration-200 ease-out ${accordionOpen && '!rotate-180'}`} />
      </svg>           
    </button>        
  </h2>
  <div
    id={`accordion-text-{idx}`}
    role="region"
    aria-labelledby={`accordion-title-{idx}`}
    className={`grid text-sm text-slate-600 overflow-hidden transition-all duration-300 ease-in-out ${accordionOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
  >
    <div className="overflow-auto">
        <ul>    
        { exp.desc.map((responsibility, idx)=>

            <li key = {idx} className="pb-3">{responsibility}
            </li>
        )}
        </ul>
       
    </div>
  </div>
</div>

) */}

<div>
      <div className="accordion">
        {workExperience.map(({ title, desc }) => (
          <Accordion title={title} content={desc} />
        ))}
      </div>
    </div>

</div>





        )
}