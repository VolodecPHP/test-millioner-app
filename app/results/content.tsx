'use client';

import { GameOverScreen } from './components/GameOverScreen/GameOverScreen';
import { useGetTotalPrize } from './hooks/use-get-total-prize';

export const ResultsContent = () => {
  const { totalPrize } = useGetTotalPrize();

  return <GameOverScreen prize={totalPrize} />;
};
