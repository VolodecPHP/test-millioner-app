import { getGameConfig } from '@/config';
import { GameProvider } from './GameProvider';

export default function GameLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
