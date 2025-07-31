import { useSearchParams } from 'next/navigation';

export interface UseGetTotalPrize {
  totalPrize: number;
}

export const useGetTotalPrize = (): UseGetTotalPrize => {
  const searchParams = useSearchParams();
  const totalPrize = searchParams.get('totalPrize') || '0';

  return {
    totalPrize: Number(totalPrize),
  };
};
