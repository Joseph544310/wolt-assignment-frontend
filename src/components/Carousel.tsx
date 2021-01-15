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

    const convertWidthToItemsPerLine = (width:number) :number=> {
        if (width < 767) return 1;
        else if(width < 991) return 2;
        else if (width < 1199) return 4;
        return 5;
    }

    useEffect( () => {

        const handleWindowResize = () => setItemsPerLine(convertWidthToItemsPerLine(window.innerWidth))
        window.addEventListener("resize", handleWindowResize);

        return () => window.removeEventListener("resize", handleWindowResize);

    }, [])

    const [restaurants, setRestaurants] = useState(section.restaurants)
    const [itemsPerLine, setItemsPerLine] = useState(convertWidthToItemsPerLine(window.innerWidth))

    return (
        <div>
            <p>{section.title}</p>
            <Container>
                <Row className='justify-content-around'>
                    {restaurants.slice(0, Math.min(restaurants.length, itemsPerLine))
                    .map(restaurant => {
                        return (

                        <Col xs={10} sm={5} md={2} key={restaurant.name} className='restaurant-card'>
                            <Blurhash
                            hash={restaurant.blurhash}
                            width={200}
                            height={130}
                            resolutionX={32}
                            resolutionY={32}
                            punch={1}
                        />
                        <p>{restaurant.online?'Online':'Offline'}</p>
                        <p>{restaurant.name}</p>

                        </Col>)
                    })}
                    
                    <Col xs={2} sm={1}>
                        {restaurants.length>5?
                        <FaAngleRight
                        onClick={() => setRestaurants([...restaurants.slice(1), restaurants[0]])}
                        className='next-icon'
                        />
                        :null }
                    </Col>

                </Row>
            </Container>
        </div>
    );
}