import React from 'react';
import clsx from 'clsx';
import { IoCalculatorProps } from './IoCalculator.types';
import styles from './IoCalculator.module.scss';

function IoCalculator(props: IoCalculatorProps) {
  const { children, className, testingID } = props;

  // const {  } = useIoCalculatorViewModel(props);

  return (
    <div className={clsx('ioCalculator', styles.ioCalculator, className)} data-testid={testingID}>
      {children}
    </div>
  );
}

export default React.memo(IoCalculator);
