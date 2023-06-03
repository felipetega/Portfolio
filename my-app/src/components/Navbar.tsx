'use client'
import React from 'react'
import Link from "next/link";
import ThemeButton from './ThemeButton';
import { AiFillLinkedin, AiFillGithub, AiFillLike } from 'react-icons/ai';

const Navbar = () => {

  return (
    <nav className="navbar font-medium justify-between">

      <ul className="menu menu-horizontal px-1">
        <li><Link href={"/"}>Quem sou eu?</Link></li>
        <li><Link href={"/projetos"}>Projetos</Link></li>
        <li><Link href={"/"}>Skills</Link></li>
      </ul>

      <div className="menu menu-horizontal px-1">
          <Link href={"/"}>
            <AiFillLike size={30}/>
          </Link>
      </div>

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