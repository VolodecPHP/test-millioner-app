import { useState } from 'react';
import styles from './QuestionOptions.module.css';
import { Option, Question } from '@/types';
import cn from 'classnames';
import { OptionBgBigIcon } from '@/icons/OptionBgBig';
import { getQuestionLetter } from '@/utils/get-question-letter';

interface QuestionOptionProps {
  currentQuestion: Question;
  gamePaused: boolean;
  revealAnswers: boolean;
  submitAnswer: (questionId: string, optionId: string) => void;
}

export const QuestionOptions = ({
  currentQuestion,
  gamePaused,
  revealAnswers,
  submitAnswer,
}: QuestionOptionProps) => {
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);

  const getButtonState = (option: Option) => {
    if (!gamePaused && !revealAnswers) {
      return 'default';
    }

    if (revealAnswers && selectedOptionId === option.id && !option.isCorrect) {
      return 'incorrect';
    }

    if (revealAnswers && option.isCorrect) {
      return 'correct';
    }

    if (gamePaused && selectedOptionId === option.id) {
      return 'selected';
    }
  };

  const classNames = {
    options: styles['options'],
    option: styles['option'],
    optionContent: (option: Option) =>
      cn(
        styles['option-content'],
        styles[`option-content--${getButtonState(option)}`]
      ),
    optionId: styles['option-id'],
    optionText: styles['option-text'],
    iconWrapper: styles['icon-wrapper'],
    iconPath: (option: Option) =>
      cn(styles['icon-path'], styles[`icon-path--${getButtonState(option)}`]),
  };

  return (
    <div className={classNames.options}>
      {currentQuestion.options.map((option, i) => {
        return (
          <div className={classNames.option} key={option.id}>
            <button
              className={classNames.optionContent(option)}
              disabled={revealAnswers || gamePaused}
              onClick={() => {
                setSelectedOptionId(option.id);

                submitAnswer(currentQuestion.id, option.id);
              }}
            >
              <OptionBgBigIcon
                svgProps={{ className: classNames.iconWrapper }}
                pathProps={{ className: classNames.iconPath(option) }}
              />
              <span className={classNames.optionId}>
                {getQuestionLetter(i)}
              </span>
              <span className={classNames.optionText}>{option.text}</span>
            </button>
          </div>
        );
      })}
    </div>
  );
};
