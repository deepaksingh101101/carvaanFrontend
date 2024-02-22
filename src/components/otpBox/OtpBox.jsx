import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import './OtpBox.css';
import ErrorMessage from '../errorMessage/ErrorMessage';
import { postApi } from '../../helpers/requestHelpers';

export default function OtpBox({ userEmail }) {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(['', '', '', '', '', '']); // Initialize state with an array of 6 empty strings
  const inputsRef = useRef([]);
const [showOtpError, setShowOtpError] = useState(false)

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

  const handleSubmitOtp = async (e) => {
    e.preventDefault();
    const otpString = getOtpAsString(); // Convert OTP array to string
  
    if (otpString.length < 6) {
      setShowOtpError(true);
    } else {
      setShowOtpError(false);
      try {
        const response = await postApi("post", "/users/verify_otp", { email: userEmail, otp: otpString, remember: true });
        if(response){
          localStorage.setItem("accessToken",response.data.accessToken)
          localStorage.setItem("refreshToken",response.data.refreshToken)
          navigate('/')
          
        }
      } catch (error) {
        console.error("Error sending OTP:", error);
      }
    }
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
      {
        showOtpError?(
          <ErrorMessage message="Please Enter Otp"/>
        ):("")
      }
      <button className='btn my-3 w-100 btn-primary' onClick={handleSubmitOtp}>Verify Me</button>
    </section>
  );
}
