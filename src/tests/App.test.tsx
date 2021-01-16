import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../components/App';
import data from '../discovery_page.json'

test('renders all sections', () => {
  render(<App />);
  const carousels = screen.getAllByTestId('carousel')
  expect(carousels.length).toEqual(data.sections.length);
});
