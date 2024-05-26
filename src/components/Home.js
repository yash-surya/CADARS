import React, { Component } from 'react';
import photo from '../photo.jpg';


export class Home extends Component {
  render() {
    return (
      <>
        {/* Image on the left and paragraph on the right */}
        <div className="content-container">
          <div className="image-container">
            <img src={photo} alt="Description" />
          </div>
          <div className="content">
            <h1>Car Accident Detection and Reporting System</h1>
            <p>
            Welcome to CADARS, the Car Accident Detection and Reporting System website. Our platform is dedicated to enhancing road safety by providing real-time updates on car accidents. When an accident is detected, our system automatically transmits the exact location to the nearest hospitals and emergency services, ensuring rapid medical response. On this website, you can find up-to-the-minute details of reported accidents, including time and location. CADARS aims to streamline emergency response, minimize injury severity, and save lives by ensuring timely intervention. Stay informed and stay safe with CADARS.
            </p>
            
            
            <div className="button">
              <button onClick={this.handleGetStartedClick} className="button">Get Started</button>
            </div>
          </div>
        </div>
      </>
    );
  }

  handleGetStartedClick = () => {
    // Navigate to the LeafletMap component
    this.props.history.push('/Login');
  };
}
