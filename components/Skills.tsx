const skillsData:string[] = [
    "React",
    "Tailwind CSS",
    "JavaScript",
    "HTML",
    "CSS",
    "Git",
    "GitHub",
    "Node.js",
    "Express",
    "MongoDB",
    "Java"
  ];

export default function Skill (){
    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold">Skills</h1>
            <div className="flex flex-wrap gap-3">
            {
                skillsData.map((skill,index)=>(
                    <div key={index} className="flex border border-gray-200 dark:border-gray-800 bg-gray-500 rounded-md p-4 text-white px-2 py-1 text-sm">
                        {skill}
                    </div>
                ))
            }
            </div>
        </div>
        
    )
}