import React from 'react';

interface EducationCardProps {
  title: string;
  date: string;
}

const EducationCard: React.FC<EducationCardProps> = (props) => {
  const { title, date } = props;

  return (
    <div className="card w-full bg-base-100 shadow-xl mb-4 hover:translate-y-[-5px] transition-transform duration-300">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{date}</p>
        {/* <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div> */}
      </div>
    </div>
  );
};

export default EducationCard;
