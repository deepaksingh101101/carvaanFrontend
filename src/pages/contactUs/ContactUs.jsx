import './ContactUs.css'
import { FiHome } from "react-icons/fi";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";

export default function ContactUs() {
  return (
    <>
   <div className="contact my-5">
   <div className="container">
        <div className="row">
            <div className="col-lg-6 mt-5 ">
                <h5 className='mb-2 fw-bold bg_primary' >Contact Us</h5>
                <h1 className='fw-bold my-3'>Get In Touch With Us</h1>
                <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe nobis amet natus nesciunt fuga architecto suscipit voluptate iusto commodi iste esse, quidem, consequuntur officia, dignissimo</p>


                <div className="contact_bottom mt-5 ">
                  <div className="location d-flex my-3 ">
                    <div className="contact_icons_outer py-3 px-3 d-flex justify-content-center align-items-center">
                    <FiHome className='contact_icons' />
                    </div>
                    <div className="ms-3">
                      <h6 className='fw-bold'>Our Location</h6>
                      <p>99 S.t Jomblo Park Pekanbaru 28292 Indonesia</p>
                    </div>
                  </div>
                  <div className="phone_number d-flex my-3">
                  <div className="contact_icons_outer py-3 px-3 d-flex justify-content-center align-items-center">
                    <FiPhoneCall className='contact_icons' />
                    </div>
                    <div className="ms-3">
                      <h6 className='fw-bold'>Phone Number</h6>
                      <p>(+62)81 414 257 9980</p>
                    </div>
                  </div>
                  <div className="email d-flex my-3">
                  <div className="contact_icons_outer py-3 px-3 d-flex justify-content-center align-items-center">
                    <MdOutlineMail className='contact_icons' />
                    </div>
                    <div className="ms-3">
                      <h6 className='fw-bold'>Email Address</h6>
                      <p>Info@yourdomail.com</p>
                    </div>
                  </div>
                </div>
            </div>
            <div className="col-lg-6  mt-5 d-flex justify-content-center">
            <form className='contact_form py-5 px-5 ms-0  ms-lg-5'>
  <div className="mb-3 ">
    <input type="text" placeholder='Your Name' className="form-control " id="exampleInputName1" />
  </div>
  <div className="mb-3">
    <input type="email" placeholder='Your Email' className="form-control" id="exampleInputEmail1" />
  </div>
  <div className="mb-3">
    <input type="text" placeholder='Your Phone' className="form-control" id="exampleInputNumber1" />
  </div>

  <div className="mb-3">
  <textarea className="form-control"  placeholder="Your Message" id="exampleFormControlTextarea1" rows="3" style={{resize:"none"}}></textarea>
  </div>

  <button type="submit" className=" contact_btn btn-primary py-2 mt-4  w-100"><span className='' >Send Message</span></button>
</form>
                </div>
        </div>
    </div>
   </div>
    </>
  )
}
