import React, { useState } from 'react';
import './CustomPackages.css';
import customPackageImg from '../../assets/customPackages/custom_packeges_mobile_img.png';
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";

export default function CustomPackages() {
  const [adultCount, setAdultCount] = useState(0);
  const [childCount, setChildCount] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    departureDate: '',
    days: '',
    travelers: ''
  });

  const handleIncrement = (type) => {
    if (type === 'adult') {
      setAdultCount(prevCount => prevCount + 1);
    } else if (type === 'child') {
      setChildCount(prevCount => prevCount + 1);
    }
  };

  const handleDecrement = (type) => {
    if (type === 'adult' && adultCount > 0) {
      setAdultCount(prevCount => prevCount - 1);
    } else if (type === 'child' && childCount > 0) {
      setChildCount(prevCount => prevCount - 1);
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <>
      <div className="container px-2 px-sm-5 px-md-5 px-lg-5 custom_packages my-5 py-5" style={{maxWidth:"936px"}}>
        <div className="row">
          <div className="col-lg-5 d-flex flex-column justify-content-between my-5">
            <div className="custom_top">
            <h2 className='fw-bold text-center text-lg-start '>Request Your Custom Packages</h2>
            <p className='py-3 text-center text-lg-start grey_text'>Tailor-Made Adventures Customize Your Trip with Ease and Flexibility!</p>
            </div>
             <div className="custom_img my-5 d-flex justify-content-center mt-5">
              <img src={customPackageImg} style={{maxHeight:"348px"}}  className='custom_img' alt='mobile_img'/>
            </div>
            <div className="custom_bottom px-3">
            <h2 className='fw-bold'>Still Having An Issue</h2>
<button className='btn book_a_call mt-4'>Book a call</button>
            </div>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-6">
            <form className='ms-0  ms-lg-5' onSubmit={handleSubmit}>
              <div className="mb-3">
                <input type="text"  name="name" placeholder='Your Name' value={formData.name} onChange={handleInputChange} className="form-control input_padding" id="exampleInputName1" />
              </div>
              <div className="mb-3">
                <input type="email" name="email" placeholder='Your Email' value={formData.email} onChange={handleInputChange} className="form-control input_padding" id="exampleInputEmail1" />
              </div>
              <div className="mb-3">
                <input type="text" name="phone" placeholder='Your Phone' value={formData.phone} onChange={handleInputChange} className="form-control input_padding" id="exampleInputNumber1" />
              </div>
              <div className="mb-3">
                <input type="text" name="destination" placeholder='Your Destination' value={formData.destination} onChange={handleInputChange} className="form-control input_padding" id="exampleInputDestination1" />
              </div>
              <div className="mb-3">
                <input placeholder='Enter Departure Date' onClick={(e)=>{console.log(e)}} onFocus={(e)=>{e.type='date'}} onBlur={(e)=>{e.type='text'}}
 type="date" name="departureDate"  value={formData.departureDate} onChange={handleInputChange} className="form-control input_padding" id="date" />
              </div>
              <div className="mb-3">
                <input type="number" name="days" placeholder='Enter Days' min="1" value={formData.days} onChange={handleInputChange} className="form-control input_padding" id="exampleInputDays1" />
              </div>
              {/* <div className="mb-3">
                <input type="number" name="travelers" placeholder='Enter Travelers' min="1" value={formData.travelers} onChange={handleInputChange} className="form-control" id="exampleInputTravelers1" />
              </div> */}

              <div className="mt-4 px-2 py-2 num_of_travelers" style={{border:""}}>
                <h6 className='grey_text' >Total Travelers</h6>
              <div className="mb-3">
                <div className="adult d-flex justify-content-between mb-3 mt-4 px-3">
                  <h6 className='mb-0'>Adult[ <span className='blue'>8yr+</span> ]</h6>
                  <div className="d-flex align-items-center">
                    <FiMinusCircle className='plus_minus ' onClick={() => handleDecrement('adult')} />
                    <h5  style={{minWidth:"60px"}} className='fw-bold mx-2 text-center'  onChange={(e)=>{setAdultCount(e.target.value)}}>{adultCount}</h5>
                    <FiPlusCircle className='plus_minus ' onClick={() => handleIncrement('adult')} />
                  </div>
                </div>
                <hr style={{color:"grey"}}/>
                <div className="child d-flex justify-content-between mb-3 mt-4 px-3">
                  <h6 className='mb-0'>Child[ <span className='blue'>Below 8yr</span> ]</h6>
                  <div className="d-flex align-items-center">
                    <FiMinusCircle className='plus_minus ' onClick={() => handleDecrement('child')} />
                    <h5 className='fw-bold mx-2 text-center '  style={{minWidth:"60px",userSelect:"none"}}>{childCount} </h5>
                    <FiPlusCircle className='plus_minus ' onClick={() => handleIncrement('child')} />
                  </div>
                </div>
              </div>
              </div>


              <div className="rating px-2 py-2  my-4 ">
                <h6 className='grey_text' style={{userSelect:'none'}}>Select Hotel Rating</h6>
                <div className="starCheckBox grey_text d-flex justify-content-between align-items-center px-1 ">
                <div className="form-check  my-1 my-sm-1 my-md-1 my-lg-3">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label className="form-check-label" htmlFor="flexRadioDefault1">
   3 Rating
  </label>
</div>
<div className="form-check  my-1 my-sm-1 my-md-1 my-lg-3">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
  <label className="form-check-label" htmlFor="flexRadioDefault2">
    4 Rating
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
  <label className="form-check-label" htmlFor="flexRadioDefault3">
    5 Rating
  </label>
</div>
                </div>
              </div>


              <div className="meal px-2 py-2  my-4 ">
                <h6 className='grey_text' style={{userSelect:'none'}}>Select Your Meal Type</h6>
                <div className="starCheckBox grey_text d-flex justify-content-between px-1 ">
                <div className="form-check my-1 my-sm-1 my-md-1 my-lg-3">
               <input className="form-check-input" type="radio" name="flexRadioDefault1" id="flexRadioDefault4"/>
               <label className="form-check-label" htmlFor="flexRadioDefault4">
                No Meal
               </label>
            </div>
            <div className="form-check my-1 my-sm-1 my-md-1 my-lg-3">
              <input className="form-check-input" type="radio" name="flexRadioDefault1" id="flexRadioDefault5" />
              <label className="form-check-label" htmlFor="flexRadioDefault5">
                Only Breakfast
              </label>
</div>

                </div>






                <div className="starCheckBox grey_text d-flex flex-wrap justify-content-between px-1">
                <div className="form-check my-1 my-sm-1 my-md-1 my-lg-3">
               <input className="form-check-input" type="radio" name="flexRadioDefault1" id="flexRadioDefault5"/>
               <label className="form-check-label" htmlFor="flexRadioDefault5">
                Breakfast+Dinner/Lunch 
               </label>
                </div>
                 <div className="form-check my-1 my-sm-1 my-md-1 my-lg-3">
                <input className="form-check-input" type="radio" name="flexRadioDefault1" id="flexRadioDefault6" />
                 <label className="form-check-label" htmlFor="flexRadioDefault6">
                All Meals
                </label>
                </div>

                </div>




              </div>




              <div className="mb-3">
                <textarea className="form-control"  placeholder="Your Message" id="exampleFormControlTextarea1" rows="4" style={{resize:"none"}}></textarea>
              </div>
              <button type="submit" className="contact_btn btn-primary py-2 mt-4 w-100"><span className=''>Submit Now</span></button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}