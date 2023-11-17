export default function AboutCard({repo} : any)
{
    return (
<div className="flex flex-wrap space-x-4 ">
<div className="shadow-2xl  max-w-lg max-h-screen bg-white border border-gray-200 solid-lg  dark:bg-gray-800  dark:border-gray-700 shadow-cyan-500/50">
    <a href="#">
        <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
    </a>
    <div className="p-10">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">About Me</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {repo}

</p>
    
    </div>
</div>

</div>

    )
}