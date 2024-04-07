import Blog from "../components/_blog";
export default function blog()
{
    return (
        <section className="bg-transparent  bg-blend-multiply">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
            <h1 className="mb-4 text-4xl font-extrabold  leading-none   md:text-5xl lg:text-6xl">
                It's in the works.. Bye Bye <span className="animate-wave inline-block">👋 </span>
            </h1>
          <p  className="mb-8 text-lg font-normal  lg:text-xl sm:px-16 lg:px-48">Meanwhile, take a look at my 
         StackBlitz   where you can see some of my projects on Angular, React and Next.js. </p>
            <a href="https://stackblitz.com/@ingila185" target = "_blank" className="inline-flex items-center 
          text-md text-blue-600 hover:underline">
StackBlitz        <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" 
        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
            <path stroke="currentColor" strokeLinecap="round"
             strokeLinejoin="round" strokeWidth="2" 
             d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
        </svg>
    </a>
        </div>
    </section>
        )
}