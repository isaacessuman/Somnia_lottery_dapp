import { render, screen } from '@testing-library/react';
import App from './App';

test('renders main UI elements', () => {
  render(<App />);
  const headings = screen.queryAllByText(/Lottery DApp/i);
  const connectButtons = screen.queryAllByRole('button', {
    name: /Connect Wallet/i,
  });
  expect(headings.length > 0 || connectButtons.length > 0).toBe(true);
});
