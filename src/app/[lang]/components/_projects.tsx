import {projects} from '../api/projects';

export default function Projects()
{
    
    return (
        <div className='p-10 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 '>

        {projects.map((exp,idx) =>            
            <div key = {idx} className = "p-3 m-2 text-lg box border-2 rounded-lg border-gray-500/100 dark:bg-gradient-to-b to-slate-800  hover:scale-110 duration-300">
             <h1 className='hover:underline'><b>{exp.name}</b></h1> 
             <div className='box-content'>  
             <p className='text-sm'>{exp.desc}</p> 
             <a href={exp.url} target = "_blank" className="inline-flex items-center text-sm text-blue-600 hover:underline">
        Learn More
        <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" 
        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
        </svg>
    </a>
            </div></div>

        )}
        </div>
           )
}