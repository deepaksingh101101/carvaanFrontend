import React, { useState } from 'react';
import './CheckOut.css';
import { LuUserSquare } from "react-icons/lu";
import cardimg from '../../assets/checkOut/Rectangle 19342.png';
import { GoShieldLock } from "react-icons/go";
import { RxCrossCircled } from "react-icons/rx";
import { AiOutlinePlus } from "react-icons/ai";
import ReactStars from 'react-stars';

export default function CheckOut() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: ''

  });
  const [idCounter, setIdCounter] = useState(0);

  const [members, setMembers] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();


    if (members.length === 0 || !members.every(member => member.firstName && member.lastName && member.email && member.phone && member.dateOfBirth)) {
      alert('Please add at least one adult with all details filled out.');
      return;
    }

    console.log('Form submitted', members);

  };

  const handleAddMember = () => {

    const isFormComplete = formData.firstName && formData.lastName && formData.email && formData.phone && formData.dateOfBirth;
    if (!isFormComplete) {
      alert('Please fill out all fields before adding another adult.');
      return;
    }

    const newMemberWithId = {
      ...formData,
      id: `${Date.now()}-${idCounter}`
    };
    setMembers([...members, newMemberWithId]);
    setFormData({ firstName: '', lastName: '', email: '', phone: '', dateOfBirth: '' });
    setIdCounter(idCounter + 1);
  };


  const removeMember = (id) => {
    setMembers(members.filter(member => member.id !== id));
  };
  return (
    <>
      <div className="container">
        <h2 className="font-weight-bold mt-5  outer_box" style={{ fontSize: 'clamp(18px, 1.2vw, 30px)' }} >Secure Your Reservation:</h2>
        <div className='outer_box container'>
          <div className="row">
            <div className="col-lg-8">
              <div className="container bg-white mt-4 " style={{ border: '1px solid #ccc', borderRadius: '10px' }}>
                <div className="row"  >
                  <h6 className="text-white heading py-3 d-flex align-items-center">
                    <LuUserSquare style={{ fontSize: '28px' }} /> <p className=' mb-0 ms-1 fw-medium' style={{ fontSize: 'clamp(13px, 1.2vw, 18px)' }} >Confirm Traveler Details</p>
                    <span className='ms-4 ' style={{ fontSize: 'clamp(8px, 1.2vw, 14px)' }}>Only Adult (18+) Allowed </span>
                  </h6>
                  <div className='d-flex' style={{ fontSize: 'clamp(14px, 1.2vw, 18px)' }}><h5>Total Adults</h5> <div className="traveler-count-badge ">
                    {members.length}
                  </div>
                  </div>
                  <hr className=" " style={{ border: '1px dashed #000' }} />

                  <div className="col-lg-6">
                    <form className='mx-2 mb-4' onSubmit={handleSubmit}>
                      <div className="row  mt-4">
                        <div className="col-lg-6 col-md-6 col-sm-6 mb-3 ">
                          <input type="text" style={{ fontSize: 'clamp(14px, 1.2vw, 18px)' }} name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleInputChange} className="form-control input_padding" id="exampleInputFirstName" />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 mb-3 ">
                          <input type="text" style={{ fontSize: 'clamp(14px, 1.2vw, 18px)' }} name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleInputChange} className="form-control input_padding" id="exampleInputLastName" />
                        </div>
                      </div>

                      <div className="mb-3">
                        <input type="email" style={{ fontSize: 'clamp(14px, 1.2vw, 18px)' }} name="email" placeholder='Email' value={formData.email} onChange={handleInputChange} className="form-control input_padding" id="exampleInputEmail1" />
                      </div>
                      <div className="mb-3">
                        <input type="text" style={{ fontSize: 'clamp(14px, 1.2vw, 18px)' }} name="phone" placeholder='Phone no' value={formData.phone} onChange={handleInputChange} className="form-control input_padding" id="exampleInputNumber1" />
                      </div>
                      <div className="mb-3">
                        <input type="date" style={{ fontSize: 'clamp(14px, 1.2vw, 18px)' }} name="dateOfBirth" value={formData.dateOfBirth} onChange={handleInputChange} className="form-control input_padding" id="dateOfBirth" />
                      </div>

                      <div className="mb-3">
                        <div className="mt-2 p-3 border rounded">
                          <span style={{ fontSize: 'clamp(14px, 1.2vw, 18px)' }}>Select Gender:</span>
                          <div className="mt-4">
                            <div className="form-check form-check-inline">
                              <input className="form-check-input" type="radio" name="gender" id="male" value="male" checked={formData.gender === 'male'} onChange={handleInputChange} />
                              <label className="form-check-label" htmlFor="male" style={{ fontSize: 'clamp(14px, 1.2vw, 18px)' }}>Male</label>
                            </div>
                            <div className="form-check form-check-inline">
                              <input className="form-check-input" type="radio" name="gender" id="female" value="female" checked={formData.gender === 'female'} onChange={handleInputChange} />
                              <label className="form-check-label" htmlFor="female" style={{ fontSize: 'clamp(14px, 1.2vw, 18px)' }}>Female</label>
                            </div>
                            <div className="form-check form-check-inline">
                              <input className="form-check-input" type="radio" name="gender" id="other" value="other" checked={formData.gender === 'other'} onChange={handleInputChange} />
                              <label className="form-check-label" htmlFor="other" style={{ fontSize: 'clamp(14px, 1.2vw, 18px)' }}>Other</label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                    <div className="mt-2 mb-4 ms-2 box border rounded" style={{ padding: '3px', display: 'inline-block' }}>
                      <button type="button" style={{ textDecoration: 'none', fontSize: 'clamp(14px, 1.2vw, 18px' }} className="btn btn-link" onClick={handleAddMember}>
                        <span style={{ fontSize: 'clamp(14px, 1.2vw, 18px)' }}><AiOutlinePlus /></span> Add Another Adult
                      </button>
                    </div>

                  </div>

                  <div className="col-lg-6 mt-4">
                    <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
                      {members.map((member, index) => (
                        <li key={index} className="d-flex justify-content-between align-items-center p-2 rounded mb-2"
                          style={{
                            gap: '5px',
                            border: '1px solid #007bff',
                            backgroundColor: '#FFFFFF',
                            fontSize: 'clamp(14px, 1.2vw, 18px)'
                          }}>
                          <span style={{ fontWeight: 'bold' }}>Traveler {index + 1}</span>
                          <span>{member.firstName} {member.lastName}</span>
                          <button type="button" className="btn p-0" onClick={() => removeMember(member.id)}
                            style={{
                              background: 'none',
                              border: 'none'
                            }}>
                            <RxCrossCircled />
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </div>

              <div className="bg-white mt-4 mb-5 " style={{ border: '1px solid #ccc', borderRadius: '10px' }}>
                <div className="heading_2">
                  <h6 className="text-black py-3  d-flex align-items-center mx-3" style={{ fontSize: 'clamp(16px, 1.2vw, 18px)' }}>Important information about your booking</h6>
                </div>
                <ol className='mt-4 list_no '>
                  <li className='mx-1' style={{ fontSize: 'clamp(14px, 1.2vw, 18px)' }}>This rate is non-refundable. If you change or cancel your booking you will not get a refund or credit to use for a future stay.</li>
                  <li className='mx-1' style={{ fontSize: 'clamp(14px, 1.2vw, 18px)' }}>Stay extensions will require a new reservation.</li>
                  <li className='mx-1' style={{ fontSize: 'clamp(14px, 1.2vw, 18px)' }}>Front desk staff will greet guests on arrival</li>
                  <li className='mx-1' style={{ fontSize: 'clamp(14px, 1.2vw, 18px)' }}>No refunds will be issued for late check-in or early check-out.</li>
                </ol>
                <div className='mx-3 mt-5 mb-4' style={{ fontSize: 'clamp(14px, 1.2vw, 18px)' }}><p >By clicking the button below, I acknowledge that I have reviewed the
                  <span style={{ color: 'blue', fontSize: 'clamp(14px, 1.2vw, 18px)' }}> Privacy Statement </span>and have reviewd and accept the <span style={{ color: 'blue', fontSize: 'clamp(14px,1.2vw,18px)' }}>Rules and Restrictions</span> and <span style={{ color: 'blue', fontSize: 'clamp(14px,1.2vw,18px)' }}>Terms of Use</span>.</p>
                </div>
                <div className='mx-3 mt-3 mb-5 d-flex align-items-center'> 
                  <GoShieldLock style={{ color: 'white', fontSize: 'clamp(14px, 1.2vw, 20px)',width: 'clamp(12px, 1.2vw, 30px)', height: 'clamp(12px, 1.2vw, 30px)', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#219653', borderRadius: '50%'}}/>
                  <p className='mb-0 mx-2' style={{ fontSize: 'clamp(14px, 1.2vw, 18px)' }}>We use secure transmission and encrypted storage to protect your personal information</p>
                </div>

              </div>

            </div>
            <div className="col-lg-4">
              <div className="container mt-4 ">
                <div className="card mb-4" >
                  <img className="cardimg" src={cardimg} alt="Card image" />
                  <div className="card-body">
                    <div className="row mb-3">
                      <div className="col">
                        <h5 style={{ color: '#AE4A84', fontSize: 'clamp(10px, 1.2vw, 13px)' }}>4 days 3 Nights</h5>
                      </div>
                      <div className="col text-end box">
                        <h6 style={{ color: '#000000', fontSize: 'clamp(10px, 1.2vw, 13px)' }}>Seats: <span style={{ color: '#27AE60', fontSize: 'clamp(10px, 1.2vw, 12px)' }}>30</span> <span style={{ fontSize: 'clamp(10px, 1.2vw, 12px)' }} className='box'>Seats left</span> </h6>
                      </div>
                    </div>
                    <div className='mt-4'>
                      <h5 className='fw-bold' style={{ fontSize: 'clamp(14px, 1.2vw, 18px)' }}>Lakeside Motel Warefront</h5>
                      <p className='d-flex align-items-center gap-2 small' style={{ fontSize: 'clamp(12px, 1.2vw, 18px)' }}>
                        <ReactStars
                          count={5}
                          size={24}
                          value={4.5}
                          edit={false}
                          color2={'#ffd700'} />
                        4.5 (1200 Reviews)
                      </p>
                    </div>
                    <p className='text-danger small mb-1' style={{ fontSize: 'clamp(14px, 1.2vw, 18px)' }}>Non refundable</p>
                    <p className="text-muted small" style={{ fontSize: 'clamp(12px, 1.2vw, 18px)' }}>Starting From: Sunday, 10th Feb,  2024</p>
                  </div>
                </div>
                <div className="card" >
                  <div className="card-header py-3 fw-semibold" style={{ backgroundColor: "#85E0AB", color: "black" }}>
                    Price Details
                  </div>
                  <div className="card-body mt-2">
                    <div className='d-flex justify-content-between' style={{ fontSize: 'clamp(14px, 1.2vw, 18px)' }}><p>2 Adults, 3 Childs</p><p>$ 120.32</p></div>
                    <div className='d-flex justify-content-between' style={{ fontSize: 'clamp(14px, 1.2vw, 18px)' }}><p>All Meals</p><p>$ 28.32</p></div>
                    <div className='d-flex justify-content-between' style={{ fontSize: 'clamp(14px, 1.2vw, 18px)' }}><p>Tax and service fees</p><p>$ 8.32</p></div>
                    <hr />
                    <div className='d-flex justify-content-between fw-semibold' style={{ fontSize: 'clamp(14px, 1.2vw, 18px)' }}><p>Total</p><p style={{ fontSize: 'clamp(14px, 1.2vw, 18px)' }}>$130</p></div>
                    <p className='small' style={{ color: "#2F80ED", fontSize: 'clamp(14px, 1.2vw, 18px)' }} >Use a coupon or Reward Coins</p>
                    <p className='small fw-semibold mb-1' style={{ fontSize: 'clamp(14px, 1.2vw, 18px)' }}>Coupon Code</p>

                    <div className='d-flex'>
                      <input type="text" className="form-control py-2 coupon-btn p-0" style={{ background: "#F9F1F5", fontSize: 'clamp(12px, 1.2vw, 18px)' }} placeholder="    Coupon Code" aria-label="Coupon code" aria-describedby="basic-addon2" />
                      <a href="#" className="btn btn-primary py-2 mx-1 apply-coupon-btn p-0" style={{ background: "#AE4A84", color: "#FFFFFF", fontSize: 'clamp(10px, 1.2vw, 18px)' }}>Apply Coupon</a>
                    </div>

                  </div>
                </div>

              </div>
              <a href="#" className="btn btn-primary mb-4 confirm-btn mt-4 " style={{ background: "#4263C9", color: "#FFFFFF", fontSize: 'clamp(14px, 1.2vw, 18px)' }}>Confirm Your Booking</a>
            </div>
          </div>
        </div >
      </div >
    </>
  );
}

