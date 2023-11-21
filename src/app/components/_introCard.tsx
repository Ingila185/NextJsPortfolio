export default function IntroCard() {
  var names = ['Full Stack Developer','Designer','Architect', 'Web 3.0 Enthusiast'];
return (
<div className="container p-10 flex flex-col items-center justify-between mx-auto h-auto overflow-auto">
  <section className="p-15 flex flex-auto ">
  <div className="w-max">
  <div className="border-r-white text-5xl  font-bold">
    <h2>Hey there <span className="animate-wave inline-block">👋</span> I'm Ingila.</h2>
  </div>
  </div>
  </section>
  <div className="w-max">
  <h1 className="border-r-white pr-5 text-5xl  font-bold">I'm a </h1>
    <span className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white text-5xl  font-bold inline-block">{names[0]}</span>        
  </div>
  <div className="w-max">
  <div className="border-r-white ">
    <p>This portfolio is built on:</p>
      <ul>
        <li>Frontend: Next.js14</li>
        <li>Backend: Django Rest Framework</li>
        <li>UI/UX kit: TailwindCSS</li> 
        <li>Database: PostGresQL(Local)</li>
        <li>Serverless DB: Vercel Neon</li>
        <li>CI/CD: Vercel and GitHub</li>
        </ul></div>
  </div>
</div>

)
}