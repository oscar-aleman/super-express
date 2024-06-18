import { render, screen } from '@testing-library/react';
import App from './App';

test('renders super express title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Super Express/i);
  expect(titleElement).toBeInTheDocument();
});
