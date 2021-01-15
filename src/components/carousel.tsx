import React from 'react'

interface Restaurent {
    blurhash: string,
    launch_date: string,
    location: Array<number>,
    name: string,
    online: boolean,
    popularity: number
}

interface Section {
    title: string,
    restaurents: Array<Restaurent>
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