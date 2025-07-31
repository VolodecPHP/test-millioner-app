'use client';

import { GameOverScreen } from './components/GameOverScreen/GameOverScreen';
import { useGetScore } from './hooks/use-get-score';

export const ResultsContent = () => {
  const { score } = useGetScore();

  return (
    <GameOverScreen
      title={`$${score} earned`}
      imageSrc='/start-desktop-v1.png'
      linkHref='/game'
      linkText='Try again'
      subtitle='Total score:'
    />
  );
};
