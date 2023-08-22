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

interface Rank {
  rank: number;
  name: string;
  color: string;
}

interface ChallengeWithRank extends CompletedChallenge {
  rank: Rank;
}

export default function Codewars({ username }: CodewarsProps) {
  const [completedChallenges, setCompletedChallenges] = useState<ChallengeWithRank[]>([]);

  useEffect(() => {
    // URL da API do CodeWars para obter os desafios completados
    const apiUrl = `https://www.codewars.com/api/v1/users/${username}/code-challenges/completed?page=0`;

    // Faz a solicitação à API
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        // Para cada desafio concluído, obter informações detalhadas do desafio
        const challengesWithRankPromises = data.data.map(async (challenge: CompletedChallenge) => {
          const challengeUrl = `https://www.codewars.com/api/v1/code-challenges/${challenge.id}`;
          const response = await fetch(challengeUrl);
          const challengeData = await response.json();
          return {
            ...challenge,
            rank: challengeData.rank,
          };
        });

        // Aguardar todas as requisições de informações detalhadas dos desafios
        Promise.all(challengesWithRankPromises)
          .then(challengesWithRank => {
            setCompletedChallenges(challengesWithRank);
          })
          .catch(error => {
            console.error('Erro ao buscar informações detalhadas dos desafios:', error);
          });
      })
      .catch(error => {
        console.error('Erro ao buscar desafios completados:', error);
      });
  }, [username]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <div className="completed-challenges">
      <div className="overflow-x-auto">
        <table className="min-w-full border">
          <thead>
            <tr className="bg-primary">
              {/* <th className="py-2 px-4">ID</th> */}
              <th className="py-2 px-4">Nome</th>
              <th className="py-2 px-4">Dificuldade</th>
              <th className="py-2 px-4">Linguagem</th>
              <th className="py-2 px-4">Concluído em</th>
            </tr>
          </thead>
          <tbody>
            {completedChallenges.map(challenge => (
              <tr key={challenge.id}>
                {/* <td className="py-2 px-4">{challenge.id}</td> */}
                <td className="py-2 px-4">{challenge.name}</td>
                <td className="py-2 px-4">{challenge.rank.name}</td>
                <td className="py-2 px-4">{challenge.completedLanguages.join(', ')}</td>
                <td className="py-2 px-4">{formatDate(challenge.completedAt)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
