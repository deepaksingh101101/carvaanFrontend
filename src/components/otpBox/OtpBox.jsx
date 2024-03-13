import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import './OtpBox.css';
import ErrorMessage from '../errorMessage/ErrorMessage';
import { postApi } from '../../helpers/requestHelpers';
import { setIsAuthenticated } from '../../store/slices/isAuthenticated';
import {  useDispatch } from 'react-redux';

export default function OtpBox({ userEmail }) {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(['', '', '', '', '', '']); // Initialize state with an array of 6 empty strings
  const inputsRef = useRef([]);
  const [showOtpError, setShowOtpError] = useState(false);
  const [wrongOtpError, setWrongOtpError] = useState(false);
  const [isDataBsAdded, setIsDataBsAdded] = useState(false);

  useEffect(() => {
    inputsRef.current[0].focus();
  }, []);

  useEffect(() => {
    if (isDataBsAdded) {
      document.getElementById('verifyButton').click();
    }
  }, [isDataBsAdded]);

  const handleOtpChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value !== '' && index < otp.length - 1) {
      inputsRef.current[index + 1].focus();
    }
  };

  const getOtpAsString = () => {
    return otp.join('');
  };
  const dispatch = useDispatch();


  const handleSubmitOtp = async (e) => {
    e.preventDefault();
    const otpString = getOtpAsString();

    if (otpString.length < 6) {
      setShowOtpError(true);
    } else {
      setShowOtpError(false);
      try {
        console.log(userEmail,otpString,)
        const response = await postApi("post", "/users/verify_otp", { email: userEmail.email, otp: otpString, remember: true });
        console.log(response)
        if(response.data.user.email){
          localStorage.setItem("accessToken",response.data.accessToken)
          localStorage.setItem("refreshToken",response.data.refreshToken)
          setWrongOtpError(false)
          dispatch(setIsAuthenticated())
          setIsDataBsAdded(true)
        }
        else{
          setWrongOtpError(true)
        }
      } catch (error) {
        setWrongOtpError(true)
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
            maxLength={1}
            value={value}
            onChange={(e) => handleOtpChange(index, e.target.value)}
            onPaste={handlePaste}
            onKeyUp={(e) => handleKeyUp(index, e)}
            ref={(input) => {inputsRef.current[index] = input}}
          />
        ))}
      </div>
      {showOtpError && <ErrorMessage message="Please Enter OTP" />}
      {wrongOtpError && <ErrorMessage message="Invalid OTP" />}
      <button
        id="verifyButton"
        className='btn my-3 w-100 btn-primary'
        data-bs-dismiss={isDataBsAdded ? "modal" : ""}
        onClick={handleSubmitOtp}
      >
        Verify Me
      </button>
    </section>
  );
}
