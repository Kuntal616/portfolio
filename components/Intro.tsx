'use client';

import Image from "next/image";

const Intro = () =>{
    return(
        <div className="flex gap-4 flex-col-reverse sm:flex-row justify-center items-center">
            <div className="flex flex-col gap-4 md:w-9/12 sm:w-full">
               <h1 className="text-4xl font-bold">Hi! I'm Kuntal Sadhukhan.</h1> 
               <p className="text-sm text-gray-700 dark:text-gray-300">
               A passionate and enthusiastic web developer with a strong foundation in HTML, CSS, and JavaScript. I also have experience working with frameworks like React, and I'm continuously expanding my knowledge in backend technologies.
               I have a deep interest in building intuitive, responsive web applications.
                {/* Although I'm just starting out, */}
                 I'm eager to apply my skills in real-world projects and contribute to innovative solutions.This portfolio showcases some of the personal projects and exercises I've worked on, reflecting my journey as I grow in this exciting field.
               </p>
            </div>
            <div className="md:w-3/12 sm:w-full ">
                <Image src="/images/hero.png" alt="Kuntal" height={100} width={100} className=" rounded-full border border-gray-100 h-36 w-36" />
            </div>
            
        </div>
    )
}
export default Intro;