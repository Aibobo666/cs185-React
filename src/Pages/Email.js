import React from 'react'
import {useState } from "react"; 
import validator from 'validator';

const Email = () => {

    const [emailError, setEmailError] = useState('') 
    const validateEmail = () => { 
      var email = document.getElementById('userEmail')
      console.log(email.value)
      if (validator.isEmail(email.value)) { 
        setEmailError('Email successfully recorded') 
      } else { 
        setEmailError('Invalid Email address') 
      } 
    }

    

    return (
        <div style={{ 
            margin: 'auto', 
            marginLeft: '300px', 
          }}> 
            <pre> 
              <h2>Please submit a valid emial address below:</h2> 
              <input type="text" id="userEmail" name='Email' ></input><br></br>
              <button onClick={() => validateEmail()}>submit</button><br></br>
              <span style={{ 
                fontWeight: 'bold', 
                color: 'red', 
              }}>{emailError}</span>
            </pre> 
          </div>
    )
}

export default Email
