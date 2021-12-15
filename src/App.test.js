import { render } from '@testing-library/react';
import NavLink from './App';

test('renders learn react link', () => {
  const container = render(<NavLink to="/films" data-testid="film-link" />);
  expect(container).toMatchSnapshot();
});
