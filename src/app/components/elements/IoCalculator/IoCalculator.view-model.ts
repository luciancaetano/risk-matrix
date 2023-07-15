import { useCallback, useState } from 'react';
import { IoCalculatorProps } from './IoCalculator.types';

function useIoCalculatorViewModel({ }: IoCalculatorProps) {
  const [counter, setCounter] = useState(0);
  const handleClick = useCallback(() => {
    setCounter((c) => c + 1);
  }, []);

  return {
    handleClick,
    counter,
  };
}

export default useIoCalculatorViewModel;
