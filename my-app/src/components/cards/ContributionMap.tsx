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

  const lastCompletedDate = data.reduce((latestDate, item) => {
    if (item.date > latestDate) {
      return item.date;
    }
    return latestDate;
  }, new Date(2022, 5, 22)); // Defina uma data de início padrão

  // Criar um array de datas para representar todos os dias do ano
  const startDate = new Date(2022, 5, 22);
  const endDate = lastCompletedDate;
  const allDays = [];
  let currentDate = startDate;
  while (currentDate <= endDate) {
    allDays.push(new Date(currentDate));
    currentDate.setDate(currentDate.getDate() + 1);
  }

  // Combinar as informações de contribuições com todas as datas
  const combinedData = allDays.map(date => {
    const matchingData = data.find(item => item.date.toDateString() === date.toDateString());
    return {
      date,
      count: matchingData ? matchingData.count : 0,
    };
  });

  return (
    <div className="">
      <h2 className="text-lg font-semibold mb-4">Mapa de Contribuições</h2>
      <div className="grid grid-cols-53 gap-1" style={{ gridTemplateColumns: 'repeat(53, 1fr)' }}>
        {combinedData.map((item, index) => (
          <div
            key={index}
            className={`w-4 h-4 ${getColorClass(item.count)}`}
            title={`${item.date.toLocaleDateString()}\n${item.count} Contribuições`}
          />
        ))}
      </div>
      <div className="grid grid-cols-5 gap-4 mt-4">
        <div className="flex items-center">
          <div className="w-4 h-4 bg-gray-100 rounded-full mr-2" />
          <span>Nenhum</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-green-200 rounded-full mr-2" />
          <span>1-2 Contribuições</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-green-400 rounded-full mr-2" />
          <span>3-4 Contribuições</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-green-600 rounded-full mr-2" />
          <span>5-6 Contribuições</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-green-800 rounded-full mr-2" />
          <span>7+ Contribuições</span>
        </div>
      </div>
    </div>
  );
};

export default ContributionMap;
