import React, { useCallback, useEffect, useState } from 'react';
import { numberToRank } from '@utils/io';
import { RiskCalculatorProps } from './RiskCalculator.types';

function useRiskCalculatorViewModel({ onCalculate, riskValue, ...props }: RiskCalculatorProps) {
  const [effort, setEffort] = useState(props.effort || 0);
  const [complexity, setComplexity] = useState(props.complexity || 0);

  const handleEffortChange = useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
    setEffort(Number(event.target.value));
  }, []);

  const handleComplexityChange = useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
    setComplexity(Number(event.target.value));
  }, []);

  useEffect(() => {
    if (onCalculate) {
      const rank = numberToRank(effort * complexity);
      onCalculate(rank, effort, complexity);
    }
  }, [complexity, onCalculate, effort]);

  useEffect(() => {
    if (!riskValue) {
      setEffort(0);
      setComplexity(0);
    }
  }, [riskValue]);

  useEffect(() => {
    if (props.effort) {
      setEffort(props.effort);
    }
  }, [props.effort]);

  useEffect(() => {
    if (props.complexity) {
      setComplexity(props.complexity);
    }
  }, [props.complexity]);

  return {
    risk: effort,
    complexity,
    handleEffortChange,
    handleComplexityChange,
  };
}

export default useRiskCalculatorViewModel;
