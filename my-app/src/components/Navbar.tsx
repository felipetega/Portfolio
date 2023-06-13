import React from 'react'
import Link from "next/link";
import ThemeButton from './ThemeButton';
import { AiFillLinkedin, AiFillGithub} from 'react-icons/ai';
import DynamicIcon from "./DynamicIcon";

const Navbar = () => {

  return (
    <nav className="navbar border-b-2 border-primary mb-8 justify-between text-lg font-medium">

<ul className="menu menu-horizontal px-1">
  <li><Link href={"/"}>Principal</Link></li>
  <li><Link href={"/projetos"}>Projetos</Link></li>
  <li className="flex items-center">
  <a href="mailto:felipe.crema.ribeiro@gmail.com" target="_blank">Contato
    <span>
      <DynamicIcon />
    </span>
    </a>
  </li>
</ul>


      <ul className="menu menu-horizontal px-1">

        <li>
          <a href="https://www.linkedin.com/in/felipetega/" target="_blank">
            <AiFillLinkedin size={30} />
          </a>
        </li>

        <li>
          <a href="https://github.com/felipetega" target="_blank">
            <AiFillGithub size={30} />
          </a>
        </li>



        <li>
          <ThemeButton />
        </li>
        
      </ul>
</nav>
  )
}

export default Navbar