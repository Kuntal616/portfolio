import Link from "next/link";
import { Button } from "./ui/button";

interface project{
title:string;
description:string;
link:string;
code:string;
technologies:string[];

}

const projectsData:project[] = [
    {
      title: "Financefy",
      description:
        "Financefy is a platform that allows users to manage their income and expenses.",
      link: "https://financefy-86d29.web.app/",
      code: "https://github.com/Kuntal616/Financefy",
    //   previewVideo: "/videos/FormVibeProjectPreview.mp4",
      technologies: [
        "React",
        "Firebase",
        "JavaScript",
        "CSS"
      ],
    },
    {
      title: "QR Code Generator",
      description:
        "It is tools for creating qr code from any Text and any Url",
      link: "https://kuntal616.github.io/qrCodeGenerator/",
      code: "https://github.com/Kuntal616/qrCodeGenerator",
    //   previewVideo: "/videos/EmojiGitPreview.mp4",
      technologies: ["JavaScript", "HTML","CSS"],
    },
    {
      title: "Password-Generator",
      description:
        "It is a platform that allows users to create with specific customize option for strong passwords for their accounts.",
      link: "https://password-generator-silk-one.vercel.app/",
      code: "https://github.com/Kuntal616/passwordGenerator",
    //   previewVideo: "/videos/CloudSpacePreview.mp4",
      technologies: [
        "React",
        "JavaScript",
        "Tailwind CSS",
      ],
    },
    {
      title: "WeatherWeb",
      description:
        "It is a platform that allows users to check their location's weather.",
      link: "https://kuntal616.github.io/weatherWeb/",
      code: "https://github.com/Kuntal616/weatherWeb",
    //   previewVideo: "/videos/CloudSpacePreview.mp4",
      technologies: [
        "JavaScript", "HTML","CSS"
      ],
    },
  ];



export default function Projects(){
    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold">Projects</h1>
            <div className="grid md:grid-cols-2 gap-4 sm:grid-cols-1">
                {
                    projectsData.map((item,index)=>(
                        <div className="flex flex-col border border-gray-100 dark:border-gray-800 rounded-md" key={index}>

                           {/* <video src={item.previewVideo} autoPlay muted  className="w-full h-full rounded-t-md" /> */}
                           <div className="flex flex-col gap-3 p-4">
                            <h2 className="text-lg font-bold">{item.title}</h2>
                            <p className="text-sm text-gray-500">{item.description}</p>
                            <div className="flex gap-1 flex-wrap">
                                {item.technologies.map((tech,index)=>(
                                    <div key={index} className="flex border border-gray-200 dark:border-gray-800 bg-gray-200 rounded-md p-4 text-gray-800 px-2 py-1 text-sm">{tech}</div>
                                ))}
                            </div>
                            <div className="flex gap-2 mt-2">
                                <Link href={item.link}>
                                <Button variant="default">View</Button>
                                </Link>
                                <Link href={item.code}>
                                <Button variant="outline">Code</Button>
                                </Link>
                            </div>
                           </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}