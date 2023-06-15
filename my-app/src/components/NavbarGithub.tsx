'use client'
import React, { useState } from 'react';
import Modal from './Modal';
import { AiFillGithub } from 'react-icons/ai';

const NavbarGithub = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <>
      <li className="flex items-center" onClick={handleModalOpen}>
            <span>
                <AiFillGithub size={30} />
            </span>
        </li>

      {modalOpen && (
        <Modal modalOpen={modalOpen} setModalOpen={handleModalClose}>
          {/* Conteúdo do modal */}
          <h1 className='font-bold'>Deseja abrir meu perfil do Github?</h1>
          <a href="https://github.com/felipetega" target="_blank">
          <button className="btn btn-primary text-xs"
          >
            Ir para Github
          </button>
        </a>
        </Modal>
      )}
    </>
  );
};

export default NavbarGithub;
