import { useTheme} from 'next-themes'
import Link from 'next/link'
import { useState } from "react"; // import state
import {navLinks} from '../../pages/api/navLinks';
export default function NavBar()
{
  const {theme, setTheme} = useTheme()
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

return (
 <nav className="p-5 flex flex-row-reverse  items-left content-left">


  {/*Hamburger + Menu*/}
  <div className="flex flex-row items-right content-right">
    {/*Hamburger Menu*/}
  <div className="flex flex-row md:order-last ">
      <button onClick={(e) => { e.preventDefault(); setIsNavOpen(!isNavOpen);}}
         data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-left 
      p-2 w-10 h-10 justify-left text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100
       focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400
        dark:hover:bg-transparent dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false"   
        >
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>

  {/**Menu Items */}
  <div hidden = {!isNavOpen} className="items-right  w-auto md:flex  md:w-auto md:order-1" id="navbar-cta">
    <ul  className="flex flex-row font-medium  md:p-0 mt-4  
    rounded-lg bg-transparent 
     md:space-x-8 rtl:space-x-reverse md:mt-0 
     " >

  {navLinks.map((link, idx)=>
  <li key = {idx} className="block py-2 px-3 md:p-2 sm:p-2 text-gray-900 rounded hover:bg-gray-100 
  md:hover:bg-transparent md:hover:text-gray-700 md:dark:hover:text-gray-500 dark:text-white 
  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
    <a href = {link.path}>{link.name}</a>
  </li>)}
<li>
      <button className="block py-2 px-3 md:p-2 sm:p-2 text-gray-900 rounded hover:bg-gray-100 
        md:hover:bg-transparent md:hover:text-gray-700 md:dark:hover:text-gray-500 dark:text-white 
        dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" onClick={(e) => {setTheme(theme === 'dark' ? 'light' : 'dark')}}>
      { theme === 'light' ? 
        (<svg id="theme-toggle-dark-icon" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg> )
      : (<svg id="theme-toggle-light-icon" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fillRule="evenodd" clipRule="evenodd"></path></svg>)
      }
    </button>  
      </li>
    </ul>

       
 
  </div>
 
  </div>
</nav>


)
}