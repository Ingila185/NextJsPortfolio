import CustomImage from "./_image";

export default function Hackathons()

{
    return (
        <div className="p-10 flex flex-col gap-10">
            <a target = "_blank" href="https://constellation-hackathon.devpost.com/">
            <CustomImage imagePath={"/constellation.PNG"} width = {1200} height={800} />
            </a>
            <p>
            I recently participated in Constellation where I, along 
with developers from the US, UK and Nigeria developed a 
decentralized finance (DeFi) app using Next.js14, React, TailwindCSS, and Solidity.
<a href="https://devpost.com/software/bridge-hop" target = "_blank" className="inline-flex items-center text-sm text-blue-600 hover:underline">
Find out more here
        <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" 
        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
            <path stroke="currentColor" strokeLinecap="round"
             strokeLinejoin="round" strokeWidth="2" 
             d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
        </svg>
    </a>
            </p>    

            <a target = "_blank" href="https://constellation-hackathon.devpost.com/">
            <CustomImage imagePath={"/partyRock.PNG"} width = {1200} height={800} />
            </a>
            <p>
            I participated in a PartyRock Hackathon and developed The Interview Gym with the help of Generative AI and Amazon Bedrock. The project accepts a job description and position and generated keywords and possible interview questions and their answers.
<a href="https://devpost.com/software/coding-problems" target = "_blank" className="inline-flex items-center text-sm text-blue-600 hover:underline">
Find out more here
        <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" 
        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
            <path stroke="currentColor" strokeLinecap="round"
             strokeLinejoin="round" strokeWidth="2" 
             d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
        </svg>
    </a>
            </p>    
            </div>

    )
}