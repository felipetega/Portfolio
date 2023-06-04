import React from 'react'
import Link from "next/link";
import ThemeButton from './ThemeButton';
import { AiFillLinkedin, AiFillGithub} from 'react-icons/ai';

const Navbar = () => {

  return (
    <nav className="navbar border-b-4 border-black mb-8 justify-between text-lg font-medium">

      <ul className="menu menu-horizontal px-1">
        <li><Link href={"/"}>Quem sou eu?</Link></li>
        <li><Link href={"/projetos"}>Projetos</Link></li>
        <li><Link href={"/"}>Skills</Link></li>
      </ul>

      <ul className="menu menu-horizontal px-1">

        <li>
          <Link href={"/"}>
            <AiFillLinkedin size={30}/>
          </Link>
        </li>

        <li>
          <Link href={"/"}>
            <AiFillGithub size={30}/>
          </Link>
        </li>

        <li>
          <ThemeButton />
        </li>
        
      </ul>
</nav>
  )
}

export default Navbar