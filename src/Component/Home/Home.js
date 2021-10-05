import React, { useEffect, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Item from '../Item/Item';
import useData from '../../Hook/useData';
import img from '../../Image/home.jpg';


const Home = () => {
    const [data, setData] = useData();

    const newdata = data.slice(0, 4);
    return (
        <div className="">
            <div className="mb-5 mt-5 d-lg-flex d-md-flex container justify-content-md-between justify-content-lg-between " >
                <div className="mt-auto mb-auto p-5">
                    <h1 className="">Wellcome to School of Arts</h1>
                    <p><small>As a leader in contemporary art education, we believe that everyone possesses a unique seed of creativity that should be valued and nurtured. That’s why we are dedicated to innovation, inspiration, and excellence in all our programs. We are a team of professional artists and educators in Toronto, Canada working to provide accessible, dynamic art programs for toddlers, children, teens, and adults
                    </small></p>
                    <Button className="text-white fw-bold" variant="primary">Get Started</Button>
                </div>
                <div className="m-5">
                    <img className="rounded-circle" src={img} alt="" height="350px" width="350px" />
                </div>
            </div>


            <div className="mx-auto mb-5 container">
                <Row xs={1} md={2} lg={2} className="g-4 mx-auto">
                    {
                        newdata.map(dt => <Item key={dt.id} data={dt}>

                        </Item>)
                    }
                </Row>
                <Link to="/services">
                    <Button className="mt-5 mb-3 ms-5 fw-bold" variant="success">See More</Button>
                </Link>
            </div>
        </div>
    );
};

export default Home;