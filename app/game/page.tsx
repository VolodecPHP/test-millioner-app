'use client';

import { GameScreen } from './components/GameScreen/GameScreen';
import { useGame } from './GameProvider';

export default function Game() {
  const {
    questions,
    currentQuestion,
    isAnswersRevealed,
    isGamePaused,
    submitAnswer,
  } = useGame();

  return (
    <GameScreen
      questions={questions}
      currentQuestion={currentQuestion}
      isAnswersRevealed={isAnswersRevealed}
      isGamePaused={isGamePaused}
      submitAnswer={submitAnswer}
    />
  );
}
