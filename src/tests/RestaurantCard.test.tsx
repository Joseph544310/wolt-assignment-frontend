import React from 'react';
import { render, screen } from '@testing-library/react';
import {RestaurantCard} from '../components/RestaurantCard';

const testRestaurant = {
    "blurhash": "UAN=8k?LS~M:ErJFs%t0MDMWRqo@%BxSV{RX",
    "launch_date": "2020-04-20",
    "location": [
        24.938082,
        60.17626
    ],
    "name": "Sea Chain",
    "online": true,
    "popularity": 0.956990414084132
}

test('displays online field', () => {
    render(<RestaurantCard restaurant={testRestaurant} />);
    const onlineStatus = screen.getByTestId('online-status');
    expect(onlineStatus).toHaveTextContent(testRestaurant.online?'Online':'Offline');
});

test('displays name field', () => {
    render(<RestaurantCard restaurant={testRestaurant} />);
    const restaurantName = screen.getByTestId('restaurant-name');
    expect(restaurantName).toHaveTextContent(testRestaurant.name);
});

test('displays blurhash field', () => {
    render(<RestaurantCard restaurant={testRestaurant} />);
    const restaurantBlurhash = screen.getByTestId('restaurant-blurhash');
});

