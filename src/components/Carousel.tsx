import React from 'react'

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
        </div>
    );
}