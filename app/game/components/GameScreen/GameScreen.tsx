import styles from './GameScreen.module.css';
import { QuestionList } from '../QuestionList/QuestionList';
import { QuestionOptions } from '../QuestionOptions/QuestionOptions';
import { Question } from '@/types';
import { useState } from 'react';
import cn from 'classnames';

interface GameScreenProps {
  questions: Question[];
  currentQuestion: Question;
  isAnswersRevealed: boolean;
  isGamePaused: boolean;
  submitAnswer: (questionId: string, optionId: string) => void;
}

export const GameScreen = ({
  questions,
  currentQuestion,
  isAnswersRevealed,
  isGamePaused,
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
    burgerButton: cn(styles['burger-button'], {
      [styles['burger-button--open']]: isMobileMenuOpen,
    }),
    mobileHeader: styles['mobile-header'],
    mobileMenu: cn(styles['mobile-menu'], {
      [styles['mobile-menu--open']]: isMobileMenuOpen,
      [styles['mobile-menu--closed']]: !isMobileMenuOpen,
    }),
    mobileMenuContent: styles['mobile-menu-content'],
    burgerLineTop: styles['burger-line-top'],
    burgerLineMiddle: styles['burger-line-middle'],
    burgerLineBottom: styles['burger-line-bottom'],
  };

  return (
    <div className={classNames.block}>
      <div className={classNames.mobileHeader}>
        <button
          className={classNames.burgerButton}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className={classNames.burgerLineTop}></div>
          <div className={classNames.burgerLineMiddle}></div>
          <div className={classNames.burgerLineBottom}></div>
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
            isAnswersRevealed={isAnswersRevealed}
            isGamePaused={isGamePaused}
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
