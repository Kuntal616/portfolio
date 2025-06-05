'use client';

import Image from "next/image";

const Intro = () =>{
    return(
        <div className="flex gap-4 flex-col-reverse sm:flex-row justify-center items-center">
            <div className="flex flex-col gap-4 md:w-9/12 sm:w-full">
               <h1 className="text-4xl font-bold">Hi ! Kuntal Here 👋</h1> 
               <p className="text-sm text-gray-700 dark:text-gray-300">
               I&apos;m a<span className=" text-purple-700"> FullStack Web Developer</span>  with a strong foundation in HTML, CSS, and JavaScript. I also have experience working with frameworks like React, and I'm continuously expanding my knowledge in backend technologies.
               </p>
               <p className="text-sm  text-gray-600 dark:text-gray-400 flex items-center"><Image src="/images/placeholder.svg" alt="location-icon" height={16} width={16} className=" border-gray-100  dark:border-gray-800" />Kolkata,India.</p>
            </div>
            <div className="md:w-3/12 sm:w-full ">
                <Image src="/images/hero.png" alt="Kuntal" height={100} width={100} className=" rounded-full border border-gray-100  dark:border-gray-800 h-36 w-36" />
            </div>
            
        </div>
    )
}
export default Intro;
