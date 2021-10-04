
import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ServiceCard = (props) => {
    const{image,name,id,details}=props.data;
    return (
        <Col className="bt-5 mb-5">
            <Card  className="mx-auto" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} height="200px" width="180px" />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                       {details.slice(0,80)}
                    </Card.Text>
                    <Link to={`/details/${id}`}>

                <Button variant="warning">More Details</Button>
            </Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ServiceCard;