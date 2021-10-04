import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const Item = (props) => {
    const { image,name,details,fees} = props.data
    return (
        <Col className="">
            <Card className="mx-auto" style={{ width: '25rem' }}>
                <Card.Img variant="top" src={image} height="200px" width="180px"/>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {details.slice(0,70)}
                    </Card.Text>
                    <Card.Text>
                       Fees: $ {fees}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Item;