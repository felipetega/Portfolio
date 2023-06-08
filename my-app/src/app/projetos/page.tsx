//import LargeCard from "@/components/cards/LargeCard";
import SmallCard from "@/components/cards/SmallCard";
import CardSection from "@/components/cards/CardSection";
import 
{ 
  SiNextdotjs, SiTypescript, SiReact, SiTailwindcss,
  SiDjango, SiPython, SiBootstrap,
  SiPandas,
  SiJavascript, SiHtml5, SiCss3
} from 'react-icons/si';


export default function page() {

  const nextjs = [SiNextdotjs, SiTypescript, SiReact, SiTailwindcss];
  const django = [SiDjango, SiPython, SiBootstrap]
  const pandas = [SiPython, SiPandas]
  const javascript = [SiJavascript, SiHtml5, SiCss3]
  
  return (
    <div>
      <h1 className="text-4xl font-black mb-10">Projetos - Cronologia</h1>

      <CardSection sectionName="Stack: TypeScript, NextJS, ReactJS, TailwindCSS">
        <SmallCard title="ToDoList" date="14/05/2023" description="CRUD completo" src="/todolist3.png" stack={nextjs}/>
      </CardSection>

      <CardSection sectionName="Stack: Python, Django, Bootstrap">
        <SmallCard title="Tech SeuBoné" date="05/02/2023" description="Requisitos completos" src="/seubone.png" stack={django}  />
        <SmallCard title="E-commerce" date="15/01/2023" description="Carrinho completo" src="/e-commerce.png" stack={django}  />
        <SmallCard title="Seletive" date="04/12/2022" description="CRUD completo" src="/seletive.png" stack={django}  />
      </CardSection>

      <CardSection sectionName="Stack: Python, Pandas">
        <SmallCard title="Progresso Codewars" date="17/07/2022" description="Gerador de gráfico" src="/codewars.png" stack={pandas}  />
        <SmallCard title="Email & Report" date="10/07/2022" description="Ciência de Dados" src="/email.png" stack={pandas}  />
      </CardSection>

      <CardSection sectionName="Stack: JavaScript">
        <SmallCard title="Jogo da Velha" date="18/09/2022" description="Jogo" src="/velha.png" stack={javascript}  />
        <SmallCard title="Cursos Realizados" date="12/06/2022" description="Gerador de gráfico" src="/cursos.png" stack={javascript}  />
      </CardSection>

  </div>
  )
}
