import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export const MyCard = (props) => {
    return (
        <div style= {{padding: '2rem'}}>
            <Card style={{ width: '15rem'}}>
                <Card.Img variant="top" src={props.image} />
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
