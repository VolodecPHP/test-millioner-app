'use client';

import { useSearchParams } from 'next/navigation';
import { GameOverScreen } from './components/GameOverScreen/GameOverScreen';

export default function Results() {
  const searchParams = useSearchParams();
  const score = searchParams.get('totalPrize') || '0';

  return <GameOverScreen prize={Number(score)} />;
}
