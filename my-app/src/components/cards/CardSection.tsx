import React from 'react';

interface CardSectionProps {
  children: React.ReactNode;
}

const CardSection = ({ children }: CardSectionProps) => {
  return (
    <section className="flex flex-col w-full md:flex-row items-center">
        {children}
    </section>
  );
}

export default CardSection;
