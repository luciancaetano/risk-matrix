import { IoRank } from '@app/types/io';
import { ITestableProps } from '@app/types/testing';
import React from 'react';

export interface IoRiskTableProps extends React.PropsWithChildren<{}>, ITestableProps {
  className?: string;
  styles?: React.CSSProperties;
  children?: React.ReactNode;
}

export interface Risk {
  rank: IoRank;
  effort: number;
  complexity: number;
}
