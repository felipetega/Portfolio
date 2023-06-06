import Image from "next/image";
import { 
  SiNextdotjs, SiReact, SiTypescript, SiTailwindcss, 
  SiPython, SiDjango, 
  SiCsharp, SiDotnet
 } from "react-icons/si";

export default function Home() {
  return (
    <div>
      <div>
        <p className="text-lg font-bold">Bem vindos ao meu</p>
        <h1 className="text-2xl font-black">Portfólio</h1>
      </div>
        <div>
          <p>Desenvolvedor Web</p>
          <p>Focado nas melhores tecnologias de desenvolvimento</p>
          <p>Apaixonado por desafios de código</p>
        </div>

        <div>
          <SiNextdotjs/>
          <SiReact/>
          <SiTypescript/>
          <SiTailwindcss/>
        </div>

        <div>

          <div>
            <SiPython/>
            <SiDjango/>
          </div>

          <div>
            <SiCsharp/>
            <SiDotnet/>
          </div>

        </div>

        <div>

          <p>FATEC</p>
          
          <p>Digital Innovation One</p>

          <p>Curso em vídeo</p>

        </div>

    </div>
  )
}
