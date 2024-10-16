"use client";
interface EducationItem {
  startDate: string;
  endDate?: string;
  collegeName?: string;
  schoolName?: string;
  address?: string;
  courseName: string;
}

const EducationData: EducationItem[] = [
  {
    startDate: "July 2022",
    endDate: "June 2026",
    collegeName: "Government College of Engineering And Ceramic Technology",
    courseName: "BTech. in Information Technology ",
    address: "Kolkata, West Bengal",
  },
  {
    startDate: "2019",
    endDate: "2021",
    schoolName: "Krishnagar Collegiate School",
    address: "Krishnagar,West Bengal",
    courseName: "Higher Secondary (12th) ",
  },
  {
    startDate: "2013",
    endDate: "2019",
    schoolName: "Bhaluka High School(H.S.) ",
    address: "Bhaluka,Nadia,West Bengal",
    courseName: "Secondary (10th)",
  },
];
export default function Education() {
  return (
    <div className="flex flex-col gap-4 w-full -z-10">
      <h1 className="text-2xl font-bold">Education</h1>
      
        <div className="p-2">
          <ol className="relative border-s border-gray-200 dark:border-gray-700">
            {EducationData.map((item, index) => (
              <li
                key={index}
                className={`mb-10 ms-4 ${
                  index === EducationData.length - 1 ? "mb-0" : ""
                }`}
              >
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-400">
                  {item.startDate} - {item.endDate || "Present"}
                </time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  {item.courseName} at{" "}
                  {item.collegeName ? item.collegeName : item.schoolName}
                </h3>
                <p className=" text-gray-700 dark:text-gray-300">
                  {item.address}
                </p>
              </li>
            ))}
          </ol>
        </div>
     
    </div>
  );
}
