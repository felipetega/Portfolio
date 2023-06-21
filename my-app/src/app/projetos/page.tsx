//import LargeCard from "@/components/cards/LargeCard";
import SmallCard from "@/components/cards/SmallCard";
import CardSection from "@/components/cards/CardSection";

import 
{ 
  SiNextdotjs, SiTypescript, SiReact, SiTailwindcss,
  SiDjango, SiPython, SiBootstrap,
  SiPandas,
  SiJavascript, SiHtml5, SiCss3,
  SiDotnet, SiCsharp
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

  const dotnetStack = () => (
    <>
      <div className="tooltip" data-tip="ASP .NET CORE">
        <SiDotnet size={30} fill="black" className="mx-2" />
      </div>
      <div className="tooltip" data-tip="C#">
        <SiCsharp size={30} fill="black" className="mx-2" />
      </div>
    </>
  );
  
  

  return (
    <div>
      <h1 className="text-4xl font-black mb-10">Projetos</h1>

      <CardSection>
        <SmallCard title="Portfolio" date="20/06/2023" description="Esse portfolio" src="/portfolio2.webp" stack={[nextJsStack]} siteUrl="" showSiteButton={false} repoUrl="https://github.com/felipetega/Portfolio" showInButton={true} inUrl="https://www.linkedin.com/feed/update/urn:li:activity:7076940187682971648/"/>
        <SmallCard title="App Cardápio" date="14/06/2023" description="Faculdade" src="/rangotop.webp" stack={[dotnetStack]} siteUrl="" showSiteButton={false} repoUrl="https://github.com/felipetega/ProjetoIntegrador-FATEC" showInButton={false} inUrl=""/>
        <SmallCard title="ToDoList" date="14/05/2023" description="Videoaula" src="/todolist3.webp" stack={[nextJsStack]} siteUrl="" showSiteButton={false} repoUrl="https://github.com/felipetega/ToDoList-NextJS" showInButton={true} inUrl="https://www.linkedin.com/feed/update/urn:li:activity:7069644328750526465/?updateEntityUrn=urn%3Ali%3Afs_updateV2%3A%28urn%3Ali%3Aactivity%3A7069644328750526465%2CFEED_DETAIL%2CEMPTY%2CDEFAULT%2Cfalse%29"/>
      </CardSection>

      <CardSection>
        <SmallCard title="Tech SeuBoné" date="05/02/2023" description="Processo seletivo" src="/seubone.webp" stack={[djangoStack]} siteUrl="" showSiteButton={false} repoUrl="https://github.com/felipetega/Processo-Seletivo-Tech" showInButton={false} inUrl=""/>
        <SmallCard title="E-commerce" date="15/01/2023" description="Processo seletivo" src="/e-commerce.webp" stack={[djangoStack]} siteUrl="" showSiteButton={false} repoUrl="https://github.com/felipetega/e-commerce" showInButton={true} inUrl="https://www.linkedin.com/feed/update/urn:li:activity:7020775918071652352/?updateEntityUrn=urn%3Ali%3Afs_updateV2%3A%28urn%3Ali%3Aactivity%3A7020775918071652352%2CFEED_DETAIL%2CEMPTY%2CDEFAULT%2Cfalse%29"/>
        <SmallCard title="Seletive" date="04/12/2022" description="Curso" src="/seletive.webp" stack={[djangoStack]} siteUrl="" showSiteButton={false} repoUrl="https://github.com/felipetega/GerenciadorDeProcessosSeletivos" showInButton={true} inUrl="https://www.linkedin.com/posts/felipetega_html-css-bootstrap-activity-7008087467245330435-k5hE?utm_source=share&utm_medium=member_desktop"/>
      </CardSection>

      <CardSection>
        <SmallCard title="Progresso Codewars" date="17/07/2022" description="Gerador de gráfico" src="/codewars.webp" stack={[pandasStack]} siteUrl="" showSiteButton={false} repoUrl="https://github.com/felipetega/ProgessoCodeWars" showInButton={false} inUrl=""/>
        <SmallCard title="Email & Report" date="10/07/2022" description="Curso" src="/email.webp" stack={[pandasStack]} siteUrl="" showSiteButton={false} repoUrl="https://github.com/felipetega/EmailAndReport" showInButton={false} inUrl=""/>
      </CardSection>

      <CardSection>
        <SmallCard title="Jogo da Velha" date="18/09/2022" description="Jogo" src="/velha.webp" stack={[javascriptStack]} siteUrl="https://felipetega.github.io/Jogo-Da-Velha/" showSiteButton={true} repoUrl="https://github.com/felipetega/Jogo-Da-Velha" showInButton={false} inUrl=""/>
        <SmallCard title="Cursos Realizados" date="12/06/2022" description="Gerador de gráfico" src="/cursos.webp" stack={[javascriptStack]} siteUrl="https://felipetega.github.io/CursosRealizados-CHART.JS/" showSiteButton={true} repoUrl="https://github.com/felipetega/CursosRealizados-CHART.JS" showInButton={false} inUrl=""/>
      </CardSection>
  </div>
  )
}
