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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
