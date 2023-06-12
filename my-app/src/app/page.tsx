import Image from "next/image";
import EducationCard from "../components/EducationCard";
import { 
  SiNextdotjs, SiReact, SiTypescript, SiTailwindcss, 
  SiPython, SiDjango, 
  SiCsharp, SiDotnet
 } from "react-icons/si";
import AboutMe from "@/components/AboutMe";

export default function Home() {
  return (
    <div className="">
        <p className="text-xl font-medium">Bem vindos ao meu</p>
        <h1 className="text-6xl font-black mb-10">Portfólio</h1>
        <h2 className="text-2xl font-bold mb-10">Sobre mim</h2>
<div className="flex flex-wrap items-center justify-evenly mb-40">


    <AboutMe/>

  <div>
    <Image className="card bg-primary hover:translate-y-[-5px] transition-transform duration-300" src="/profile.png" alt="me" height={400} width={300} />
  </div>

</div>



        <h2 className="text-2xl font-bold mb-2">Stack principal</h2>
        <div className="flex justify-evenly max-w-screen-lg mx-auto mb-20 p-8 border-4 border-double border-secondary border-t-primary border-l-primary">
          <div className="tooltip" data-tip="NextJS">
            <SiNextdotjs size={50} className="hover:translate-y-[-5px] transition-transform duration-300" />
          </div>
          <div className="tooltip" data-tip="ReactJS">
          <SiReact size={50} className="hover:translate-y-[-5px] transition-transform duration-300" />
          </div>
          <div className="tooltip" data-tip="Typescript">
          <SiTypescript size={50} className="hover:translate-y-[-5px] transition-transform duration-300" />
          </div>
          <div className="tooltip" data-tip="TailwindCSS">
          <SiTailwindcss size={50} className="hover:translate-y-[-5px] transition-transform duration-300" />
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-2">Já usei</h2>
        <div className="flex justify-evenly mb-40">

          <div className="flex w-1/2 justify-evenly p-8 border-4 border-double border-secondary border-t-primary border-l-primary">
          <div className="tooltip" data-tip="Python">
            <SiPython size={50} className="hover:translate-y-[-5px] transition-transform duration-300"/>
            </div>
            <div className="tooltip" data-tip="Django">
            <SiDjango size={50} className="hover:translate-y-[-5px] transition-transform duration-300"/>
            </div>
          </div>

          <div className=" flex w-1/2 justify-evenly p-8 border-4 border-double border-secondary border-b-primary border-r-primary">
          <div className="tooltip" data-tip="C#">
            <SiCsharp size={50} className="hover:translate-y-[-5px] transition-transform duration-300"/>
            </div>
            <div className="tooltip" data-tip="ASP .NET CORE">
            <SiDotnet size={50} className="hover:translate-y-[-5px] transition-transform duration-300"/>
            </div>
          </div>

        </div>
        <h2 className="text-2xl font-bold mb-4">Cursos</h2>
        <EducationCard title="Fatec" date="08/2022 - atual"/>
        <EducationCard title="Digital Innovation One" date="04/2022 - 06/2022"/>
        <EducationCard title="Curso em Vídeo" date="03/2022 - 05/2022"/>

    </div>
  )
}
