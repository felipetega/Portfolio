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

  
  
  const nextJsStack = () => (
    <>
      <div className="tooltip" data-tip="NextJS">
        <SiNextdotjs size={30} fill="black" className="mx-2" />
      </div>
      <div className="tooltip" data-tip="Typescript">
        <SiTypescript size={30} fill="#007ACC" className="mx-2" />
      </div>
      <div className="tooltip" data-tip="ReactJS">
        <SiReact size={30} fill="#61DAFB" className="mx-2" />
      </div>
      <div className="tooltip" data-tip="TailwindCSS">
        <SiTailwindcss size={30} fill="#06B6D4" className="mx-2" />
      </div>
    </>
  );
  
  const djangoStack = () => (
    <>
      <div className="tooltip" data-tip="Django">
        <SiDjango size={30} fill="#092E20" className="mx-2" />
      </div>
      <div className="tooltip" data-tip="Python">
        <SiPython size={30} fill="black" className="mx-2" />
      </div>
      <div className="tooltip" data-tip="Bootstrap">
        <SiBootstrap size={30} fill="#7952B3" className="mx-2" />
      </div>
    </>
  );
  
  const pandasStack = () => (
    <>
      <div className="tooltip" data-tip="Python">
        <SiPython size={30} fill="black" className="mx-2" />
      </div>
      <div className="tooltip" data-tip="Pandas">
        <SiPandas size={30} fill="#150458" className="mx-2" />
      </div>
    </>
  );
  
  const javascriptStack = () => (
    <>
      <div className="tooltip" data-tip="Javascript">
        <SiJavascript size={30} fill="#F7DF1E" className="mx-2" />
      </div>
      <div className="tooltip" data-tip="HTML5">
        <SiHtml5 size={30} fill="#E34F26" className="mx-2" />
      </div>
      <div className="tooltip" data-tip="CSS3">
        <SiCss3 size={30} fill="#1572B6" className="mx-2" />
      </div>
    </>
  );
  
  

  return (
    <div>
      <h1 className="text-4xl font-black mb-10">Projetos</h1>

      <CardSection sectionName="">
        <SmallCard title="ToDoList" date="14/05/2023" description="CRUD completo" src="/todolist3.png" stack={[nextJsStack]} siteUrl="" showSiteButton={false}/>
      </CardSection>

      <CardSection sectionName="">
        <SmallCard title="Tech SeuBoné" date="05/02/2023" description="Requisitos completos" src="/seubone.png" stack={[djangoStack]} siteUrl="" showSiteButton={false}/>
        <SmallCard title="E-commerce" date="15/01/2023" description="Carrinho completo" src="/e-commerce.png" stack={[djangoStack]} siteUrl="" showSiteButton={false}/>
        <SmallCard title="Seletive" date="04/12/2022" description="CRUD completo" src="/seletive.png" stack={[djangoStack]} siteUrl="" showSiteButton={false}/>
      </CardSection>

      <CardSection sectionName="">
        <SmallCard title="Progresso Codewars" date="17/07/2022" description="Gerador de gráfico" src="/codewars.png" stack={[pandasStack]} siteUrl="" showSiteButton={false}/>
        <SmallCard title="Email & Report" date="10/07/2022" description="Ciência de Dados" src="/email.png" stack={[pandasStack]} siteUrl="" showSiteButton={false}/>
      </CardSection>

      <CardSection sectionName="">
        <SmallCard title="Jogo da Velha" date="18/09/2022" description="Jogo" src="/velha.png" stack={[javascriptStack]} siteUrl="https://felipetega.github.io/Jogo-Da-Velha/" showSiteButton={true}/>
        <SmallCard title="Cursos Realizados" date="12/06/2022" description="Gerador de gráfico" src="/cursos.png" stack={[javascriptStack]} siteUrl="https://felipetega.github.io/CursosRealizados-CHART.JS/" showSiteButton={true}/>
      </CardSection>

  </div>
  )
}
