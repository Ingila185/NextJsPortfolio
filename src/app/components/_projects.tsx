export default function Projects()
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
            "desc" : []
        },{
            "company" : "Bank Al Habib Limited",
            "title": "Full Stack Java Developer",
            "from": "Aug 2016",
            "to": "Nov 2017",
            "url":"https://www.bankalhabib.com/",
            "desc" : []
        }
    ]
    return (
        <div >

        {experience.map((exp,idx) =>
        
        <div key = {idx} className="flex space-x-4 space-y-8">
        <div className="shadow-2xl p-5 max-w-lg max-h-screen bg-white border border-gray-200 solid-lg  dark:bg-gray-800  dark:border-gray-700 shadow-cyan-500/50">
        <div className="p-5">
        <a href={exp.url} target="_blank"  >
         <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{exp.company}</h5>
        </a>
        <h2><b>{exp.title}</b></h2>
        <h1>{exp.from} - {exp.to}</h1>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
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