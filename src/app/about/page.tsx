
import type { GetStaticProps } from 'next'
import AboutCard from "@/app/components/_aboutCard"
import {content} from '../api/aboutData';


export default function About({repo} : any) {
return (
<AboutCard repo = {repo}/>
)}
