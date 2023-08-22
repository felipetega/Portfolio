import React, { useState, useEffect } from 'react';

interface CompletedChallenge {
  id: string;
  name: string;
  completedAt: string;
  completedLanguages: string[];
}

interface CodewarsProps {
  username: string;
}

export default function Codewars({ username }: CodewarsProps) {
  const [completedChallenges, setCompletedChallenges] = useState<CompletedChallenge[]>([]);

  useEffect(() => {
    // URL da API do CodeWars para obter os desafios completados
    const apiUrl = `https://www.codewars.com/api/v1/users/${username}/code-challenges/completed?page=0`;

    // Faz a solicitação à API
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        setCompletedChallenges(data.data);
      })
      .catch(error => {
        console.error('Erro ao buscar desafios completados:', error);
      });
  }, [username]);

  return (
    <div className="completed-challenges">
      <h3 className="text-xl font-bold mb-2">Desafios Concluídos:</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full border">
          <thead>
            <tr className="bg-primary">
              {/* <th className="py-2 px-4">ID</th> */}
              <th className="py-2 px-4">Nome</th>
              <th className="py-2 px-4">Concluído em</th>
              <th className="py-2 px-4">Linguagem</th>
            </tr>
          </thead>
          <tbody>
            {completedChallenges.map(challenge => (
              <tr key={challenge.id}>
                {/* <td className="py-2 px-4">{challenge.id}</td> */}
                <td className="py-2 px-4">{challenge.name}</td>
                <td className="py-2 px-4">{challenge.completedAt}</td>
                <td className="py-2 px-4">{challenge.completedLanguages.join(', ')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
