import React, { useState, useEffect, useRef } from 'react';
import axios from "axios";
import './OtpBox.css';

export default function OtpBox({ userEmail }) {
  const [otp, setOtp] = useState(['', '', '', '', '', '']); // Initialize state with an array of 6 empty strings
  const inputsRef = useRef([]);

  useEffect(() => {
    inputsRef.current[0].focus();
  }, []);

  // Function to handle changes in the OTP input fields
  const handleOtpChange = (index, value) => {
    const newOtp = [...otp]; // Create a copy of the OTP array
    newOtp[index] = value; // Update the value at the specified index
    setOtp(newOtp); // Update the state with the new OTP array

    // Handle focus on next input
    if (value !== '' && index < otp.length - 1) {
      inputsRef.current[index + 1].focus();
    }
  };

  // Function to convert the OTP array to a single string
  const getOtpAsString = () => {
    return otp.join('');
  };

  const handleSubmitOtp = (e) => {
    e.preventDefault();
    const otpString = getOtpAsString(); // Convert OTP array to string
  
    axios.post("https://fb7b-103-16-69-133.ngrok-free.app/users/verify_otp", {
      email: userEmail,
      otp: otpString,
      remember: true
    })
    .then((response) => {
      console.log(response);
    });
  };

  const handleKeyUp = (index, e) => {
    if (e.key === 'Backspace' && index > 0 && otp[index] === '') {
      inputsRef.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedValue = e.clipboardData.getData('text').slice(0, otp.length);

    const newOtp = [...otp];
    pastedValue.split('').forEach((value, index) => {
      newOtp[index] = value;
    });

    setOtp(newOtp);
  };

  return (
    <section className="container-fluid otp_section d-flex flex-column justify-content-center align-items-center login_label mb-4 py-2 d-block">
      <p>Enter OTP</p>
      <div className="row d-flex justify-content-center">
        {otp.map((value, index) => (
          <input
            key={index}
            type="text"
            className="otp_input mx-1 text-center"
            maxLength={1} // Set maximum length of each input field to 1
            value={value}
            onChange={(e) => handleOtpChange(index, e.target.value)}
            onPaste={handlePaste}
            onKeyUp={(e) => handleKeyUp(index, e)}
            ref={(input) => {inputsRef.current[index] = input}}
          />
        ))}
      </div>
      <button className='btn my-3 w-100 btn-primary' onClick={handleSubmitOtp}>Verify Me</button>
    </section>
  );
}
