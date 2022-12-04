import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CheckOut = () => {
    const checkout = useLoaderData()
    return (
        <div>
            <Card>
                <Card.Header as="h5">Check Out page:{checkout.id}</Card.Header>
                <Card.Body>
                    <Card.Title>{checkout.name}</Card.Title>
                    <Card.Text>
                        {checkout.details}
                        <p className='text-primary fw-bold'>Price: ${checkout.price}</p>
                    </Card.Text>
                    <Button variant="primary">Purchase</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CheckOut; 