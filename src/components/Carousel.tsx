import React, {useState, useEffect} from 'react'
import {FaAngleRight, FaAngleLeft} from 'react-icons/fa'
import {Container, Row, Col} from 'react-bootstrap'
import {RestaurantCard} from './RestaurantCard'
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
        <Container>
            <Row>
                <Col xs={2}>
                    {restaurants.length>itemsPerLine?
                    <FaAngleLeft
                    onClick={() => setRestaurants([restaurants[restaurants.length - 1], ...restaurants.slice(0, restaurants.length - 1)])}
                    className='next-icon'
                    />
                    :null }
                </Col>  
                <Col xs={8}><h1>{section.title}</h1></Col>
                <Col xs={2}>
                    {restaurants.length>itemsPerLine?
                    <FaAngleRight
                    onClick={() => setRestaurants([...restaurants.slice(1), restaurants[0]])}
                    className='next-icon'
                    />
                    :null }
                </Col>
            </Row>
            <Row className='justify-content-around'>
                {restaurants.slice(0, Math.min(restaurants.length, itemsPerLine))
                .map(restaurant => 
                <RestaurantCard restaurant={restaurant} key={restaurant.name}/>
                )}
            </Row>
        </Container>
    );
}