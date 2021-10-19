import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export const MyCard = (props) => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>
                    Gender: {props.gender}
                    </Card.Text>
                    <Card.Text>
                    Status: {props.status}
                    </Card.Text>
                    <Button variant="primary" > Detail</Button>
                </Card.Body>
            </Card>
        </div>
    )
}
