import Link from "next/link";


export default function ContactMe(){
    return (
    
         <div className="flex flex-col gap-4 mb-20">
         <h1 className="text-2xl font-bold">Contact Me</h1>
         <p className="text-sm text-gray-500 dark:text-gray-200">
           Want to chat? Just shoot me a dm on email me directly at {" "}
           <Link
            href="mailto:kuntalsadhukhan175@gmail.com"
             className="text-blue-500"
           > kuntalsadhukhan175@gmail.com
           </Link>
         </p>
       </div>
    )
}