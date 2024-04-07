import React, { useState } from 'react';
import { isatty } from 'tty';

const Accordion = ({ title, content }: any ) => {
  const [isActive, setIsActive] = useState(false);

  return (

    <div className="accordion-item flex items-center justify-between w-full text-center font-semibold py-2">
<h2>
    <button
      className="flex items-center justify-between w-full text-left font-semibold py-2"
      onClick={(e) => { e.preventDefault(); setIsActive(!isActive); }}
      aria-expanded={isActive}
      aria-controls={`accordion-text-{idx}`}
    >
      <h5>{title}</h5>
      <svg className="fill-indigo-500 shrink-0 ml-8" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
        <rect y="7" width="16" height="2" rx="1" className={`transform origin-center transition duration-200 ease-out ${isActive && '!rotate-180'}`} />
        <rect y="7" width="16" height="2" rx="1" className={`transform origin-center rotate-90 transition duration-200 ease-out ${isActive && '!rotate-180'}`} />
      </svg>           
    </button>        
  </h2>

  <div
    id={`accordion-text-{idx}`}
    role="region"
    aria-labelledby={`accordion-title-{idx}`}
    className={`grid text-sm text-slate-600 overflow-hidden transition-all duration-300 ease-in-out ${isActive ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
  >
    <div className="overflow-auto">
       <ul>
        <li>{content}</li>
       </ul>
       
    </div>
  </div>


     {/* <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div  className={`grid text-sm text-slate-600 overflow-hidden transition-all duration-300 ease-in-out {isActive ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
            {isActive ? '-' : '+'}
            
            
            </div>
      </div>
      {isActive && <div className="accordion-content">{content}</div>*/}
    </div>
  );
};

export default Accordion;