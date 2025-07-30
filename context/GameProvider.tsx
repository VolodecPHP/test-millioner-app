'use client';

import { GameState, Question } from '@/types';
import { useRouter } from 'next/navigation';
import { createContext, useContext, useEffect, useState } from 'react';

const GameContext = createContext<GameState | undefined>(undefined);

interface GameProviderProps extends React.PropsWithChildren {
  questions: Question[];
}

export const GameProvider = ({ children, questions }: GameProviderProps) => {
  const firstQuestion = questions[0];
  const router = useRouter();

  const [currentQuestion, setCurrentQuestion] =
    useState<Question>(firstQuestion);
  const [isGameOver, setIsGameOver] = useState<boolean>(false);
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [revealAnswers, setRevealAnswers] = useState<boolean>(false);
  const [gamePaused, setGamePaused] = useState<boolean>(false);
  const [totalPrize, setTotalPrize] = useState<number>(0);

  const resetGame = () => {
    setCurrentQuestion(firstQuestion);
    setIsGameOver(false);
    setUserAnswers({});
    setRevealAnswers(false);
    setGamePaused(false);
    setTotalPrize(0);
  };

  const submitAnswer = (questionId: string, optionId: string) => {
    const question = questions.find((q) => q.id === questionId);

    if (!question) {
      throw new Error(`Question with id ${questionId} not found`);
    }

    const isCorrect = question.options.some(
      (option) => option.id === optionId && option.isCorrect
    );

    setGamePaused(true);
    setUserAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: optionId,
    }));

    if (isCorrect) {
      setTotalPrize(question.prize);
    }

    setTimeout(() => {
      setRevealAnswers(true);
    }, 1000);

    setTimeout(() => {
      if (isCorrect) {
        const nextQuestionIndex =
          questions.findIndex((q) => q.id === questionId) + 1;

        if (nextQuestionIndex < questions.length) {
          setCurrentQuestion(questions[nextQuestionIndex]);
          setRevealAnswers(false);
          setGamePaused(false);
        } else {
          setIsGameOver(true);
        }
      } else {
        setIsGameOver(true);
      }
    }, 2000);
  };

  useEffect(() => {
    if (isGameOver) {
      router.push(`/results?totalPrize=${totalPrize}`);
    }
  }, [isGameOver, router, totalPrize]);

  return (
    <GameContext.Provider
      value={{
        currentQuestion,
        isGameOver,
        userAnswers,
        questions,
        revealAnswers,
        gamePaused,
        totalPrize,
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
