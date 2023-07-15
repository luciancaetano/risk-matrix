/* eslint-disable node/no-unpublished-import */
/* eslint-disable import/no-extraneous-dependencies */
import { render } from '@testing-library/react';
import RiskCalculator from './RiskCalculator';

describe('RiskCalculator Component', () => {
  it('should render', () => {
    const { container } = render(<RiskCalculator />);
    expect(container).toBeTruthy();
  });

  it('should render with children', () => {
    const { getByText } = render(<RiskCalculator><div>Test</div></RiskCalculator>);

    expect(getByText('Test')).toBeTruthy();
  });

  it('should render with children and className', () => {
    const { container } = render(<RiskCalculator className="test">Test</RiskCalculator>);

    expect(container.querySelector('.test')).toBeTruthy();
  });
});
