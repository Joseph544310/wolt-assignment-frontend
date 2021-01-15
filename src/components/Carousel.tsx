import React, {useState, useEffect} from 'react'
import {Blurhash} from 'react-blurhash'
import {FaAngleRight} from 'react-icons/fa'
import {Container, Row, Col} from 'react-bootstrap'
import '../css/Carousel.css'

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

    useEffect( () => {
        const width = window.innerWidth
        if (width < 600) {
            setItemsPerLine(2)
        }
        else if(width<900) {
            setItemsPerLine(3)
        }
        else {
            setItemsPerLine(5)
        }

    }, [])

    const [restaurants, setRestaurants] = useState(section.restaurants)
    const [itemsPerLine, setItemsPerLine] = useState(2)

    return (
        <div>
            <p>{section.title}</p>
            <Container>
                <Row className='justify-content-around'>
                    {restaurants.slice(0, Math.min(restaurants.length, itemsPerLine))
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
                    <FaAngleRight
                     onClick={() => setRestaurants([...restaurants.slice(1), restaurants[0]])}
                     className='next-icon'
                     />
                    :null }
                </Row>
            </Container>
        </div>
    );
}