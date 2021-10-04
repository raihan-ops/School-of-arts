import React from 'react';
import { Button, Form } from 'react-bootstrap';

const Contact = () => {
    return (
        <div>
            <h2 className="text-center mt-3">Contact us</h2>
            <div className="container mt-5">
            <Form >
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Write Your Comment</Form.Label>
                    <Form.Control as="textarea" rows={3} />

                <Button className="mt-3 mb-3  fw-bold" variant="warning">Send</Button>
                </Form.Group>
            </Form>
            </div>
            <div className="container text-center">
                <h4>Further information</h4>

                <p> <span>Email</span>:SOA@gamil.com</p>
                <p><small>Phone:+880170000000</small></p>

                <address> Road 11,Khilkhet,Dhaka</address>
            </div>
            
        </div>
    );
};

export default Contact;