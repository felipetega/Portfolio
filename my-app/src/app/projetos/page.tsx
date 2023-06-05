//import LargeCard from "@/components/cards/LargeCard";
import SmallCard from "@/components/cards/SmallCard";
import CardSection from "@/components/cards/CardSection";

export default function page() {
  return (
    <div>

      <CardSection sectionName="Stack: TypeScript, NextJS, ReactJS, TailwindCSS">
        <SmallCard title="ToDoList" date="14/05/2023" description="CRUD completo" src="/todolist3.png" />
      </CardSection>

      <CardSection sectionName="Stack: Python, Django, Bootstrap">
      <SmallCard title="Tech SeuBoné" date="05/02/2023" description="Requisitos completos" src="/seubone.png"  />
        <SmallCard title="E-commerce" date="15/01/2023" description="Carrinho completo" src="/e-commerce.png"  />
        <SmallCard title="Seletive" date="04/12/2022" description="CRUD completo" src="/seletive.png"  />
      </CardSection>

      <CardSection sectionName="Stack: Python, Pandas">
        <SmallCard title="Progresso Codewars" date="17/07/2022" description="Gerador de gráfico" src="/codewars.png"  />
        <SmallCard title="Email & Report" date="10/07/2022" description="Ciência de Dados" src="/email.png"  />
      </CardSection>

      <CardSection sectionName="Stack: JavaScript">
        <SmallCard title="Jogo da Velha" date="18/09/2022" description="JavaScript puro" src="/velha.png"  />
        <SmallCard title="Cursos Realizados" date="12/06/2022" description="Gerador de gráfico" src="/cursos.png"  />
      </CardSection>

  </div>
  )
}
