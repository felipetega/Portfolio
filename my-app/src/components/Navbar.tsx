'use client'
import React from 'react'
import Link from "next/link";
import ThemeButton from './ThemeButton';

const Navbar = () => {

  return (
    <nav className="navbar bg-neutral">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><Link href={"/"}>Quem sou eu?</Link></li>
      <li><Link href={"/projetos"}>Projetos</Link></li>
      <li>
        <ThemeButton />
      </li>
    </ul>
  </div>
</nav>
  )
}

export default Navbar