import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import {  useDispatch } from 'react-redux';

import './LoginModal.css'
import google from '../../assets/home/google.png'
import facebook from '../../assets/home/facebok.jpg'
// import axios from "axios";
import   {postApi}  from '../../helpers/requestHelpers'
import { useState } from 'react';
import OtpBox from '../otpBox/OtpBox';
import ErrorMessage from '../errorMessage/ErrorMessage'
import  {useForm} from 'react-hook-form'
import { setIsAuthenticated } from '../../store/slices/isAuthenticated';
export default function LoginModal() {

  const {register,handleSubmit,formState:{errors}}=useForm()


const [userEmail, setUserEmail] = useState("");
const [showOtpBox, setShowOtpBox] = useState(false);
// const [showEmailInputError,setShowEmailInputError]= useState(false);
const[sendBtnContent,setSendBtnContent]=useState("Send Otp");
// const [isUserLogin, setIsUserLogin] = useState(false)
const handleSendOtp =  (data) => {
  setSendBtnContent("Resend Otp")
    // setShowEmailInputError(false);
    setShowOtpBox(true);
    try {
      const response =  postApi("post", "/users/send_otp_on_email", { "email":data });
      console.log(response);
    } catch (error) {
      console.error("Error sending OTP:", error);
    }
};

const dispatch = useDispatch();
const [modal, setModal] = useState(true)
const handleGoogleLogin=async (email)=>{
  try {
    
    const response = await postApi("post", "/users/social_login", { "email":email });
    console.log(response)
    if(response.data.user.email){
      localStorage.setItem("accessToken",response.data.accessToken)
      localStorage.setItem("refreshToken",response.data.refreshToken)
      dispatch(setIsAuthenticated())
      setModal(false)
    }
  } catch (error) {
    console.log(error)
  }
}

const formSubmit=(data)=>{
  setUserEmail(data)
  handleSendOtp(data.email)
console.log(data)
}

  return (
 (
        <div className="modal fade  " id="exampleModalCenter" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" >
            <div className="modal-dialog modal-dialog-centered " role="document">
                <div className="modal-content px-3 ">
                    <div className="modal-header border-0 text-center">
                        <h2 className="modal-title w-100 fw-bolder " id="exampleModalLongTitle">Log in</h2>
                    </div>
                    <div className="modal-body">
                    <form onSubmit={handleSubmit(formSubmit)}>
  <div className="">
    <label htmlFor="exampleInputEmail1"  className=" form-label login_label">Email address</label>
    <input 
    type="email" 
    // value={userEmail} 
    // onChange={(event) => { setUserEmail(event.target.value) }} 
    className={`form-control border-0 p-2 bg_input_grey ${errors.email? "is-invalid":""} `} 
    id="exampleInputEmail1" 
    aria-describedby="emailHelp" 
    required
    {...register("email",{required:true})}
/>
{errors.email &&  <div className="invalid-feedback">
      Email is Required
    </div>}
    <div className="d-flex px-2">
  <button type='submit'  className='w-100 my-2 btn btn-primary   '    ><span className='send_otp_btn'>{sendBtnContent}</span></button>
</div>
  </div>

{
  // showEmailInputError?(<ErrorMessage message="Please Enter Email"/>):("")
}


  <br/>
{/* <div className="d-flex px-2">
  <button type='submit'  className='w-100 my-2 btn btn-primary   '  onClick={handleSendOtp}  ><span className='send_otp_btn'>{sendBtnContent}</span></button>
</div> */}
  {/* need to be changed */}
  {/* <div className="mb-3">
    <label htmlFor="exampleInputotp1" className="form-label login_label">Otp</label>
    <input type="text" className="form-control p-2 border-0 bg_input_grey" id="exampleInputotp1"/>
  </div> */}


{showOtpBox && showOtpBox?(
  <OtpBox userEmail={userEmail}/>
):(
""
)
}



  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label login_label" htmlFor="exampleCheck1">Keep me signed in</label>
  </div>
{/* <div className="d-flex  justify-content-center login_label">
<button type="button"  className="btn mt-3 w-100 modal_btn modal_height_btn">Continue with email </button>
</div> */}
 
  {/* <button type="submit" className="btn btn-primary">Submit</button> */}

  <div className="separator login_label my-3 ">or use one of these options</div>

  {/* <div className="d-flex mt-3 justify-content-center login_label">
<button type="button"  className="btn mt-1 w-100  modal_height_btn">
<img src={google} className='' style={{width:"40px", height:"26px",paddingBottom:"2px"}} alt='G'/>

    Continue with Google </button>
</div> */}


<GoogleOAuthProvider clientId="491933368128-pui22868ftilakfnf1ju2tu8mnhnquae.apps.googleusercontent.com">
<GoogleLogin
  onSuccess={credentialResponse => {
    const decoded = jwtDecode(credentialResponse.credential);
    handleGoogleLogin(decoded.email)
  }}
  width={400}
  onError={() => {
    console.log('Login Failed');
  }}
/>
  </GoogleOAuthProvider>



{/* <div className="d-flex mt-3 justify-content-center login_label">
<button type="button"  className="btn mt-2 w-100 py-0 facebook_bg modal_height_btn">
<img src={facebook} className='' style={{width:"40px", height:"40px",paddingBottom:"2px"}} alt='G'/>

    Continue with Facebook </button>
</div> */}


</form>
                    </div>
                    <div className="mb-4">
                        <div className="d-flex justify-content-center align-items-center">
                            <p className='mb-0'>Don't have an account?</p>
                            <button className='btn fw-semibold ' style={{color:"#273E87"}}>Sign up</button>
                        </div>
                       </div>
                </div>
            </div>
        </div>
    )
);
}
