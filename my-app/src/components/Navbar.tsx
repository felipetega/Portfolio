import React from 'react'
import Link from "next/link";
import ThemeButton from './ThemeButton';
import { AiFillLinkedin, AiFillGithub} from 'react-icons/ai';
import DynamicIcon from "./DynamicIcon";
import NavbarContact from "./NavbarContact";
import NavbarLinkedin from "./NavbarLinkedin";
import NavbarGithub from "./NavbarGithub";
import {Menu} from "./Menu";

const Navbar = () => {

  return (
    <nav className="navbar border-b-2 border-primary mb-8 justify-between text-lg font-medium">

<ul className="menu menu-horizontal px-1">
  <li><Link href={"/"}>Principal</Link></li>
  <li><Link href={"/projetos"}>Projetos</Link></li>
  {/* <li><Link href={"/codewars"}>Estudos</Link></li> */}
  <NavbarContact/>
</ul>

  <Menu/>

</nav>
  )
}

export default Navbar