import ContactMe from "@/components/ContactMe";
import  CustomDock  from "@/components/CustomDock";
import Education from "@/components/Education";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import Skill from "@/components/Skills";
import Meteors from "@/components/ui/meteors";

export default function Home() {
  return (
    <div className=" relative  lg:w-8/12 md:w-7/12 sm:w-full mx-auto items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] overflow-hidden">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full overflow-hidden">
        <Meteors />
        <Intro />
        <Education />
        <Skill />
        <Projects />
        <ContactMe />
        
      </main>
      <CustomDock orientation="vertical"/>
    </div>
  );
}
