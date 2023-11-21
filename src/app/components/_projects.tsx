import {projects} from '../../pages/api/projects';

export default function Projects()
{
    
    return (


        <div className='p-10 grid grid-cols-3 overflow-hidden '>

        {projects.map((exp,idx) =>
        
            <div key = {idx} className = "p-3 m-2 box-content border-2 rounded-lg border-indigo-500/100  ">
             <h4><b>{exp.name}</b></h4>   
             <a href ={exp.url} target = "_blank" className='text-blue-500'>{exp.url}</a>   
             <p>{exp.desc}</p> 

             <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine" />

            </div>

        )}
        </div>
           )
}