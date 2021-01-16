import React from 'react'
import {Blurhash} from 'react-blurhash'
import {Col} from 'react-bootstrap'
import '../css/RestaurantCard.css'

interface Restaurant {
    blurhash: string,
    launch_date: string,
    location: Array<number>,
    name: string,
    online: boolean,
    popularity: number
}

interface Props {
    restaurant: Restaurant
}

export const RestaurantCard:React.FC<Props> = ({restaurant}) => {

    return (
        <Col xs={7} sm={5} md={2} className='restaurant-card'>
            <Blurhash
            className='restaurant-image'
            hash={restaurant.blurhash}
            width={200}
            height={130}
            resolutionX={32}
            resolutionY={32}
            punch={1}/>
            <p className={restaurant.online?'online':'offline'}>{restaurant.online?'Online':'Offline'}</p>
            <p>{restaurant.name}</p>
        </Col>
    );
}