import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import SearchBar from '../components/SearchBar';

jest.mock('../services/api', () => ({
  searchRecipes: jest.fn((q) => Promise.resolve([{ id: 1, name: 'Test', cuisine: 'Indian', cookTimeMinutes: 10, tags: [] }])),
}));

test('shows validation when empty and when less than 3 chars', async () => {
  const onResults = jest.fn();
  render(<SearchBar onResults={onResults} />);

  fireEvent.click(screen.getByText(/Search/i));
  expect(await screen.findByText(/Please enter a search term/)).toBeInTheDocument();

  fireEvent.change(screen.getByLabelText(/Search recipes/i), { target: { value: 'ab' } });
  fireEvent.click(screen.getByText(/Search/i));
  expect(await screen.findByText(/at least 3 characters/)).toBeInTheDocument();
});

test('performs search and returns results', async () => {
  const onResults = jest.fn();
  render(<SearchBar onResults={onResults} />);
  fireEvent.change(screen.getByLabelText(/Search recipes/i), { target: { value: 'chicken' } });
  fireEvent.click(screen.getByText(/Search/i));

  await waitFor(() => expect(onResults).toHaveBeenCalled());
  expect(onResults.mock.calls[0][0]).toHaveLength(1);
});
