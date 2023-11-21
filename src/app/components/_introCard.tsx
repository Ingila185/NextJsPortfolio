export default function IntroCard() {
  var names = ['Full Stack Developer','Designer','Architect', 'Enthusiast'];
return (
<div className="flex flex-col items-left justify-left overflow-auto">
  
  <div className="w-max">
  <div className="border-r-white text-4xl  font-bold">
    <h2>Hey there <span className="animate-wave inline-block">👋</span> I'm Ingila.</h2>
  </div>
  </div>
  <div className="w-max">
  <h1 className="border-r-white pr-5 text-5xl  font-bold">I'm a </h1>
    <span className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white text-5xl  font-bold inline-block">{names[0]}</span>        
  </div>
  <div className="w-max">
  <div className="border-r-white text-2xl font-bold">
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