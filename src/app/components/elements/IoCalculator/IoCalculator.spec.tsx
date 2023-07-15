/* eslint-disable node/no-unpublished-import */
/* eslint-disable import/no-extraneous-dependencies */
import { render } from '@testing-library/react';
import IoCalculator from './IoCalculator';

describe('IoCalculator Component', () => {
  it('should render', () => {
    const { container } = render(<IoCalculator />);
    expect(container).toBeTruthy();
  });

  it('should render with children', () => {
    const { getByText } = render(<IoCalculator><div>Test</div></IoCalculator>);

    expect(getByText('Test')).toBeTruthy();
  });

  it('should render with children and className', () => {
    const { container } = render(<IoCalculator className="test">Test</IoCalculator>);

    expect(container.querySelector('.test')).toBeTruthy();
  });
});
