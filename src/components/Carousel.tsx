import React from 'react'
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
    return (
        <div>
            <p>{section.title}</p>
            <Container>
                <Row className='justify-content-around'>
                    {section.restaurants.map(restaurant => {
                        return (

                        <Col xs={6} sm={4} md={2}>
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
                </Row>
            </Container>
        </div>
    );
}