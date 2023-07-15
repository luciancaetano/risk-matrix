/* eslint-disable react/no-array-index-key */
import React from 'react';
import clsx from 'clsx';
import { complexityExplanationData, effortExplanationData, riskTable } from '@utils/constants';
import RiskCalculator from '@components/elements/RiskCalculator';
import RiskTableLegend from '@components/elements/RiskTableLegend';
import { IoRiskTableProps, Risk } from './IoRiskTable.types';
import styles from './IoRiskTable.module.scss';
import useIoRiskTableViewModel from './IoRiskTable.view-model';

function isCurrentRisk(currentRisk: Risk | null, risk: number, complexity: number) {
  return currentRisk?.effort === risk && currentRisk?.complexity === complexity;
}

function IoRiskTable(props: IoRiskTableProps) {
  const { className, testingID } = props;

  const {
    getCellClass, handleItemClick, currentRisk, handleCalculate,
  } = useIoRiskTableViewModel(props);

  return (
    <div className={clsx('IoRiskTable', styles.ioRiskTable)}>
      <h3 className={clsx('bp5-heading', styles.textCenter)}>Risk matrix by effort and complexity</h3>
      <div className={styles.row}>
        <div className={styles.rowMatrix}>
          <table className={clsx('bp5-html-table', styles.ioRiskTableBorderCollapse, className)} data-testid={testingID}>
            <tbody>
              {riskTable.table.map((row, complexity) => (
                // eslint-disable-next-line react/no-array-index-key
                <tr key={complexity}>
                  {row.map((rank, risk) => {
                    const r = (risk + 1);
                    const c = 5 - (complexity);

                    return (
                      <td
                        key={rank}
                        onClick={handleItemClick(r, c)}
                        className={styles.td}
                      >
                        <div className={clsx(
                          'bp5-button',
                          // currentRisk !== null && isCurrentRisk(currentRisk, r, c) && 'bp5-active',
                          currentRisk !== null && !isCurrentRisk(currentRisk, r, c) && styles.fade,
                          styles.ioRiskTableRisk,
                          getCellClass(rank),
                        )}
                        >
                          {rank}
                        </div>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className={clsx(styles.rowMatrix, styles.rowMatrixEnd)}>
          <RiskTableLegend />
        </div>
        <div className={styles.rowCalculator}>
          <RiskCalculator
            effort={currentRisk?.effort}
            complexity={currentRisk?.complexity}
            riskValue={currentRisk?.rank}
            onCalculate={handleCalculate}
          />
        </div>
      </div>
      <div className={styles.spacer} />
      <h4 className="bp5-heading">Effort Levels</h4>
      <table className="bp5-html-table bp5-html-table-bordered bp5-html-table-striped bp5-interactive">
        <thead>
          <tr>
            <th>Effort Level</th>
            <th>Effort</th>
            <th>Explanation</th>
          </tr>
        </thead>
        <tbody>
          {effortExplanationData.map((row, index) => (
            <tr key={index}>
              <td>{row.level}</td>
              <td>{row.title}</td>
              <td>{row.explanation}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={styles.spacer} />
      <h4 className="bp5-heading">Complexity Levels</h4>
      <br />
      <table className="bp5-html-table bp5-html-table-bordered bp5-html-table-striped bp5-interactive">
        <thead>
          <tr>
            <th>Complexity Level</th>
            <th>Complexity</th>
            <th>Explanation</th>
          </tr>
        </thead>
        <tbody>
          {complexityExplanationData.map((row, index) => (
            <tr key={index}>
              <td>{row.level}</td>
              <td>{row.title}</td>
              <td>{row.explanation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default React.memo(IoRiskTable);
