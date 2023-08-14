import { render, screen } from '@testing-library/react';
import HomeScreen from './Components/HomeScreen/HomeScreen';

test('SSDC renders on HomeScreen', () => {
  render(<HomeScreen />);
  const linkElement = screen.getByText(/SSDC/i);
  expect(linkElement).toBeInTheDocument();
});
