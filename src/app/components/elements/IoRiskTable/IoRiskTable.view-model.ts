import { useCallback, useState } from 'react';
import { IoRank } from '@app/types/io';
import { riskTable } from '@utils/constants';
import { numberToRank } from '@utils/io';
import { IoRiskTableProps, Risk } from './IoRiskTable.types';

function useIoRiskTableViewModel({ }: IoRiskTableProps) {
  const [currentRisk, setCurrentRisk] = useState<Risk | null>(null);
  const getCellClass = useCallback((rank: IoRank) => {
    if (riskTable.redRanks.includes(rank)) {
      return 'bp5-intent-danger';
    }
    if (riskTable.yellowRanks.includes(rank)) {
      return 'bp5-intent-warning';
    }

    return 'bp5-intent-success';
  }, []);

  const handleItemClick = useCallback((effort: number, complexity: number) => () => {
    const value = {
      rank: numberToRank(effort * complexity),
      effort,
      complexity,
    };

    if (currentRisk?.effort === effort && currentRisk?.complexity === complexity) {
      setCurrentRisk(null);
    } else if (value.rank) {
      setCurrentRisk(value as Risk);
    } else {
      setCurrentRisk(null);
    }
  }, [currentRisk?.complexity, currentRisk?.effort]);

  const handleCalculate = useCallback((rank: IoRank | undefined, effort: number, complexity: number) => {
    if (rank) {
      setCurrentRisk({
        rank,
        effort,
        complexity,
      });
    } else {
      setCurrentRisk(null);
    }
  }, []);

  return {
    currentRisk,
    getCellClass,
    handleItemClick,
    handleCalculate,
  };
}

export default useIoRiskTableViewModel;
