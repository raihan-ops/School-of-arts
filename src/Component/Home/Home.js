import React, { useEffect, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Item from '../Item/Item';
import useData from '../../Hook/useData';


const Home = () => {
    const [data, setData] = useData();

    const newdata = data.slice(0, 4);
    return (
        <div className="">
            <h1 className="mt-3 mb-5 text-center ">Wellcome to School of Arts</h1>

            <div className="mx-auto mb-5 container">
            <Row xs={1} md={2} lg={2} className="g-4 mx-auto">
                        {
                            newdata.map(dt => <Item key={dt.id} data={dt}>

                            </Item>)
                        }
            </Row>
            <Link to="/services">
                <Button className="mt-3 mb-3 ms-3 fw-bold" variant="warning">See More</Button>
            </Link>
            </div>
        </div>
    );
};

export default Home;