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

  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('felipe.crema.ribeiro@gmail.com');
    setIsCopied(true);
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
          <h1 className='mb-4 font-bold'>felipe.crema.ribeiro@gmail.com</h1>
          <div className='flex justify-between'>
          <button className="btn btn-primary text-xs px-2 py-1" onClick={handleCopy}>{isCopied ? 'E-mail copiado!' : 'Copiar e-mail'}</button>
          <a href="mailto:felipe.crema.ribeiro@gmail.com" target="_blank">
            <button
              className="btn btn-primary text-xs px-2 py-1"
              onClick={handleModalClose}
            >
              Abrir app e-mail
            </button>
          </a>
            </div>
        </Modal>
      )}
    </>
  );
};

export default NavbarContact;
