import Image from "next/image";
import { 
  SiNextdotjs, SiReact, SiTypescript, SiTailwindcss, 
  SiPython, SiDjango, 
  SiCsharp, SiDotnet
 } from "react-icons/si";

export default function Home() {
  return (
    <div className="">
        <p className="text-xl font-medium">Bem vindos ao meu</p>
        <h1 className="text-6xl font-black mb-10">Portfólio</h1>
        <h2 className="text-2xl font-bold mb-10">Sobre mim</h2>
<div className="flex flex-wrap items-center justify-evenly mb-40">


  <div className="mb-10">
    <p className="text-xl font-medium mb-2">Desenvolvedor Web FullStack</p>
    <p className="text-xl font-medium mb-2">Focado nas melhores tecnologias de desenvolvimento</p>
    <p className="text-xl font-medium mb-2">Apaixonado por desafios de código</p>
    <p className="text-xl font-medium mb-2">Buscando oportunidades para atuar na área</p>
  </div>

  <div>
    <Image className="card bg-primary hover:translate-y-[-5px] transition-transform duration-300" src="/profile.png" alt="me" height={400} width={300} />
  </div>

</div>



        <h2 className="text-2xl font-bold mb-2">Stack principal</h2>
        <div className="flex justify-evenly max-w-screen-lg mx-auto mb-20 p-8 border-4 border-double border-secondary border-t-primary border-l-primary">
          <SiNextdotjs size={50} className="hover:translate-y-[-5px] transition-transform duration-300" />
          <SiReact size={50} className="hover:translate-y-[-5px] transition-transform duration-300" />
          <SiTypescript size={50} className="hover:translate-y-[-5px] transition-transform duration-300" />
          <SiTailwindcss size={50} className="hover:translate-y-[-5px] transition-transform duration-300" />
        </div>

        <h2 className="text-2xl font-bold mb-2">Já usei</h2>
        <div className="flex justify-evenly mb-40">

          <div className="flex w-1/2 justify-evenly p-8 border-4 border-double border-secondary border-t-primary border-l-primary">
            <SiPython size={50} className="hover:translate-y-[-5px] transition-transform duration-300"/>
            <SiDjango size={50} className="hover:translate-y-[-5px] transition-transform duration-300"/>
          </div>

          <div className=" flex w-1/2 justify-evenly p-8 border-4 border-double border-secondary border-b-primary border-r-primary">
            <SiCsharp size={50} className="hover:translate-y-[-5px] transition-transform duration-300"/>
            <SiDotnet size={50} className="hover:translate-y-[-5px] transition-transform duration-300"/>
          </div>

        </div>

        <div>

          <p className="text-xl font-medium mb-2">FATEC</p>
          
          <p className="text-xl font-medium mb-2">Digital Innovation One</p>

          <p className="text-xl font-medium mb-2">Curso em vídeo</p>

        </div>

    </div>
  )
}
