'use client';

import { useGame } from '@/context/GameProvider';
import { GameScreen } from './components/GameScreen/GameScreen';

export default function Game() {
  const {
    questions,
    currentQuestion,
    revealAnswers,
    gamePaused,
    submitAnswer,
  } = useGame();

  return (
    <GameScreen
      questions={questions}
      currentQuestion={currentQuestion}
      revealAnswers={revealAnswers}
      gamePaused={gamePaused}
      submitAnswer={submitAnswer}
    />
  );
}
