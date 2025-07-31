import { GameOverScreen } from './components/GameOverScreen/GameOverScreen';
import { Suspense } from 'react';
import { ResultsContent } from './content';

export default function Results() {
  return (
    <Suspense
      fallback={
        <GameOverScreen
          title='$0 earned'
          imageSrc='/start-desktop-v1.png'
          linkHref='/game'
          linkText='Try again'
          subtitle='Total score:'
        />
      }
    >
      <ResultsContent />
    </Suspense>
  );
}
