export default function IntroCard() {
  var names = ['Full Stack Developer','Designer','Architect', 'Web 3.0 Enthusiast'];
return (
<div className="container p-10 flex flex-col content-center items-center justify-center mx-auto h-auto overflow-hidden ">
  <center className="p-15 flex flex-auto ">

  <div className="w-max">
  <div className="flex flex-rows border-r-white text-3xl  ">
    <center>
    <h4 className=" font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Hey there</h4> 
<span className="animate-wave inline-block">👋</span> 
    <p className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">I'm Ingila. I like to build websites, design UI/UX, APIs and all things coding.</p>
    </center>
  </div>

  </div>
  </center>

{/*  <div className="w-max">
  <h1 className="border-r-white pr-5 text-5xl  font-bold">I'm a </h1>
    <span className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white text-5xl  font-bold inline-block">{names[0]}</span>        
</div>*/ }
  <div className="w-max">
  
  </div>
</div>

)
}