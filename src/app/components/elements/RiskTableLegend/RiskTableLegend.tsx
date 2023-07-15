import React from 'react';
import clsx from 'clsx';
import { Tooltip } from '@blueprintjs/core';
import { RiskTableLegendProps } from './RiskTableLegend.types';
import styles from './RiskTableLegend.module.scss';
import useRiskTableLegendViewModel from './RiskTableLegend.view-model';

function RiskTableLegend(props: RiskTableLegendProps) {
  const { className, testingID } = props;

  const { getCellClass } = useRiskTableLegendViewModel(props);

  return (
    <div className={clsx('riskTableLegend', styles.riskTableLegend, className)} data-testid={testingID}>
      <Tooltip content={<div>Complex and demanding tasks requiring deep expertise and strategic thinking, <b>split this task if possible</b>.</div>}>
        <div className={clsx(styles.riskTableLegendRow)}>
          <div className={clsx('bp5-button', styles.riskTableLegendRowItem, getCellClass(16))}>&nbsp;</div>
          <div>High</div>
        </div>
      </Tooltip>
      <Tooltip content={<div>Moderately challenging tasks involving analysis and decision-making.</div>}>
        <div className={clsx(styles.riskTableLegendRow)}>
          <div className={clsx('bp5-button', styles.riskTableLegendRowItem, getCellClass(9))}>&nbsp;</div>
          <div>Medium</div>
        </div>
      </Tooltip>
      <Tooltip content={<div>Simple and routine tasks requiring minimal effort and expertise.</div>}>
        <div className={clsx(styles.riskTableLegendRow)}>
          <div className={clsx('bp5-button', styles.riskTableLegendRowItem, getCellClass(1))}>&nbsp;</div>
          <div>Low</div>
        </div>
      </Tooltip>
    </div>
  );
}

export default React.memo(RiskTableLegend);
