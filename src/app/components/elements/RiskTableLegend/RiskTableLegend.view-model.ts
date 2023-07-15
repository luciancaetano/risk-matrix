import { useCallback } from 'react';
import { riskTable } from '@utils/constants';
import { IoRank } from '@app/types/io';
import { RiskTableLegendProps } from './RiskTableLegend.types';

function useRiskTableLegendViewModel({ }: RiskTableLegendProps) {
  const getCellClass = useCallback((rank: IoRank) => {
    if (riskTable.redRanks.includes(rank)) {
      return 'bp5-intent-danger';
    }
    if (riskTable.yellowRanks.includes(rank)) {
      return 'bp5-intent-warning';
    }

    return 'bp5-intent-success';
  }, []);

  return {
    getCellClass,
  };
}

export default useRiskTableLegendViewModel;
