import  { useState } from 'react';
import './CustomPackages.css';
import customPackageImg from '../../assets/customPackages/custom_packeges_mobile_img.png';
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";
import Navbar from '../../components/navbar/Navbar'
import circle from '../../assets/customPackages/Ellipse 81.png'
import Swal from 'sweetalert2'
import {useNavigate} from 'react-router-dom'
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { postApi } from '../../helpers/requestHelpers';
import LoaderComponent from '../../components/loader/LoaderComponent';


export default function CustomPackages() {
  const [adultCount, setAdultCount] = useState(0);
  const [childCount, setChildCount] = useState(0);

const [loader, setLoader] = useState(false)

  const [hotel_ratings,setHotel_ratings]=useState([])
  const [meal_types,setMeal_types]=useState([])
  
  const handleAddRating = (value) => {
    if (hotel_ratings.includes(value)) {
      // If value already exists, remove it from the array
      const updatedRatings = hotel_ratings.filter((rating) => rating !== value);
      setHotel_ratings(updatedRatings);
    } else {
      // If value doesn't exist, add it to the array
      setHotel_ratings([...hotel_ratings, value]);
    }
  };
  
  const handleAddMeals = (value) => {
    if (meal_types.includes(value)) {
      // If value already exists, remove it from the array
      const updatedRatings = meal_types.filter((rating) => rating !== value);
      setMeal_types(updatedRatings);
    } else {
      // If value doesn't exist, add it to the array
      setMeal_types([...meal_types, value]);
    }
  };
  
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });

const navigate=useNavigate();

  const initialValues = {
    user_name: '',
    user_email: '',
    phone_number: '',
    destination: '',
    departure_date: '',
    duration_days: 0,
    message:'',
  };


  const onSubmit = async (values) => {
    setLoader(true)
const data={
  ...values,
  meal_types,
  hotel_ratings,
  adult_seats_required:adultCount,
  child_seats_required:childCount
}
console.log(data)
    // Handle form submission here
try {
  const response = await postApi("post", "/custom_packages", data);
  if(response.data.id){
    setLoader(false)
    Toast.fire({
      icon: "success",
      title: "Request Submited successfully"
    });
    navigate('/')
    
  }
  else{
    setLoader(false)
    Toast.fire({
      icon: "error",
      title: "Something went's wrong"
    });
  }
} catch (error) {
  console.log("error in sending data")
}  };

  const validation = useFormik({
    initialValues,
    onSubmit,
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






  return (
    <>
       <Navbar bg={"#13182F"}/> 
    {loader && 
    
    <div style={{minHeight:"80vh"}} className=" mt-5 pt-5 d-flex w-100 h-100 justify-content-center align-items-center">
      <LoaderComponent/>
    </div>
    
    
    }
   {!loader && 
    <div className="pt-lg-5">
    <div className="container px-2 px-sm-5 mt-5 px-md-5 px-lg-5 custom_packages my-5 py-5" style={{maxWidth:"936px"}}>
        <div className="row">
          <div className="col-lg-5 d-flex flex-column justify-content-between my-5">
            <div className="custom_top position-relative " >
              <img   className='position-absolute d-none d-lg-block ' style={{top:"-20px",left:"-20px"}} src={circle} alt="" />
            <h2 style={{zIndex:"2"}}   className='position-relative fw-bold text-center text-lg-start '>Request Your Custom Packages</h2>
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
            <form className='ms-0  ms-lg-5'  onSubmit={(e) => {
                      e.preventDefault();
                      validation.handleSubmit();
                      
                    }}>
              <div className="mb-3">
                <input type="text"  name="user_name" placeholder='Your Name' 
                 onChange={validation.handleChange}
                 onBlur={validation.handleBlur}
                 value={validation.values.user_name || ''}
               className="form-control input_padding" id="exampleInputName1" />
              </div>
              <div className="mb-3">
                <input type="email"
                 onChange={validation.handleChange}
                 onBlur={validation.handleBlur}
                 value={validation.values.user_email || ''}
                 name='user_email'
             placeholder='Your Email'   className="form-control input_padding" id="exampleInputEmail1" />
              </div>
              <div className="mb-3">
                <input type="text"
                 onChange={validation.handleChange}
                 onBlur={validation.handleBlur}
                 value={validation.values.phone_number || ''}
                name="phone_number" placeholder='Your Phone'  className="form-control input_padding" id="exampleInputNumber1" />
              </div>
              <div className="mb-3">
                <input type="text" 
                 onChange={validation.handleChange}
                 onBlur={validation.handleBlur}
                 value={validation.values.destination || ''}
                name="destination" 
                placeholder='Your Destination'  className="form-control input_padding" id="exampleInputDestination1" />
              </div>
              <div className="mb-3">
              <h6 className='ms-1' >Departure Date</h6>
                <input placeholder='Enter Departure Date'  type="date"
                  onChange={validation.handleChange}
                  onBlur={validation.handleBlur}
                  value={validation.values.departure_date || ''}
                 name="departure_date" 
 
 className="form-control input_padding" id="date" />
              </div>
              <div className="mb-3">
                <input type="number"
                 name="duration_days"
                 onChange={validation.handleChange}
                 onBlur={validation.handleBlur}
                 value={validation.values.duration_days || ''}
                 placeholder='Enter Days' min="1"  className="form-control input_padding" id="exampleInputDays1" />
              </div>
              {/* <div className="mb-3">
                <input type="number" name="travelers" placeholder='Enter Travelers' min="1"  className="form-control" id="exampleInputTravelers1" />
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
  <input className="form-check-input" value="3-Rating"
  onChange={(e)=>handleAddRating(e.target.value)}
  type="checkbox" 
  name="hotel_ratings" id="flexRadioDefault1"/>
  <label className="form-check-label"   htmlFor="flexRadioDefault">
   3 Rating
  </label>
</div>
<div className="form-check  my-1 my-sm-1 my-md-1 my-lg-3">
  <input className="form-check-input" value="4-Rating" 
  onChange={(e)=>handleAddRating(e.target.value)}
  type="checkbox" 
  
  name="hotel_ratings" id="flexRadioDefault" />
  <label className="form-check-label" htmlFor="flexRadioDefault2">

    4 Rating
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" value="5-Rating" type="checkbox" 
  onChange={(e)=>handleAddRating(e.target.value)}
  name="hotel_ratings" id="flexRadioDefault3" />
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
               <input className="form-check-input" type="checkbox" 
               onChange={(e)=>handleAddMeals(e.target.value)}
               value="No Meals"
               name="flexRadioDefault1" id="flexRadioDefault4"/>
               <label className="form-check-label" htmlFor="flexRadioDefault4">
                No Meal
               </label>
            </div>
            <div className="form-check my-1 my-sm-1 my-md-1 my-lg-3">
              <input className="form-check-input" type="checkbox" 
               onChange={(e)=>handleAddMeals(e.target.value)}
               value="Only Breakfast"
               name="flexRadioDefault1" id="flexRadioDefault4" />
              <label className="form-check-label" htmlFor="flexRadioDefault5">
                Only Breakfast
              </label>
</div>

                </div>






                <div className="starCheckBox grey_text d-flex flex-wrap justify-content-between px-1">
                <div className="form-check my-1 my-sm-1 my-md-1 my-lg-3">
               <input className="form-check-input" type="checkbox"
               onChange={(e)=>handleAddMeals(e.target.value)}
               name="flexRadioDefault1" 
               value='Breakfast Lunch or Dinner'
               id="flexRadioDefault4"/>
               <label className="form-check-label" htmlFor="flexRadioDefault5">
                Breakfast+Dinner/Lunch 
               </label>
                </div>
                 <div className="form-check my-1 my-sm-1 my-md-1 my-lg-3">
                <input className="form-check-input"
                value="All Meals"
                type="checkbox" 
                onChange={(e)=>handleAddMeals(e.target.value)}
                name="flexRadioDefault1" id="flexRadioDefault6" />
                 <label className="form-check-label" htmlFor="flexRadioDefault6">
                All Meals
                </label>
                </div>

                </div>




              </div>




              <div className="mb-3">
                <textarea name='message'
                 onChange={validation.handleChange}
                 onBlur={validation.handleBlur}
                 value={validation.values.message || ''}
           
                className="form-control"  placeholder="Your Message" id="exampleFormControlTextarea1" rows="4" style={{resize:"none"}}></textarea>
              </div>
              <button type="submit" className="contact_btn btn-primary py-2 mt-4 w-100"><span className=''>Submit Now</span></button>
            </form>
          </div>
        </div>
      </div>
    </div>
   }
    </>
  );
}
