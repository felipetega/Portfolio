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
    <div className="card bg-base-100 shadow-xl image-full mx-2 my-8 w-full hover:translate-y-[-5px] transition-transform duration-300 border-2 border-secondary">
      <div className="card-body">
        <div className="completed-challenges">
          <h3>Desafios Concluídos:</h3>
          <ul>
            {completedChallenges.map(challenge => (
              <li key={challenge.id}>
                <p>{challenge.name}</p>
                <p>Concluído em: {challenge.completedAt}</p>
                <p>Linguagens: {challenge.completedLanguages.join(', ')}</p>
              </li>
            ))}
          </ul>
        </div>
        {/* Resto do código do componente */}
      </div>
    </div>
  );
}
