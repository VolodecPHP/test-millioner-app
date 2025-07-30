export const getQuestionLetter = (index: number): string => {
  const questionIndexLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  if (index < 0 || index >= questionIndexLetters.length) {
    throw new Error('Index out of bounds for question letters');
  }

  return questionIndexLetters[index];
};
