import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Course.css'

const Course = ({ product }) => {
    const { id, img, name, details, price } = product;
    return (
        <Card>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {
                        details.length > 250 ?
                            <p>{details.slice(0, 100) + '...'}</p>
                            :
                            <p>{details}</p>
                    }
                    <span>Price: ${price}</span>
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
};

export default Course;