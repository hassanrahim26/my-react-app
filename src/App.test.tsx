import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the counter text', () => {
  render(<App />);
  expect(screen.getByText(/count is/i)).toBeInTheDocument(); // Adjusted regex to match button text.
});

test('failing test example', () => {
  expect(1).toBe(2); // Failing test case
});