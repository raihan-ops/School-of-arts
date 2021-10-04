import React, { useState } from 'react';

import img from '../../Image/about.jpg';

const About = () => {


    return (
        <div>
            <h3 className="text-center mt-3">About us</h3>
            <div className="d-lg-flex  p-5 ">
                <div className="p-5 mt-auto mb-auto">
                    <p className="mx-auto">As a leader in contemporary art education, we believe that everyone possesses a unique seed of creativity that should be valued and nurtured. That’s why we are dedicated to innovation, inspiration, and excellence in all our programs. We are a team of professional artists and educators in Toronto, Canada working to provide accessible, dynamic art programs for toddlers, children, teens, and adults.</p>
                </div>
                <div className="p-5 mx-auto">
                    <img className="mx-auto" src={img} alt="" height="400px" width="300px" />
                </div>
            </div>
        </div>

    );
};

export default About;