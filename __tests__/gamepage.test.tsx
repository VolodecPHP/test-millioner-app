import { expect, it, vi } from 'vitest';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { beforeEach, describe } from 'node:test';
import GamePage from '@/app/game/page';
import { GameProvider } from '@/app/game/GameProvider';

const routerPushMock = vi.fn();

vi.mock('next/navigation', async () => {
  return {
    useRouter: vi.fn().mockImplementation(() => ({
      push: routerPushMock,
    })),
  };
});

const mockQuestions = [
  {
    id: 'q-1',
    text: 'What is the capital of France?',
    prize: 100,
    options: [
      {
        id: 'q1-o1',
        text: 'Berlin',
        isCorrect: false,
      },
      {
        id: 'q1-o2',
        text: 'Madrid',
        isCorrect: false,
      },
      {
        id: 'q1-o3',
        text: 'Paris',
        isCorrect: true,
      },
      {
        id: 'q1-o4',
        text: 'Rome',
        isCorrect: false,
      },
    ],
  },
  {
    id: 'q-2',
    text: 'What is the largest planet in our solar system?',
    prize: 200,
    options: [
      {
        id: 'q2-o1',
        text: 'Earth',
        isCorrect: false,
      },
      {
        id: 'q2-o2',
        text: 'Jupiter',
        isCorrect: true,
      },
      {
        id: 'q2-o3',
        text: 'Mars',
        isCorrect: false,
      },
      {
        id: 'q2-o4',
        text: 'Saturn',
        isCorrect: false,
      },
    ],
  },
];

describe('Game page', () => {
  beforeEach(() => {
    routerPushMock.mockClear();
  });

  it('Goes to results page with valid score on all right answers', async () => {
    render(
      <GameProvider
        questions={mockQuestions}
        __injections={{ revealAnswersTimeout: 0, nextQuestionTimeout: 0 }}
      >
        <GamePage />
      </GameProvider>
    );

    const q1RightAnswerButton = screen.getByText('Paris');

    fireEvent.click(q1RightAnswerButton);

    const nextQuestionTitle = await screen.findByText(
      'What is the largest planet in our solar system?'
    );

    expect(nextQuestionTitle).toBeDefined();

    const q2RightAnswerButton = screen.getByText('Jupiter');

    fireEvent.click(q2RightAnswerButton);

    await waitFor(async () => {
      expect(routerPushMock).toHaveBeenCalledWith('/results?score=200');
    });
  });

  it('Goes to results page with 0 score on wrong answer', async () => {
    render(
      <GameProvider
        questions={mockQuestions}
        __injections={{ revealAnswersTimeout: 0, nextQuestionTimeout: 0 }}
      >
        <GamePage />
      </GameProvider>
    );

    const wrongAnswerButton = screen.getByText('Berlin');

    fireEvent.click(wrongAnswerButton);

    await waitFor(() => {
      expect(routerPushMock).toHaveBeenCalledWith('/results?score=0');
    });
  });
});
