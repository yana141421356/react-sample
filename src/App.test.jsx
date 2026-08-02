import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the login screen', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: 'ログイン画面' })).toBeInTheDocument();
});
