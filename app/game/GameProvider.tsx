'use client';

import { GameState, Question } from '@/types';
import { useRouter } from 'next/navigation';
import { createContext, useContext, useEffect, useState } from 'react';

const GameContext = createContext<GameState | undefined>(undefined);

interface Injections {
  revealAnswersTimeout: number;
  nextQuestionTimeout: number;
}

interface GameProviderProps extends React.PropsWithChildren {
  questions: Question[];
  __injections: Injections;
}

export const GameProvider = ({
  children,
  questions,
  __injections,
}: GameProviderProps) => {
  const firstQuestion = questions[0];

  const [currentQuestion, setCurrentQuestion] = useState(firstQuestion);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isAnswersRevealed, setIsAnswersRevealed] = useState(false);
  const [isGamePaused, setIsGamePaused] = useState(false);
  const [score, setScore] = useState(0);

  const router = useRouter();

  const resetGame = () => {
    setCurrentQuestion(firstQuestion);
    setIsGameOver(false);
    setIsAnswersRevealed(false);
    setIsGamePaused(false);
    setScore(0);
  };

  const revealAnswersWithDelay = () => {
    setTimeout(() => {
      setIsAnswersRevealed(true);
    }, __injections.revealAnswersTimeout);
  };

  const goToNextQuestionWithDelay = (nextQuestionIndex: number) => {
    setTimeout(() => {
      setCurrentQuestion(questions[nextQuestionIndex]);
      setIsAnswersRevealed(false);
      setIsGamePaused(false);
    }, __injections.nextQuestionTimeout);
  };

  const finishGameWithDelay = () => {
    setTimeout(() => {
      setIsGameOver(true);
    }, __injections.nextQuestionTimeout);
  };

  const submitAnswer = (questionId: string, optionId: string) => {
    setIsGamePaused(true);

    const question = questions.find((q) => q.id === questionId);

    if (!question) {
      throw new Error(`Question with id ${questionId} not found`);
    }

    const isCorrect = question.options.some(
      (option) => option.id === optionId && option.isCorrect
    );
    const nextQuestionIndex =
      questions.findIndex((q) => q.id === questionId) + 1;
    const isLastQuestion = nextQuestionIndex >= questions.length;

    revealAnswersWithDelay();

    if (!isCorrect) {
      finishGameWithDelay();
      return;
    }

    setScore(question.prize);

    if (isLastQuestion) {
      finishGameWithDelay();
      return;
    }

    goToNextQuestionWithDelay(nextQuestionIndex);
  };

  useEffect(() => {
    if (isGameOver) {
      router.push(`/results?score=${score}`);
    }
  }, [isGameOver, router, score]);

  return (
    <GameContext.Provider
      value={{
        currentQuestion,
        isGameOver,
        questions,
        isAnswersRevealed,
        isGamePaused,
        score,
        resetGame,
        submitAnswer,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGame = (): GameState => {
  const context = useContext(GameContext);

  if (!context) {
    throw new Error('useGame must be used within a GameProvider');
  }

  return context;
};
