// Login.js

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const history = useHistory();
  window.history.replaceState(null, '', '/DataFetcher');
  const styles = {
    container: {
      maxWidth: '400px',
      margin: '110px auto', // Adjust the top margin to provide space for the navbar
      padding: '50px',
      border: '1px solid #ccc',
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    },
    heading: {
      textAlign: 'center',
      marginBottom: '20px',
      color:"black",
    },
    label: {
      display: 'block',
      marginBottom: '8px',
      fontWeight: 'bold',
    },
    input: {
      width: '100%',
      padding: '8px',
      marginBottom: '12px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      
    },
    button: {
      backgroundColor: 'green',
      color: '#fff',
      padding: '10px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      marginRight: '8px',
    },
    disabledButton: {
      backgroundColor: '#a0a0a0',
      cursor: 'not-allowed',
    },
    errorMessage: {
      color: 'red',
      marginBottom: '10px',
    },
  };

  const handleLogin = async () => {
    try {
      setLoading(true);

      // Basic form validation
      if (!email || !password) {
        setError('Please enter both email and password');
        return;
      }

      const response = await axios.post('https://yash1722.pythonanywhere.com/WebLogin', { email, password });

      console.log(response.data);

      if (response.status === 200) {
        const data = response.data;

        if (data.message === 'Login successful') {
          alert('Login successful: Welcome User');

          // Navigate to the home page after successful login
          history.push('/DataFetcher');

          console.log('Login success');
        } else {
          setError('Authentication Failed: Invalid email or password');
          console.log('Login failed');
        }
      } else {
        console.error(`Network response was not ok: ${response.statusText}`);
        setError('An error occurred during login. Please try again.');
      }
    } catch (error) {
      console.error('Error during login:', error.message);
      setError('Wrong email or password');
    } finally {
      setLoading(false);
    }
  };

  const handleSignUp = () => {
    history.push('/SignUp');
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Login</h2>
      <label style={styles.label}>email:</label>
      <input type="text" value={email} onChange={(e) => setemail(e.target.value)} style={styles.input} />

      <label style={styles.label}>Password:</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} style={styles.input} />

      {error && <div style={styles.errorMessage}>{error}</div>}

      <button onClick={handleLogin} disabled={loading} style={loading ? styles.disabledButton : styles.button}>
        {loading ? 'Logging in...' : 'Login'}
      </button>
      <button onClick={handleSignUp} disabled={loading} style={styles.button}>
        Sign Up
      </button>
    </div>
  );
};

export default Login;
