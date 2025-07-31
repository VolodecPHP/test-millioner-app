import { useSearchParams } from 'next/navigation';

export interface UseGetScore {
  score: number;
}

export const useGetScore = (): UseGetScore => {
  const searchParams = useSearchParams();
  const score = searchParams.get('score') || '0';

  return {
    score: Number(score),
  };
};
