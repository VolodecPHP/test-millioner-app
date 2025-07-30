import { Question } from '@/types';
import styles from './QuestionList.module.css';
import cn from 'classnames';
import { OptionBgSmallIcon } from '@/icons/OptionBgSmall';

interface QuestionListProps {
  questions: Question[];
  currentQuestion: Question;
}

export const QuestionList = ({
  questions,
  currentQuestion,
}: QuestionListProps) => {
  const classNames = {
    question: (isCurrent: boolean, isPrevious: boolean) =>
      cn(styles['question'], {
        [styles['question--current']]: isCurrent,
        [styles['question--previous']]: isPrevious,
      }),
    text: styles['text'],
    iconWrapper: styles['icon-wrapper'],
    iconPath: (isActive: boolean) =>
      cn(styles['icon-path'], {
        [styles['icon-path--active']]: isActive,
      }),
  };

  return (
    <>
      {questions.map((question, i) => {
        const currentQuestionIndex = questions.findIndex(
          (q) => q.id === currentQuestion.id
        );

        const isCurrent = currentQuestionIndex === i;
        const isPrevious = currentQuestionIndex > i;

        return (
          <div
            key={question.id}
            className={classNames.question(isCurrent, isPrevious)}
          >
            <OptionBgSmallIcon
              svgProps={{ className: classNames.iconWrapper }}
              pathProps={{ className: classNames.iconPath(isCurrent) }}
            />
            <span className={classNames.text}>${question.prize}</span>
          </div>
        );
      })}
    </>
  );
};
