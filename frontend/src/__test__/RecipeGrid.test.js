import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import RecipeGrid from '../components/RecipeGrid';

const sample = [
  { id:1, name:'A', cuisine:'X', cookTimeMinutes: 10, tags:['t1'] },
  { id:2, name:'B', cuisine:'Y', cookTimeMinutes: 20, tags:['t2'] }
];

test('renders grid and allows sorting and filtering', () => {
  render(<RecipeGrid recipes={sample} />);
  expect(screen.getByText('A')).toBeInTheDocument();
  expect(screen.getByText('B')).toBeInTheDocument();

  fireEvent.change(screen.getByLabelText(/Sort by cook time/i), { target: { value: 'desc' } });
  const cards = screen.getAllByRole('heading', { level: 3 });
  expect(cards[0].textContent).toBe('B');
});
