/* eslint-disable import/no-extraneous-dependencies */
import { render } from '@testing-library/react';
import IoRiskTable from './IoRiskTable';

describe('IoRiskTable Component', () => {
  it('should render', () => {
    const { container } = render(<IoRiskTable />);
    expect(container).toBeTruthy();
  });

  it('should render with children', () => {
    const { getByText } = render(<IoRiskTable><div>Test</div></IoRiskTable>);

    expect(getByText('Test')).toBeTruthy();
  });

  it('should render with children and className', () => {
    const { container } = render(<IoRiskTable className="test">Test</IoRiskTable>);

    expect(container.querySelector('.test')).toBeTruthy();
  });
});
