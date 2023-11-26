'use client';
import IntroCard from './components/_introCard';
import { Children, ReactNode } from 'react';
import NavBar from './components/_NavBar';
import AboutCard from './components/_aboutCard';
import Projects from './components/_projects';
import Certifications from './components/_certifications';
export default function Home({children}: {children: React.ReactNode}) {
  return (
    <div>
      <IntroCard/>
      </div>);
}

