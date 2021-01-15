import React, {useState} from 'react'
import {Blurhash} from 'react-blurhash'
import {Container, Row, Col} from 'react-bootstrap'

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

    const [restaurants, setRestaurants] = useState(section.restaurants)

    return (
        <div>
            <p>{section.title}</p>
            <Container>
                <Row className='justify-content-around'>
                    {restaurants.slice(0, Math.min(restaurants.length, 5))
                    .map(restaurant => {
                        return (

                        <Col xs={6} sm={4} md={2} key={restaurant.name}>
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

                        </Col>)
                    })}
                    {restaurants.length>5?
                    <button onClick={() => setRestaurants([...restaurants.slice(1, 6), restaurants[0]])}>Next</button>
                    :null }
                </Row>
            </Container>
        </div>
    );
}