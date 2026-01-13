// Simple test to verify rendering
import { render } from '@testing-library/react';
import App from './App';

test('renders app', () => {
  const { container } = render(<App />);
  expect(container).toBeTruthy();
});

