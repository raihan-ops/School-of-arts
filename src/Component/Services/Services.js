import React from 'react';
import { Row } from 'react-bootstrap';
import useData from '../../Hook/useData';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [data, setData] = useData();


    return (
        <div>
            <h2 className="text-center mt-3">Our Sevices</h2>
            <div className="mx-auto mb-5 container mt-5">
                <Row xs={1} md={2} lg={3} className="g-4 ">
                    {
                        data.map(dat => <ServiceCard key={dat.id} data={dat}>

                        </ServiceCard>)
                    }
                </Row>
            </div>
        </div>


    );
};

export default Services;