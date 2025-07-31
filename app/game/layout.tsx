import { getGameConfig } from '@/config';
import { GameProvider } from './GameProvider';
import { PropsWithChildren } from 'react';

export default function GameLayout({ children }: PropsWithChildren) {
  return (
    <GameProvider
      questions={getGameConfig().questions}
      __injections={{
        revealAnswersTimeout: 1000,
        nextQuestionTimeout: 2000,
      }}
    >
      {children}
    </GameProvider>
  );
}
