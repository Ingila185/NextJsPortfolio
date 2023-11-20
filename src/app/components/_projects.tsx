import {projects} from '../../pages/api/projects';

export default function Projects()
{
    
    return (
        <div className='grid grid-cols-3'>

        {projects.map((exp,idx) =>
        
        <div key = {idx} className="grid grid-cols-1 space-x-4 space-y-4">
        <div className="shadow-2xl p-5 max-w-lg max-h-screen bg-white border border-gray-200 solid-lg  dark:bg-gray-800  dark:border-gray-700 shadow-cyan-500/50">
        <div className="p-5">
        <a href={exp.url} target="_blank"  >
         <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{exp.name}</h5>
        </a>
        
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {exp.desc}
        </p>
        </div>
        </div>
        <div className="divide-y divide-solid">
        </div>
        </div>
        )}
        </div>
           )
}