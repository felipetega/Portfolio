import Image from "next/image";
import { 
  SiNextdotjs, SiReact, SiTypescript, SiTailwindcss, 
  SiPython, SiDjango, 
  SiCsharp, SiDotnet
 } from "react-icons/si";

export default function Home() {
  return (
    <div>
        <p className="text-xl font-medium ">Bem vindos ao meu</p>
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
    <Image className="card bg-black" src="/profile2.png" alt="me" height={400} width={300} />
  </div>

</div>



        <h2 className="text-2xl font-bold mb-2">Stack principal</h2>
        <div className="flex justify-evenly max-w-screen-lg mx-auto mb-20 p-8 border-4 border-double border-black border-t-white border-l-white">
          <SiNextdotjs size={40} />
          <SiReact size={40} />
          <SiTypescript size={40} />
          <SiTailwindcss size={40} />
        </div>

        <h2 className="text-2xl font-bold mb-2">Já usei</h2>
        <div className="flex justify-evenly mb-40">

          <div className="flex w-1/2 justify-evenly p-8 border-4 border-double border-black border-t-white border-l-white">
            <SiPython size={40}/>
            <SiDjango size={40}/>
          </div>

          <div className=" flex w-1/2 justify-evenly p-8 border-4 border-double border-black border-b-white border-r-white">
            <SiCsharp size={40}/>
            <SiDotnet size={40}/>
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
