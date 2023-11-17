
import type { GetStaticProps } from 'next'

import AboutCard from "@/app/components/_aboutCard"

export const getStaticProps = (async (context) => {
    const res = await fetch('http://127.0.0.1:8000/api/experience/')
    const repo = await res.json()
    console.log(repo)
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
