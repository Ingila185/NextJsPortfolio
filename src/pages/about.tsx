
import type { GetStaticProps } from 'next'


import AboutCard from "@/app/components/_aboutCard"
import {content} from '../pages/api/aboutData';

export const getStaticProps = (async (context) => {
 //   const res = await fetch('experience')
    //const repo = await experience.toString()
    const repo = content.toString()
    return { props: { repo } }
  }) satisfies GetStaticProps<{
    repo: string
  }>


export default function About({repo} : any) {
return (
    <div>
<AboutCard repo = {repo}/>
</div>
)}
