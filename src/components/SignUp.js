// WebSignUp.js

import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hospitalName, setHospitalName] = useState('');
  const [hospitalContact, setHospitalContact] = useState('');
  // const [ambulanceNumber, setAmbulanceNumber] = useState('');
  const [hospitalUniqueId, setHospitalUniqueId] = useState('');
  const [signupSuccess, setSignupSuccess] = useState(false);

  const history = useHistory();

  const handleSignUp = async () => {
    try {
      const response = await axios.post('https://yash1722.pythonanywhere.com/WebSignUp', {
        email,
        password,
        hospitalName,
        hospitalContact,
        hospitalUniqueId
      });

      console.log(response.data);
      setSignupSuccess(true);
      alert('Signup successful: Please Login');
      // Redirect to the login page after successful signup
      history.push('/Login');
    } catch (error) {
      console.error('Error signing up:', error.response ? error.response.data : error.message);
    }
  };

  if (signupSuccess) {
   
    setTimeout(() => {
      history.push('/Login');
    }, 2000);
  }

  const handleLog = async () =>{
    history.push('/Login');
  } 

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Sign Up</h2>
      <form style={styles.form}>
        <label style={styles.label}>
          Email:
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} style={styles.input} />
        </label>
        <br />
        <label style={styles.label}>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} style={styles.input} />
        </label>
        <br />
        <label style={styles.label}>
          Hospital Name:
          <input type="text" value={hospitalName} onChange={(e) => setHospitalName(e.target.value)} style={styles.input} />
        </label>
        <label style={styles.label}>
          Hospital Contact:
          <input type="text" value={hospitalContact} onChange={(e) => setHospitalContact(e.target.value)} style={styles.input} />
        </label>
        {/* <label style={styles.label}>
          Ambulance Number:
          <input type="text" value={ambulanceNumber} onChange={(e) => setAmbulanceNumber(e.target.value)} style={styles.input} />
        </label> */}
        <label style={styles.label}>
          Hospital Unique ID:
          <input type="text" value={hospitalUniqueId} onChange={(e) => setHospitalUniqueId(e.target.value)} style={styles.input} />
        </label>
        <br />
        <div style={styles.buttonContainer}>
          <button type="button" onClick={handleSignUp} style={styles.button}>Sign Up</button>
          <button onClick={handleLog} style={styles.button}>Login</button>
        </div>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '400px',
    margin: '3px auto',
    padding: '40px',
    border: '1px solid #ccc',
    borderRadius: '3px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    marginBottom: '2px',
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
    padding: '14px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
 buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between', // Adjust as needed
    marginTop: '1%', // Add spacing between buttons
  },
};

export default SignUp;
