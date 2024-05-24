// Navigation.js
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

const Navigation = ({ renderNavigation }) => {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const history = useHistory();

  const logout = () => {
    // Add your logout logic here
    setAuthenticated(false);
    // Redirect to the login page
    history.push('/Login');
  };

  return (
    <div>
      {renderNavigation && (
        <div className="nav">
          <div className="logo">
            <span>Car Accident Detection and Reporting System</span>
          </div>
          <ul>
            <li><Link to='/'>Home</Link></li>
            {isAuthenticated ? (
              <>
                <li><button onClick={logout}>Logout</button></li>
              </>
            ) : (
              <>
                <li><Link to='/About'>About</Link></li>
                <li><Link to='/'>Contact Us</Link></li>
                <li><Link to='/SignUp'>Sign in</Link></li>
              </>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navigation;
