/* eslint-disable node/no-unpublished-import */
/* eslint-disable import/no-extraneous-dependencies */
import { render } from '@testing-library/react';
import RiskTableLegend from './RiskTableLegend';

describe('RiskTableLegend Component', () => {
  it('should render', () => {
    const { container } = render(<RiskTableLegend />);
    expect(container).toBeTruthy();
  });

  it('should render with children', () => {
    const { getByText } = render(<RiskTableLegend><div>Test</div></RiskTableLegend>);

    expect(getByText('Test')).toBeTruthy();
  });

  it('should render with children and className', () => {
    const { container } = render(<RiskTableLegend className="test">Test</RiskTableLegend>);

    expect(container.querySelector('.test')).toBeTruthy();
  });
});
