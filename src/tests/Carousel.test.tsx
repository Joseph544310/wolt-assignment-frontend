import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import {Carousel} from '../components/Carousel';
import data from '../discovery_page.json'

const testSection = data.sections[0]

test('scrolls right', () => {
  const {queryByText} = render(<Carousel section={testSection} />);
  const scrollRight = screen.getByTestId('scroll-right')
  fireEvent.click(scrollRight)
  const firstRestaurant = queryByText(data.sections[0].restaurants[0].name)
  expect(firstRestaurant).toBeNull()
});

test('scrolls left', () => {
    const {queryByText} = render(<Carousel section={testSection} />);
    const scrollLeft = screen.getByTestId('scroll-left')
    fireEvent.click(scrollLeft)
    const LastRestaurant = queryByText(data.sections[0].restaurants[data.sections[0].restaurants.length - 1].name)
    expect(LastRestaurant).not.toBeNull()
  });
  
test('scrolls right infinitely and goes back to start', () => {
    const {queryByText} = render(<Carousel section={testSection} />);
    const scrollRight = screen.getByTestId('scroll-right')
    for (let i=0; i<data.sections[0].restaurants.length; i+=1) {
        fireEvent.click(scrollRight)
    }
    const firstRestaurant = queryByText(data.sections[0].restaurants[0].name)
    expect(firstRestaurant).not.toBeNull()
  });

test('scrolls left infinitely and goes back to start', () => {
    const {queryByText} = render(<Carousel section={testSection} />);
    const scrollLeft = screen.getByTestId('scroll-left')
    for (let i=0; i<data.sections[0].restaurants.length; i+=1) {
        fireEvent.click(scrollLeft)
    }
    const firstRestaurant = queryByText(data.sections[0].restaurants[0].name)
    expect(firstRestaurant).not.toBeNull()
  });