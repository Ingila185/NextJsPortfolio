import experience from "@/pages/experience";
import { useState, useEffect } from 'react'
import Accordion from "./_accordion";

export default function Experience()
{

      
    const experience = [
        {
            "company" : "Habib Bank Limited",
            "title": "Senior Full Stack Developer",
            "from": "Jan 2023",
            "to": "Present",
            "url":"https://www.hbl.com",
            "desc" : ["Improved Remittance payment efficiency by 90% by revamping the legacy Remittance processing software into modern, feature-rich Remittance processing solution",
            "Developed 10+ end-to-end applications ",
            "Implemented Test Driven Development (TDD) and Business Driven Development (BDD) in 20+ projects by using unit test suites like Jest resulting strict alignment of software with business objectives with Continuous Integration and Continuous Development.",
            "Conducted 6-day MEAN Stack training for 26 developers with varying levels of experience.",
            "Performed 300+ code reviews ensuring the best design principles like SOLID being implemented and best coding practices being followed along with UAT support",
            "Ensured effective communication with tools like Jira, MS Teams, Azure DevOps. Performed CI/CD and version control using GitHub, GitLab and DevSecOps."
        
        ]
        },{
            "company" : "Habib Bank Limited",
            "title": "Full Stack Developer",
            "from": "Dec 2017",
            "to": "Dec 2022",
            "url":"https://www.hbl.com",
            "desc" : ["Improved Remittance payment efficiency by 90% by revamping the legacy Remittance processing software into modern, feature-rich Remittance processing solution",
            "Developed 10+ end-to-end applications "]
        },{
            "company" : "Bank Al Habib Limited",
            "title": "Full Stack Java Developer",
            "from": "Aug 2016",
            "to": "Nov 2017",
            "url":"https://www.bankalhabib.com/",
            "desc" : ["Hey"]
        }
    ]
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
        {experience.map(({ title, desc }) => (
          <Accordion title={title} content={desc} />
        ))}
      </div>
    </div>

</div>





        )
}