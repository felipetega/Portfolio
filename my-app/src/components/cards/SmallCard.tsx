'use client'

import React from 'react';
import Image from 'next/image';
import Modal from '../Modal';


interface SmallCardProps {
  src: string;
  title: string;
  description: string;
  date: string;
}

export default function SmallCard({ src, title, description, date }: SmallCardProps) {

  const [modalOpen, setModalOpen] = React.useState(false);

  const modalContent = (
    <div>
      <h2 className="card-title font-black mb-2">Deseja ir para o repositório?</h2>
      <p className="font-black">{title}</p>
      <p className="font-bold">{date}</p>
      <p className="font-bold">{description}</p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary">Ir para o GitHub</button>
      </div>
    </div>
  );
  


  return (
    <div className="card bg-base-100 shadow-xl image-full mx-2 my-8 w-full hover:translate-y-[-5px] transition-transform duration-300 border-2 border-secondary">
      <figure className='card'>
        <Image src={src} alt="me" fill sizes="(max-width: 768px) 100vw" />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-black">{title}</h2>
        <p className="font-bold">{date}</p>
        <p className="font-bold">{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary" onClick={() => setModalOpen(true)}>Ver repositório</button>
        </div>
      </div>
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        {modalContent}
      </Modal>
    </div>
  );
  
}
