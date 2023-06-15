'use client'
import React, { useState } from 'react';
import Modal from './Modal';
import DynamicIcon from './DynamicIcon';

const NavbarContact = () => {
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
          Contato
          <DynamicIcon />
        </span>
      </li>

      {modalOpen && (
        <Modal modalOpen={modalOpen} setModalOpen={handleModalClose}>
          {/* Conteúdo do modal */}
          <h1 className='mb-4 font-bold'>Deseja abrir uma aba de e-mail?</h1>
          <a href="mailto:felipe.crema.ribeiro@gmail.com" target="_blank">
            <button
              className="btn btn-primary text-xs px-2 py-1"
              onClick={handleModalClose}
            >
              Ir para e-mail
            </button>
          </a>
        </Modal>
      )}
    </>
  );
};

export default NavbarContact;
