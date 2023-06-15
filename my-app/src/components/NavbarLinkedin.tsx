'use client'
import React, { useState } from 'react';
import Modal from './Modal';
import { AiFillLinkedin} from 'react-icons/ai';

const NavbarLinkedin = () => {
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
                <AiFillLinkedin size={30} />
            </span>
        </li>

      {modalOpen && (
        <Modal modalOpen={modalOpen} setModalOpen={handleModalClose}>
          {/* Conteúdo do modal */}
          <h1 className='mb-4 font-bold'>Deseja abrir meu perfil do Linkedin?</h1>
          <a href="https://www.linkedin.com/in/felipetega/" target="_blank">
          <button className="btn btn-primary text-xs px-2 py-1"
          onClick={handleModalClose}>
            Ir para LinkedIn
          </button>
        </a>
        </Modal>
      )}
    </>
  );
};

export default NavbarLinkedin;
