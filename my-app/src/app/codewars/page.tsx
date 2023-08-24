'use client'
import React, { useState, useEffect } from 'react';
import Codewars from "@/components/cards/Codewars";
import CardSection from "@/components/cards/CardSection";
import ContributionMap from "@/components/cards/ContributionMap";

interface UserInfo {
  username: string;
  name: string;
  honor: number;
  clan: string;
  leaderboardPosition: number;
  skills: string[];
  codeChallenges: {
    totalAuthored: number;
    totalCompleted: number;
  };
  ranks: {
    overall: {
      rank: number;
      name: string;
      color: string;
      score: number;
    };
  };
}

export default function Page() {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

  useEffect(() => {
    // URL da API do CodeWars para obter o perfil do usuário
    const apiUrl = 'https://www.codewars.com/api/v1/users/felipetega';

    // Faz a solicitação à API
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        setUserInfo(data);
      })
      .catch(error => {
        console.error('Erro ao buscar dados do CodeWars:', error);
      });
  }, []);

  return (
    <>
    <h1 className="text-6xl font-bold mt-10">Codewars</h1>
    <div>
      <h2 className="text-2xl font-bold mt-10">Introdução à plataforma</h2>
      <p>Codewars é uma plataforma que ajuda você a aprender, 
        treinar e melhorar suas habilidades de codificação, resolvendo tarefas de programação 
        de vários tipos e níveis de dificuldade.</p>
    </div>
    <div>
      <h2 className="text-2xl font-bold mt-10">Classificações</h2>
      <p>As classificações são usadas para indicar a proficiência dos usuários e a dificuldade
         do Kata. Existem duas classes de ranks, Kyu e Dan, que são divididas em 8 níveis cada.
          Por ordem crescente de proficiência/dificuldade:
          8 Kyu para 1 Kyu
          1 Dan a 8 Dan
    </p>
    </div>
    <div>
      <h2 className="text-2xl font-bold mt-10">Por que os nomes Kyu e Dan?</h2>
      <p> Os termos são emprestados de um sistema de artes 
          marciais japonesas, que por sua vez é emprestado do jogo Go. Kyu (ou Kyū) indica o 
          número de graus de distância do nível mestre (Dan). É por isso que eles contam para 
          baixo. Depois de atingir o nível mestre, contamos para cima. Faixas pretas em artes 
          marciais são de nível Dan.</p>
    </div>
      <div className='mb-2'>
        <h2 className="text-2xl font-bold mt-10">Perfil CodeWars</h2>
        {userInfo ? (
          <div>
            <img src="https://www.codewars.com/users/felipetega/badges/large" alt="" className='my-4'/>
            {/* <p className="text-xl">Usuário: <span className="text-xl font-medium">{userInfo.username}</span></p> */}
            {/* <p>Nome: {userInfo.name}</p> */}
            {/* <p className="text-xl">Honra: <span className="text-xl font-medium">{userInfo.honor}</span></p> */}
            {/* <p className="text-xl">Clan: <span className="text-xl font-medium">{userInfo.clan}</span></p> */}
            <p className="text-2xl font-medium mt-4">Ranking global: <span className="text-2xl font-bold mt-10">{userInfo.leaderboardPosition} #</span></p>
            {/* <p>Skills: {userInfo.skills && userInfo.skills.length > 0 ? userInfo.skills.join(', ') : 'Nenhuma habilidade registrada'}</p> */}
            {/* <p>Total de katas criados: {userInfo.codeChallenges.totalAuthored}</p> */}
            <p className="text-2xl font-medium mt-4"><span className="text-2xl font-bold mt-10">{userInfo.codeChallenges.totalCompleted}</span> Desafios Concluídos: </p>
            {/* <p className="text-xl">Rank geral: <span className="text-xl font-medium">{userInfo.ranks.overall.name}</span></p> */}
            {/* <p>Posição no ranking geral: {userInfo.ranks.overall.rank}</p> */}
            {/* Exiba outras informações relevantes aqui */}
          </div>
        ) : (
          <p>Carregando informações...</p>
        )}
      </div>

      <Codewars username="felipetega" />
    </>
  );
}
