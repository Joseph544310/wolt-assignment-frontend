import React from 'react'
import {Blurhash} from 'react-blurhash'

interface Restaurant {
    blurhash: string,
    launch_date: string,
    location: Array<number>,
    name: string,
    online: boolean,
    popularity: number
}

interface Section {
    title: string,
    restaurants: Array<Restaurant>
}

interface Props {
    section: Section
}

export const Carousel:React.FC<Props> = ({section}) => {
    return (
        <div>
            <p>{section.title}</p>
            {section.restaurants.map(restaurant => {
                return (
                <div>
                    <Blurhash
                    hash={restaurant.blurhash}
                    width={200}
                    height={150}
                    resolutionX={32}
                    resolutionY={32}
                    punch={1}
                  />
                  <p>{restaurant.online?'Online':'Offline'}</p>
                  <p>{restaurant.name}</p>

                </div>)
            })}
        </div>
    );
}