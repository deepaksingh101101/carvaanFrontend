import React, { useEffect, useState } from 'react';
import './LoginModal.css';
import google from '../../assets/home/google.png';
import facebook from '../../assets/home/facebok.jpg';
import { postApi } from '../../helpers/requestHelpers';
import OtpBox from '../otpBox/OtpBox';
import ErrorMessage from '../errorMessage/ErrorMessage';

export default function LoginModal() {
  const [userEmail, setUserEmail] = useState("");
  const [showOtpBox, setShowOtpBox] = useState(false);
  const [showEmailInputError, setShowEmailInputError] = useState(false);
  const [sendBtnContent, setSendBtnContent] = useState("Send Otp");
  const [isUserLogin, setIsUserLogin] = useState(false);


  

  const handleSendOtp = async (e) => {
    setSendBtnContent("Resend Otp");
    e.preventDefault();
    if (userEmail.length === 0) {
      setShowEmailInputError(true);
    } else {
      setShowEmailInputError(false);
      setShowOtpBox(true);
      try {
        const response = await postApi("post", "/users/send_otp_on_email", { email: userEmail });
        console.log(response);
      } catch (error) {
        console.error("Error sending OTP:", error);
      }
    }
  };

  return (
    <div>
      {!isUserLogin && (
        <div className="modal fade" id="exampleModalCenter" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content px-3">
              <div className="modal-header border-0 text-center">
                <h2 className="modal-title w-100 fw-bolder" id="exampleModalLongTitle">Log in</h2>
              </div>
              <div className="modal-body">
                <form>
                  <div className="">
                    <label htmlFor="exampleInputEmail1" className="form-label login_label">Email address</label>
                    <input
                      type="email"
                      value={userEmail}
                      onChange={(event) => { setUserEmail(event.target.value) }}
                      className="form-control border-0 p-2 bg_input_grey"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      required
                    />
                  </div>
                  {showEmailInputError && <ErrorMessage message="Please Enter Email" />}
                  <br />
                  <div className="d-flex px-2">
                    <button className='w-100 my-2 btn btn-primary' onClick={handleSendOtp}><span className='send_otp_btn'>{sendBtnContent}</span></button>
                  </div>
                  {showOtpBox && <OtpBox userEmail={userEmail} />}
                  <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label login_label" htmlFor="exampleCheck1">Keep me signed in</label>
                  </div>
                  <div className="separator login_label mt-3">or use one of these options</div>
                  <div className="d-flex mt-3 justify-content-center login_label">
                    <button type="button" className="btn mt-1 w-100 modal_height_btn">
                      <img src={google} className='' style={{ width: "40px", height: "26px", paddingBottom: "2px" }} alt='G' />
                      Continue with Google
                    </button>
                  </div>
                  <div className="d-flex mt-3 justify-content-center login_label">
                    <button type="button" className="btn mt-2 w-100 py-0 facebook_bg modal_height_btn">
                      <img src={facebook} className='' style={{ width: "40px", height: "40px", paddingBottom: "2px" }} alt='F' />
                      Continue with Facebook
                    </button>
                  </div>
                </form>
              </div>
              <div className="mb-4">
                <div className="d-flex justify-content-center align-items-center">
                  <p className='mb-0'>Don't have an account?</p>
                  <button className='btn fw-semibold' style={{ color: "#273E87" }}>Sign up</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
