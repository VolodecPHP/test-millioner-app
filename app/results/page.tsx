import { GameOverScreen } from './components/GameOverScreen/GameOverScreen';
import { Suspense } from 'react';
import { ResultsContent } from './content';

export default function Results() {
  return (
    <Suspense fallback={<GameOverScreen prize={0} />}>
      <ResultsContent />
    </Suspense>
  );
}
