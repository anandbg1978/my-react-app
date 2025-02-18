import { render, screen } from '@testing-library/react';
import App from './App';

test('renders data management heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Data Management Fundamentals/i);
  expect(headingElement).toBeInTheDocument();
});