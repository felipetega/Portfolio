'use client'
import React, { useState, useEffect } from 'react';
import ThemeButton from './ThemeButton';
import NavbarLinkedin from "./NavbarLinkedin";
import NavbarGithub from "./NavbarGithub";
import Modal from './Modal';
import { AiOutlineMenu } from "react-icons/ai";

export const Menu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
    setModalOpen(!isModalOpen);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 576); // Define o tamanho de tela para "sm" quando a largura é menor que 576 pixels (pode ajustar esse valor conforme necessário)
    };

    // Verifica o tamanho da tela quando o componente é montado
    checkScreenSize();

    // Adiciona um listener para atualizar o tamanho da tela quando ela for alterada
    window.addEventListener('resize', checkScreenSize);

    // Remove o listener quando o componente é desmontado
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  if (isSmallScreen) {
    return (
      <div>
        <div className="menu-icon" onClick={toggleMenu}>
          <AiOutlineMenu size={30}/>
        </div>

        <Modal modalOpen={isModalOpen} setModalOpen={setModalOpen}>
          {/* Conteúdo do modal */}
          <ul className="menu menu-horizontal mt-5">
            <NavbarLinkedin />
            <NavbarGithub />
            <li>
              <ThemeButton />
            </li>
          </ul>
        </Modal>
      </div>
    );
  } else {
    return (
      <ul className="menu menu-horizontal">
        <NavbarLinkedin />
        <NavbarGithub />
        <li>
          <ThemeButton />
        </li>
      </ul>
    );
  }
};
