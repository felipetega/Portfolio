import React from 'react';
import Image from 'next/image';

interface SmallCardProps {
  src: string;
  title: string;
  description: string;
  date: string;
}

export default function SmallCard({ src, title, description, date }: SmallCardProps) {
  return (
    <div className="card bg-base-100 shadow-xl image-full mx-2 my-8 w-full">
      <figure>
        <Image className='card' src={src} alt="me" fill={true} />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-black">{title}</h2>
        <p className='font-bold'>{date}</p>
        <p className='font-bold'>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Ver Repositório</button>
        </div>
      </div>
    </div>
  );
}
