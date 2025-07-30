import styles from './GameScreen.module.css';
import { QuestionList } from '../QuestionList/QuestionList';
import { QuestionOptions } from '../QuestionOptions/QuestionOptions';
import { Question } from '@/types';
import { useState } from 'react';
import cn from 'classnames';

interface GameScreenProps {
  questions: Question[];
  currentQuestion: Question;
  revealAnswers: boolean;
  gamePaused: boolean;
  submitAnswer: (questionId: string, optionId: string) => void;
}

export const GameScreen = ({
  questions,
  currentQuestion,
  revealAnswers,
  gamePaused,
  submitAnswer,
}: GameScreenProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const classNames = {
    block: styles['block'],
    round: styles['round'],
    roundContainer: styles['round-container'],
    sidebar: styles['sidebar'],
    title: styles['title'],
    sidebarContent: styles['sidebar-content'],
    burgerButton: styles['burger-button'],
    mobileHeader: styles['mobile-header'],
    mobileMenu: cn(styles['mobile-menu'], {
      [styles['mobile-menu--open']]: isMobileMenuOpen,
      [styles['mobile-menu--closed']]: !isMobileMenuOpen,
    }),
    mobileMenuContent: styles['mobile-menu-content'],
  };

  return (
    <div className={classNames.block}>
      <div className={classNames.mobileHeader}>
        <button
          className={classNames.burgerButton}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>
      </div>
      <div className={classNames.mobileMenu}>
        <div className={classNames.mobileMenuContent}>
          <QuestionList
            questions={questions}
            currentQuestion={currentQuestion}
          />
        </div>
      </div>
      <div className={classNames.round}>
        <div className={classNames.roundContainer}>
          <p className={classNames.title}>{currentQuestion.text}</p>
          <QuestionOptions
            currentQuestion={currentQuestion}
            revealAnswers={revealAnswers}
            gamePaused={gamePaused}
            submitAnswer={submitAnswer}
          />
        </div>
      </div>
      <div className={classNames.sidebar}>
        <div className={classNames.sidebarContent}>
          <QuestionList
            questions={questions}
            currentQuestion={currentQuestion}
          />
        </div>
      </div>
    </div>
  );
};
