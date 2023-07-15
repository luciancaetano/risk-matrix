import React from 'react';
import clsx from 'clsx';
import { Outlet } from 'react-router';
import { AppLayoutProps } from './AppLayout.types';
import styles from './AppLayout.module.scss';

function AppLayout(props: AppLayoutProps) {
  const { className, testingID } = props;

  return (
    <div className={clsx('appLayout', styles.appLayout, className)} data-testid={testingID}>
      <Outlet />
    </div>
  );
}

export default React.memo(AppLayout);
