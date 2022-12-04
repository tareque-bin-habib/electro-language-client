import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Faq = () => {
    const handleHelp = () => {
        alert('Thanks you For Your Response')
    }
    return (
        <div>
            <h2 className='text-center text-primary mt-5'>Electro Learning FAQ</h2>
            <Card className="text-center">
                <Card.Header>Featured</Card.Header>
                <Card.Body>
                    <Card.Title>Need Anything!!!</Card.Title>
                    <Card.Text>
                        Go For HELP
                    </Card.Text>
                    <Button onClick={handleHelp} variant="primary">Go FOR HELP</Button>
                </Card.Body>
                <Card.Footer className="text-muted"></Card.Footer>
            </Card>
        </div>
    );
};

export default Faq;