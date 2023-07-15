import React from 'react';
import clsx from 'clsx';
import IoRiskTable from '@components/elements/IoRiskTable';
import { HomeViewProps } from './HomeView.types';
import styles from './HomeView.module.scss';
// import useHomeViewViewModel from './HomeView.view-model';

function HomeView(props: HomeViewProps) {
  const { className, testingID } = props;

  return (
    <div className={clsx('homeView', styles.homeView, className)} data-testid={testingID}>
      <IoRiskTable />
    </div>
  );
}

export default React.memo(HomeView);
