'use client';

import { GameOverScreen } from './components/GameOverScreen/GameOverScreen';
import { useGetScore } from './hooks/use-get-score';

export const ResultsContent = () => {
  const { score } = useGetScore();

  return <GameOverScreen prize={score} />;
};
