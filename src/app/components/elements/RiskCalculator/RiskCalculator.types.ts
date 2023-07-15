import { IoRank } from '@app/types/io';
import { ITestableProps } from '@app/types/testing';
import React from 'react';

export interface RiskCalculatorProps extends React.PropsWithChildren<{}>, ITestableProps {
  className?: string;
  styles?: React.CSSProperties;
  riskValue?: IoRank;
  effort?: number;
  complexity?: number;
  onCalculate?: (rank: IoRank | undefined, effort: number, complexity: number) => void;
}
