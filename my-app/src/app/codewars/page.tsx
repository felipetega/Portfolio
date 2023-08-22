'use client'
import React, { useState, useEffect } from 'react';
import Codewars from "@/components/cards/Codewars";
import CardSection from "@/components/cards/CardSection";

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
      <div>
        <h1>Informações do CodeWars</h1>
        {userInfo ? (
          <div>
            <p>Nome de usuário: {userInfo.username}</p>
            <p>Nome: {userInfo.name}</p>
            <p>Honor: {userInfo.honor}</p>
            <p>Clan: {userInfo.clan}</p>
            <p>Posição no leaderboard: {userInfo.leaderboardPosition}</p>
            <p>Skills: {userInfo.skills && userInfo.skills.length > 0 ? userInfo.skills.join(', ') : 'Nenhuma habilidade registrada'}</p>
            <p>Total de katas criados: {userInfo.codeChallenges.totalAuthored}</p>
            <p>Total de katas concluídos: {userInfo.codeChallenges.totalCompleted}</p>
            <p>Rank geral: {userInfo.ranks.overall.name}</p>
            <p>Posição no ranking geral: {userInfo.ranks.overall.rank}</p>
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
