export default function IntroCard() {
  var names = ['Full Stack Developer','Designer','Architect', 'Web 3.0 Enthusiast'];
return (
  <article className="items-center content-center justify-center">
<div className="p-10 flex flex-col content-center items-center justify-center gap-12">

  <section className="flex flex-rows border-r-white text-5xl content-center justify-center ">
    <h4 className=" font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Hey there</h4> 
<span className="animate-wave inline-block">👋 </span> 
  </section>
  <section className="flex flex-col border-r-white text-4xl content-center justify-center items-center gap-6">
  <p className="font-extrabold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">I'm Ingila.</p>
  <p className="font-extrabold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">I am a full stack developer.</p> 
  <p className=" text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">I like to build websites, design UI/UX, APIs and all things coding.</p>
  </section>

{/*  <div className="w-max">
  <h1 className="border-r-white pr-5 text-5xl  font-bold">I'm a </h1>
    <span className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white text-5xl  font-bold inline-block">{names[0]}</span>        
</div>*/ }
  
</div>
</article>
)
}