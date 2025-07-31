export interface Option {
  id: string;
  text: string;
  isCorrect: boolean;
}

export interface Question {
  id: string;
  text: string;
  options: Option[];
  prize: number;
}

export interface Config {
  questions: Question[];
}

export interface GameState {
  currentQuestion: Question;
  isGameOver: boolean;
  questions: Question[];
  isAnswersRevealed: boolean;
  isGamePaused: boolean;
  score: number;
  submitAnswer: (questionId: string, optionId: string) => void;
  resetGame: () => void;
}
