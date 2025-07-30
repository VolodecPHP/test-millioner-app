import { getGameConfig } from '@/config';
import { GameProvider } from '@/context/GameProvider';

export default function GameLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <GameProvider questions={getGameConfig().questions}>
      {children}
    </GameProvider>
  );
}
