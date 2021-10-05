import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Item = (props) => {
    const { image, name, details, fees,id } = props.data
    return (
        <Col className="">
            <Card className="mx-auto" style={{ width: '20rem' }}>
                <Card.Img variant="top" src={image} height="200px" width="180px" />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {details.slice(0, 70)}
                    </Card.Text>
                    <Card.Text>
                        Fees: $ {fees}
                    </Card.Text>
                    <Link to={`/details/${id}`}>

                        <Button variant="warning">More Details</Button>
                    </Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Item;