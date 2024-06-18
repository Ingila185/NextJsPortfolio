'use client';
import Link from "next/link";
import React, { useState } from "react";
import { navLinks } from "../api/navLinks";
import { FaBars, FaTimes } from "react-icons/fa";
import { useTheme} from 'next-themes'
import {useTranslations} from 'next-intl';
import LanguageSelector from './_languageSelector';

import { useRouter } from 'next/navigation';

const NewNavBar = () =>{

    const [nav, setNav] = useState(false);
    const {theme, setTheme} = useTheme()
    const router = useRouter();


return (
    <div className="flex justify-between items-center w-full h-20 p-5 text-white bg-transparent fixed nav">
    <div>       
      <button className="block py-2 px-3 md:p-2 sm:p-2 text-gray-900 rounded hover:bg-gray-100 
          md:hover:bg-transparent md:hover:text-gray-700 md:dark:hover:text-gray-500 dark:text-white 
          dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" onClick={(e) => {setTheme(theme === 'dark' ? 'light' : 'dark')}}>
        { theme === 'light' ? 
          (<svg id="theme-toggle-dark-icon" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg> )
        : (<svg id="theme-toggle-light-icon" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fillRule="evenodd" clipRule="evenodd"></path></svg>)
        }
      </button>     
    </div>
    <div className="flex gap-5">
        <a href = "#" onClick={()=>{router.replace(`en`)}}>EN</a> | <a href = "#" onClick={()=>{router.replace(`de`)}} >DE</a>
        </div>
    <ul className="hidden md:flex text-black ">
      {navLinks.map((link, idx ) => (
        <li
          key={idx}
          className="nav-links px-4 cursor-pointer capitalize font-medium dark:text-gray-300 
          hover:scale-105 dark:hover:text-white duration-200 link-underline"
        >
          <Link href={link.path}>
          {link.name}
            </Link>
        </li>

      ))}
     <li  className="nav-links px-4 cursor-pointer capitalize font-medium dark:text-gray-300 
          hover:scale-105 dark:hover:text-white duration-200 link-underline"
  >
     <Link href = "#">
      <LanguageSelector />
     </Link>
</li> 
    </ul>

    <div
      onClick={() => setNav(!nav)}
      className="cursor-pointer pr-4 z-10 text-gray-300 md:hidden"
    >
    {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
    </div>

    {nav && (
      <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen 
      bg-gradient-to-b from-black to-gray-800 text-gray-500">
        {navLinks.map((link, idx) => (
          <li
            key={idx}
            className="px-4 cursor-pointer capitalize py-6 text-lg"
          >
            <Link onClick={() => setNav(!nav)} href={link.path}>
            {link.name}
            </Link>
          </li>
         
        ))}

      </ul>
    )}
  </div>
)
}
export default NewNavBar;