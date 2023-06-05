import React from 'react';

interface CardSectionProps {
  children: React.ReactNode;
  sectionName: string;
}

const CardSection = ({ children, sectionName }: CardSectionProps) => {
  return (
    <section>
        <h2 className='text-xl font-black'>{sectionName}</h2>
        <div className="flex flex-col w-full md:flex-row items-center">
            {children}
        </div>
    </section>
  );
}

export default CardSection;
