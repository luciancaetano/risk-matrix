import { ITestableProps } from '@app/types/testing';
import React from 'react';

export interface IoCalculatorProps extends React.PropsWithChildren<{}>, ITestableProps {
  className?: string;
  styles?: React.CSSProperties;
}
