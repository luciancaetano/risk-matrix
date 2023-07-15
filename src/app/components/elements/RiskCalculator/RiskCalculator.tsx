import React from 'react';
import clsx from 'clsx';
import { Icon, IconSize } from '@blueprintjs/core';
import { RiskCalculatorProps } from './RiskCalculator.types';
import styles from './RiskCalculator.module.scss';
import useRiskCalculatorViewModel from './RiskCalculator.view-model';

function RiskCalculator(props: RiskCalculatorProps) {
  const { className, testingID, riskValue } = props;

  const {
    risk, complexity, handleComplexityChange, handleEffortChange,
  } = useRiskCalculatorViewModel(props);

  return (
    <div className={clsx('riskCalculator', styles.riskCalculator, className)} data-testid={testingID}>
      <div className="bp5-html-select {{.modifier}}">
        <select className="bp5-large" value={risk} onChange={handleEffortChange}>
          <option value="0">Select Effort</option>
          <option value="1">1 - Very Low</option>
          <option value="2">2 - Low</option>
          <option value="3">3 - Moderate</option>
          <option value="4">4 - High</option>
          <option value="5">5 - Very High</option>
        </select>
        <span className="bp5-icon bp5-icon-double-caret-vertical" />
      </div>
      <div className={styles.icon}>
        <Icon icon="cross" size={IconSize.LARGE} />
      </div>
      <div className="bp5-html-select {{.modifier}}">
        <select className="bp5-large" value={complexity} onChange={handleComplexityChange}>
          <option value="0">Select Complexity</option>
          <option value="1">1 - Very Low</option>
          <option value="2">2 - Low</option>
          <option value="3">3 - Moderate</option>
          <option value="4">4 - High</option>
          <option value="5">5 - Very High</option>
        </select>
        <span className="bp5-icon bp5-icon-double-caret-vertical" />
      </div>
      {riskValue && (
        <div className={styles.icon}>
          <Icon icon="drawer-left-filled" size={IconSize.LARGE} />
        </div>
      )}
      <div className={clsx(styles.centerText)}>{riskValue}</div>
    </div>
  );
}

export default React.memo(RiskCalculator);
