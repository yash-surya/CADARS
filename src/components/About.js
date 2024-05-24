import React from 'react';


const About = () => {
    return (
        <div className="aboutcontainer">
            <h1>ABOUT US</h1>
           
            <div className="contact-items">
                <div className="customer-care">
                    <h3>Our Vision</h3>
                    <p>"Our vision at innoVison is to pioneer a world where safety is not just a standard, but a transformative experience.
                       We aspire to lead the way in innovative safety solutions, leveraging technology to safeguard lives and empower communities. Through our visionary approach, we aim to inspire a culture of proactive safety, ensuring a brighter, more secure future for generations to come"</p>
                   
                </div>
                <div className="write-us">
                    <h3>Our Mission</h3>
                    <p>"InnoVison's mission is to revolutionize safety solutions globally. We leverage cutting- edge technology and innovation to create visionary products and services that protect and empower individuals, organizations, and communities.
                        Through relentless pursuit of excellence and collaboration, we strive to build a safer, more secure future for all."</p>
                    
                </div>
                <div className="sales-market">
                    <h3>Our Products</h3>
                    <p>1. Car Accident Detection and Reporting System.</p>
                       <p>2. Smart Headlight System.</p>
                        <p>3. Password based Door Lock.</p>
                
                </div>
            </div>
        </div>
    );
};

export default About;
