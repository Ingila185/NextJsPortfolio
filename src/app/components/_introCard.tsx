export default function IntroCard() {
  var names = ['Full Stack Developer','Designer','Architect', 'Enthusiast'];
return (
<div className="flex flex-col items-left justify-center">
  
  <div className="w-max">
  <div className="border-r-white text-4xl text-slate-500 font-bold">
    <h2>Hey there <span className="animate-wave inline-block">👋</span> I'm Ingila.</h2>
  </div>
  </div>
  <div className="w-max">
  <h1 className="border-r-white pr-5 text-5xl text-slate-500 font-bold">I'm a </h1>
    <span className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white text-5xl text-slate-500 font-bold inline-block">{names[0]}</span>        
  </div>
  <div className="w-max">
  <div className="border-r-white text-4xl text-slate-500 font-bold">
    <h2>I love building applications on JavaScript, Python and other frameworks.</h2>
  </div>
  </div>
</div>

)
}