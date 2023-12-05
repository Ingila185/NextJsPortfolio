
export default function IntroCardJumbotron() {
    return (

        <section className="bg-transparent  bg-blend-multiply">
            <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
                <h1 className="mb-4 text-4xl font-extrabold  leading-none   md:text-5xl lg:text-6xl">
                    Hi there, I am Ingila. <span className="animate-wave inline-block">👋 </span>
                </h1>
                <p className="mb-8 text-lg font-normal  lg:text-xl sm:px-16 lg:px-48">I am just another full stack developer who loves to code, learn every technology stack and cotribute to the open source community. Here's where you can find me.</p>
                {/**Icons div */}
                <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                    {/**Email */}
                    <a  href = 'mailto:ingila185@gmail.com' target = "_blank" className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" data-name="Layer 1" viewBox="0 0 32 32" id="gmail"><path fill="#ea4435" d="M16.58,19.1068l-12.69-8.0757A3,3,0,0,1,7.1109,5.97l9.31,5.9243L24.78,6.0428A3,3,0,0,1,28.22,10.9579Z"></path><path fill="#00ac47" d="M25.5,5.5h4a0,0,0,0,1,0,0v18a3,3,0,0,1-3,3h0a3,3,0,0,1-3-3V7.5a2,2,0,0,1,2-2Z" transform="rotate(180 26.5 16)"></path><path fill="#ffba00" d="M29.4562,8.0656c-.0088-.06-.0081-.1213-.0206-.1812-.0192-.0918-.0549-.1766-.0823-.2652a2.9312,2.9312,0,0,0-.0958-.2993c-.02-.0475-.0508-.0892-.0735-.1354A2.9838,2.9838,0,0,0,28.9686,6.8c-.04-.0581-.09-.1076-.1342-.1626a3.0282,3.0282,0,0,0-.2455-.2849c-.0665-.0647-.1423-.1188-.2146-.1771a3.02,3.02,0,0,0-.24-.1857c-.0793-.0518-.1661-.0917-.25-.1359-.0884-.0461-.175-.0963-.267-.1331-.0889-.0358-.1837-.0586-.2766-.0859s-.1853-.06-.2807-.0777a3.0543,3.0543,0,0,0-.357-.036c-.0759-.0053-.1511-.0186-.2273-.018a2.9778,2.9778,0,0,0-.4219.0425c-.0563.0084-.113.0077-.1689.0193a33.211,33.211,0,0,0-.5645.178c-.0515.022-.0966.0547-.1465.0795A2.901,2.901,0,0,0,23.5,8.5v5.762l4.72-3.3043a2.8878,2.8878,0,0,0,1.2359-2.8923Z"></path><path fill="#4285f4" d="M5.5,5.5h0a3,3,0,0,1,3,3v18a0,0,0,0,1,0,0h-4a2,2,0,0,1-2-2V8.5a3,3,0,0,1,3-3Z"></path><path fill="#c52528" d="M2.5439,8.0656c.0088-.06.0081-.1213.0206-.1812.0192-.0918.0549-.1766.0823-.2652A2.9312,2.9312,0,0,1,2.7426,7.32c.02-.0475.0508-.0892.0736-.1354A2.9719,2.9719,0,0,1,3.0316,6.8c.04-.0581.09-.1076.1342-.1626a3.0272,3.0272,0,0,1,.2454-.2849c.0665-.0647.1423-.1188.2147-.1771a3.0005,3.0005,0,0,1,.24-.1857c.0793-.0518.1661-.0917.25-.1359A2.9747,2.9747,0,0,1,4.3829,5.72c.089-.0358.1838-.0586.2766-.0859s.1853-.06.2807-.0777a3.0565,3.0565,0,0,1,.357-.036c.076-.0053.1511-.0186.2273-.018a2.9763,2.9763,0,0,1,.4219.0425c.0563.0084.113.0077.169.0193a2.9056,2.9056,0,0,1,.286.0888,2.9157,2.9157,0,0,1,.2785.0892c.0514.022.0965.0547.1465.0795a2.9745,2.9745,0,0,1,.3742.21A2.9943,2.9943,0,0,1,8.5,8.5v5.762L3.78,10.9579A2.8891,2.8891,0,0,1,2.5439,8.0656Z"></path></svg>
                    </a>

{/**Credly */}
<a  href = 'https://www.credly.com/users/ingila-e' target = "_blank" className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">

<svg className="w-10 h-10" viewBox="0 0 1024 1024" >
   <circle cx="512" cy="512" r="512" fill="#f36c21"/>
   <path d="M671.2 371.6h3c3.7.3 7.4 2.1 9.7 5 3.4 4.2 4.3 9.8 4.6 15.1.8 16.1-2.7 32.1-7.3 47.5-5.9 20.4-14.2 40-21 60.1-1.2 3.5-2.4 7.1-3.3 10.7-1.5 6-1.3 12.3-1.5 18.5-.2 5.8.2 11.6 1.3 17.3.6 3.1 1.9 6.4 4.3 8.6 2.2 2 5.4 2.9 8.3 2 3.9-1.2 7-4.2 9.8-7.1 3.9-4.3 7.6-8.7 10.3-13.8 3.8-6.8 6-14.3 7.1-22 1.5-11.6 2.7-23.4 6.9-34.4 1.6-4.2 3.6-8.5 7.4-11.1 5.1-3.6 12.8-2.1 16.7 2.7 1.9 2.4 2.4 5.5 2.4 8.4-.2 3.9-1 7.8-2.3 11.5-4.5 13.2-7.1 27.1-6.6 41.1.1 3.2.4 6.6 2.1 9.5 1.4 2.4 3.8 4.3 6.6 4.3 3.2 0 6-1.9 8-4.2 3.1-3.5 5.6-7.5 7.6-11.7 4-8.5 5.9-17.8 7.6-27 1.4-7.8 2.8-15.6 5-23.2 1.2-3.9 2.7-7.8 5.6-10.8 1.9-2.1 4.8-2.9 7.5-2.9 2.8.1 5.4 1.7 7.3 3.8 2.6 2.9 3.1 6.9 2.8 10.6-2.8 22.1-5.9 44.2-8.4 66.3-1.8 13.8-3.4 27.6-4.6 41.4-.1 1.5 1.7 2.4 2.7 1.4 7.2-6.9 14.3-14.1 19.7-22.5 2.5-3.8 4.3-7.9 6.7-11.7 1-1.7 2.2-3.4 4.1-4 2.9-1.4 6.6-1 9.1 1 1.9 1.4 2.9 3.7 3.2 6v2.7c-.6 4.6-3.3 8.5-5.3 12.5-5.5 11-13.1 21-22.6 28.9-6.8 5.8-14.8 10.2-23.2 13.2-.5.2-1.3.3-1.4 1-3.1 12.7-10 24.4-19.3 33.5-10.3 10.2-23.6 17.2-37.7 20.5-7.7 1.7-15.8 2.4-23.6 1-8-1.5-15.8-5.2-21.5-11-5.2-5.2-8.7-12.1-9.3-19.5-.6-6.7 1.1-13.5 4.3-19.4 3.7-6.7 9.3-12.3 15.9-16.2 6.3-3.8 13.5-5.6 20.6-6.5 8.1-.9 16.4-.9 24.6-.2 5.1.4 10.2.9 15.3 1.3 2.8.2 5.9 1.2 8.6-.2 1.9-.9 2.5-3.2 2.8-5.1 1.2-9 3-18.1 1.9-27.3-.2-1.2-.5-3-2-3.1-1.8.8-2.7 2.7-3.7 4.3-3.1 6-8.9 10.6-15.6 11.9-6.7 1.3-14-2.1-17.1-8.1-1.5-2.5-2.2-5.5-4.4-7.6-1.5-1.4-3.7-1.4-5.5-.6-3.2 1.4-5.3 4.3-7.9 6.5-6.8 6.1-15.4 10.7-24.7 11.2-10.8.7-21.9-5.4-26.4-15.4-.6-1.4-1.1-3.4-2.9-3.6-2-.3-3.5 1.3-4.6 2.7-5.3 6.7-10.3 13.9-17.3 18.9-4.5 3.2-9.9 5.4-15.5 5.3-5.9-.1-11.8-3.3-14.6-8.5-1.3-2.3-1.8-5.2-3.9-7-1.6-1.4-4.1-1.2-5.8-.1-2.6 1.5-4.1 4.2-6.2 6.3-5.8 5.8-14.2 8.7-22.3 7.9-9.8-1-18.7-7.8-22.3-17-.5-1.3-1.2-2.8-2.6-3.2-1.1-.4-2 .4-2.7 1.1-5.4 5-10.8 10.1-17.3 13.6-6.6 3.5-13.9 5.8-21.4 5.6-7.9.1-15.8-2.3-22.2-6.8-5.4-3.7-9.7-8.9-12.2-15-.7-1.6-1.6-3.4-3.4-3.8-1.6-.4-3 .8-3.9 2-2.7 3.8-6.2 7.1-10.1 9.6-6 3.9-13 6.6-20.3 6.6-5.6 0-11.2-2.1-15.2-6-4.3-4.2-6.6-10.1-7.5-16-1.1-7.7.5-15.5 2.7-22.8 1.4-4.8 3.2-9.4 4.3-14.3.6-2.5.8-5.2-.3-7.5-.9-1.8-2.8-2.9-4.6-3.7-2-.8-4.1.3-5.5 1.6-1.4 1.3-2.1 3-2.9 4.7-4.9 11.8-11.5 22.9-19.6 32.8-7.8 9.6-17.1 17.9-27.1 25.2-11.4 8.1-24.5 14-38.4 15.9-10.1 1.4-20.6.6-30.4-2.3-5.8-1.7-11.5-4.1-16.5-7.6-8.6-6-15.5-14.3-20.4-23.5-3.8-7.1-6.7-14.7-8.8-22.5-2.9-11.1-3.9-22.5-4.4-33.9v-7.8c.2-8.4 1-16.8 2.7-25 3-14.9 8.4-29.2 15.7-42.5 5.8-10.4 12.7-20.2 21.4-28.3 9.5-8.9 21-15.8 33.7-18.6 12.1-2.7 25.1-2 36.4 3.2 3.4 1.5 6.4 3.7 10 4.8 2.5.8 5.4.5 7.5-1.1 3.2-2.5 4.7-6.5 7.4-9.5 3.4-3.7 8.9-5.2 13.7-3.8 4.5 1.3 8 5.2 9.1 9.7.7 3 .3 6.1-.6 9-1.4 4.1-3.7 7.8-5.9 11.5-7.3 12.6-12.8 26.2-16.3 40.3-1.1 4.3-2 8.8-3.7 12.9-1.6 3.9-4.1 7.6-7.7 10-3.1 2.1-7.2 3.1-10.9 2-3.4-1-6-3.8-7.4-7-1.6-3.4-2.1-7.3-1.6-11.1 1-8.9 5.9-17 6.1-26.1.2-5.1-1.5-10.4-5.5-13.7-5.6-4.8-13.5-6.1-20.6-5.1-8.4 1.1-16.3 5.1-22.5 10.8-6.7 6.2-11.7 14-15.7 22.1-11.6 23.2-16.7 49.8-13.7 75.6 1 8.4 3 16.8 7 24.4 2.5 4.8 5.8 9.1 9.9 12.5 5.3 4.4 11.7 7.4 18.5 8.7 9.7 1.9 19.9.6 29-2.9 12.2-4.7 22.8-13.1 31.2-23 4.5-5.1 8.4-10.7 12.2-16.4 3.8-5.3 7.8-10.9 9.3-17.4 1-4.3.1-8.7-.9-12.9-.7-5.8 1.5-11.7 5.3-16 2.4-2.5 5.4-4.8 8.9-5.5 3.3-.6 7 0 9.8 2.1 3.1 2.2 4.7 6.4 3.6 10.1-.7 2.4-1.5 4.9-.8 7.4.7 2.1 2.8 3.4 4.9 3.5 4.8.4 9.8-.5 14.4 1.1 5.4 2.1 10.2 6.4 12 12.1 1.2 3.8 1.6 8.1.4 11.9-2.1 7.4-4.7 14.7-6.1 22.3-.4 2.5-.8 5.1-.1 7.6.4 1.8 2 3.4 3.9 3.5 3.3.3 6.3-1.5 8.6-3.7 4.7-4.7 7.8-10.7 10-16.9 2.7-7.5 4.1-15.4 6.1-23.1 2.1-7.9 5.3-15.6 10.3-22.1 7.4-9.8 19.4-16.1 31.8-15.8 6.9.1 13.7 2.8 18.6 7.8 4.1 4.2 6.3 9.9 7.2 15.7 1.5 9.8-.3 20.1-4.8 29-6.2 12.2-18.9 20.9-32.6 22-2 .2-4.3.1-5.8 1.6-1.3 1.3-1.2 3.3-1 5 .5 4.6 2 9.3 5.1 12.9 3.6 3.7 9 6.3 14.3 5.1 6.1-1.3 11.3-5.2 15.6-9.4 4.1-4.1 7.7-8.7 11-13.5 4.6-6.6 7.4-14.2 10.2-21.6 2.7-7.3 5.2-14.7 9.7-21.1 3.6-5.4 8.3-10.1 13.9-13.5 6.2-3.9 13.6-5.9 21-5.5 2.3.1 4.9.2 6.8-1.2 1.7-1.3 2.3-3.6 2.3-5.7 0-3.8.4-7.5.7-11.3.5-5.9 1-11.8 1.8-17.6 1.7-14.6 4.7-29 8.6-43.1 2-7.1 4.6-14.3 9.1-20.3 1.9-2.7 4.2-5.3 7.2-6.9 2.9-1.7 6.6-1.6 9.7-.7 4 1.2 6.6 5 8.2 8.6 2.9 7.1 2.1 15 1.5 22.5-.8 11.8-3.6 23.4-6 35-2.1 10.2-3.8 20.5-5.7 30.7-2.6 14-5.1 28.1-7.7 42.1-2.2 11.5-4.7 23.2-3.3 35 .4 3.1.8 6.5 2.9 8.9 1.5 1.7 4 2.1 6 1.4 2.7-.9 4.6-3.3 6-5.7 3.3-5.6 6.2-11.5 9.1-17.4 4.2-8.2 8.4-16.7 9.8-25.9 2.2-14 3.7-28.2 5.7-42.3 1.6-10.5 3.4-21 5.1-31.4 2.1-13.1 4.5-26.1 8.2-38.8 1.8-6 4.2-11.9 8.4-16.6 3.8-3.8 8.3-6.5 13.3-7zM478 487.8c-2 .6-3.6 2.2-4.9 3.8-2.9 3.7-5.1 7.9-6.6 12.4-1.6 4.8-3.1 9.8-2.5 14.8.1 1.5 1.6 2.6 3 2.6 2.7.1 5.1-1.4 7.2-3 4.7-3.3 7.7-8.4 9.8-13.6 1.3-3.3 2.2-6.9 1.9-10.5-.2-2.4-1.4-4.9-3.5-6.1-1.3-.8-3-.9-4.4-.4zm85.7 11.2c-5.6 1-10.6 4.3-14.2 8.7-3.9 4.7-6.6 10.4-8 16.4-2.1 8.5-2.3 17.5 0 26 .7 2.6 1.9 5.2 3.9 7.1 1.3 1.3 3.1 2 4.9 2.1 4.7.7 9.1-1.9 12.7-4.6 4.5-3.3 7.4-8.2 9.2-13.4 1.1-3.2.4-6.6.1-9.9-.5-6.7-.5-13.4-.1-20.1.1-2.3.8-4.5.8-6.8 0-1.8-.7-3.8-2.4-4.8-2.1-1.3-4.6-1.1-6.9-.7zm133.7 119.6c-4.8.3-9.6 1.3-14.1 3.2-4.9 2-9.1 5.7-11.2 10.5-1.4 3-2 6.6-.5 9.6 1.5 3.1 4.3 5.4 7.4 6.8 4.3 1.9 9.1 2.2 13.6 1.7 14.2-1.6 27.7-8.9 36.7-20 1.8-2.2 3.2-4.7 4.7-7.1.4-.8 1-2.1.1-2.8-1.1-.8-2.5-.5-3.7-.5-5.1-.3-10.2-.8-15.3-1-5.9-.3-11.8-.8-17.7-.4z" 
   fill="#fff"/>
</svg>

</a>
                    {/**LinkedIn */}
                    <a className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400" 
                    href="https://www.linkedin.com/in/ingila-ejaz/" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                            className="w-10 h-10" viewBox="0 0 192 192">
                            {
                                <g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none">
                                    <path d="M0,192v-192h192v192z" fill="none"></path>
                                    <g fill="#0072B1"><g id="surface1">
                                        <path d="M156,0h-120c-19.875,0 -36,16.125 -36,36v120c0,19.875 16.125,36 36,36h120c19.875,0 36,-16.125 36,-36v-120c0,-19.875 -16.125,-36 -36,-36zM59.36539,162.98077h-29.82693l-0.17307,-89.30769h29.82692zM43.70192,61.99038h-0.17308c-9.75,0 -16.03846,-6.72115 -16.03846,-15.08653c0,-8.56731 6.49039,-15.0577 16.41347,-15.0577c9.92308,0 16.00961,6.49038 16.21153,15.0577c0,8.36538 -6.31731,15.08653 -16.41346,15.08653zM162.77885,162.98077h-30.08654v-48.51923c0,-11.74039 -3.11538,-19.73077 -13.61538,-19.73077c-8.01923,0 -12.34615,5.39423 -14.42308,10.61538c-0.77885,1.875 -0.98077,4.44231 -0.98077,7.06731v50.56731h-30.23077l-0.17308,-89.30769h30.23077l0.17308,12.60577c3.86538,-5.97116 10.29808,-14.42308 25.70192,-14.42308c19.09616,0 33.37501,12.46154 33.37501,39.25961v51.86539z"></path>
                                    </g>
                                    </g>
                                </g>
                            }
                        </svg>


                    </a>
                    {/**Stack Overflow */}            
                    <a href = 'https://stackoverflow.com/users/3202144/ingila-ejaz' target = "_blank" className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-10 h-10"><path d="M28.16 32H2.475V20.58H5.32v8.575h19.956V20.58h2.884z" fill="#bcbbbb" /><path d="M8.477 19.8l13.993 2.923.585-2.806-13.993-2.923zm1.832-6.704l12.94 6.04 1.208-2.572-12.94-6.08zm3.586-6.353l10.99 9.12 1.832-2.183-10.99-9.12zM20.99 0l-2.3 1.715 8.536 11.46 2.3-1.715zM8.166 26.27H22.43v-2.845H8.166v2.845z" fill="#f48024" /></svg>
                    </a>

                    {/**GitHub */}            
                    <a href = 'https://github.com/Ingila185' target = "_blank" className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-10 w-10"
                            fill="currentColor light:black"
                            viewBox="0 0 24 24">
                            <path
                                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>


                    </a>

                    {/**Xing */}            

                    <a href = 'https://xing.com/profile/Ingila_Ejaz/' target = "_blank" className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" viewBox="0 0 384 512" fill="#6fff0f"><path d="M162.7 210c-1.8 3.3-25.2 44.4-70.1 123.5-4.9 8.3-10.8 12.5-17.7 12.5H9.8c-7.7 0-12.1-7.5-8.5-14.4l69-121.3c.2 0 .2-.1 0-.3l-43.9-75.6c-4.3-7.8.3-14.1 8.5-14.1H100c7.3 0 13.3 4.1 18 12.2l44.7 77.5zM382.6 46.1l-144 253v.3L330.2 466c3.9 7.1.2 14.1-8.5 14.1h-65.2c-7.6 0-13.6-4-18-12.2l-92.4-168.5c3.3-5.8 51.5-90.8 144.8-255.2 4.6-8.1 10.4-12.2 17.5-12.2h65.7c8 0 12.3 6.7 8.5 14.1z" /></svg>
                    </a>
                    {/**Discord */}            
                    <a href="#" className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" className="w-10 h-10 "
                            textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd"
                            viewBox="0 0 512 388.049"><path fill="#5865F2" fillRule="nonzero"
                                d="M433.713 32.491A424.231 424.231 0 00328.061.005c-4.953 8.873-9.488 18.156-13.492 27.509a393.937 393.937 0 00-58.629-4.408c-19.594 0-39.284 1.489-58.637 4.37-3.952-9.33-8.543-18.581-13.525-27.476-36.435 6.212-72.045 17.196-105.676 32.555-66.867 98.92-84.988 195.368-75.928 290.446a425.967 425.967 0 00129.563 65.03c10.447-14.103 19.806-29.116 27.752-44.74a273.827 273.827 0 01-43.716-20.862c3.665-2.658 7.249-5.396 10.712-8.055 40.496 19.019 84.745 28.94 129.514 28.94 44.77 0 89.019-9.921 129.517-28.943 3.504 2.86 7.088 5.598 10.712 8.055a275.576 275.576 0 01-43.796 20.918 311.49 311.49 0 0027.752 44.705 424.235 424.235 0 00129.65-65.019l-.011.011c10.632-110.26-18.162-205.822-76.11-290.55zM170.948 264.529c-25.249 0-46.11-22.914-46.11-51.104 0-28.189 20.135-51.304 46.029-51.304 25.895 0 46.592 23.115 46.15 51.304-.443 28.19-20.336 51.104-46.069 51.104zm170.102 0c-25.29 0-46.069-22.914-46.069-51.104 0-28.189 20.135-51.304 46.069-51.304s46.472 23.115 46.029 51.304c-.443 28.19-20.296 51.104-46.029 51.104z" />
                        </svg>
                    </a>
                </div>
                <p className="mb-8 text-lg font-normal  lg:text-xl sm:px-16 lg:px-48">
                    I am also a Web3.0 enthusiast and participating in a Hackathon called 
                   <a className="text-blue-500" href = "https://constellation-hackathon.devpost.com/" target = "_blank">
                         Constellation</a>. Here's what we are developing <a className="text-blue-500" target = "_blank" href = "https://devpost.com/software/bridge-hop">
                            Bridge Hop
                            </a></p>
                
            </div>
        </section>

    )
}