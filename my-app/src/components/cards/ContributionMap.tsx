import React from 'react';
import 'react-calendar-heatmap/dist/styles.css';

interface ContributionMapProps {
  data: { date: Date; count: number }[];
}

const ContributionMap: React.FC<ContributionMapProps> = ({ data }) => {
  const getColorClass = (count: number) => {
    if (count === 0) return 'bg-gray-100';
    if (count <= 2) return 'bg-green-200';
    if (count <= 4) return 'bg-green-400';
    if (count <= 6) return 'bg-green-600';
    return 'bg-green-800';
  };

  const years = Array.from(new Set(data.map(item => item.date.getFullYear())));

  return (
    <div className="">
      <h2 className="text-lg font-semibold mb-4">Mapa de Contribuições</h2>
      {years.map(year => (
        <div key={year} className="mb-8">
          <h3 className="text-base font-semibold mb-2">{year}</h3>
          <div className="grid grid-cols-53 gap-1" style={{ gridTemplateColumns: 'repeat(53, 1fr)' }}>
            {Array.from({ length: 365 }, (_, index) => {
              const currentDate = new Date(year, 0, index + 1);
              const matchingData = data.find(item => item.date.toDateString() === currentDate.toDateString());
              return (
                <div
                  key={index}
                  className={`w-3 h-3 ${getColorClass(matchingData ? matchingData.count : 0)}`}
                  title={`${currentDate.toLocaleDateString()}\n${matchingData ? matchingData.count : 0} Contribuições`}
                />
              );
            })}
          </div>
          <div className="grid grid-cols-5 gap-4 mt-4">
            {/* Legenda de cores */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContributionMap;
