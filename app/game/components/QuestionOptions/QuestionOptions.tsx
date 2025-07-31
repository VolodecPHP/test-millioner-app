import { useState } from 'react';
import styles from './QuestionOptions.module.css';
import { Option, Question } from '@/types';
import cn from 'classnames';
import { OptionBgBigIcon } from '@/icons/OptionBgBig';
import { getQuestionLetter } from '@/utils/get-question-letter';

interface QuestionOptionProps {
  currentQuestion: Question;
  isGamePaused: boolean;
  isAnswersRevealed: boolean;
  submitAnswer: (questionId: string, optionId: string) => void;
}

export const QuestionOptions = ({
  currentQuestion,
  isGamePaused,
  isAnswersRevealed,
  submitAnswer,
}: QuestionOptionProps) => {
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);

  const getButtonState = (option: Option) => {
    if (!isGamePaused && !isAnswersRevealed) {
      return 'default';
    }

    if (
      isAnswersRevealed &&
      selectedOptionId === option.id &&
      !option.isCorrect
    ) {
      return 'incorrect';
    }

    if (isAnswersRevealed && option.isCorrect) {
      return 'correct';
    }

    if (isGamePaused && selectedOptionId === option.id) {
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
              disabled={isAnswersRevealed || isGamePaused}
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
