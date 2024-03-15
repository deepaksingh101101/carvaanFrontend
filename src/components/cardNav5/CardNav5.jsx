import React from 'react'
import ReactStars from 'react-stars';
import img from '../../assets/cardView/Rectangle 19350.png'
import { SlCalender } from "react-icons/sl";
import { IoLocation } from "react-icons/io5";
import './CardNav5.css';

export default function cardNav5() {
    return (
        <>
            <div className='container ms-0 mt-5'>
                <div className='p-2 border rounded bg-white'>
                    <h4 className="mt-2 ms-1">About the Agency:</h4>
                    <hr />
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='ms-2'><img className="rect_img" src={img} alt="" /></div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='container ms-2 mt-2'>
                                <h5 style={{ color: 'blue' }}>Wondare Travel</h5>
                                <p style={{ color: '#4F4F4F' }}>Overview dolor sit amet consectetur. Varius at varius adipiscing faucibus egestas nec consequat. Dictumst ut </p>
                                <h5 style={{ color: 'blue' }}>ESTD</h5>
                                <p style={{ color: '#4F4F4F' }}><SlCalender className='mx-2' />10-03-2024</p>
                                <h5 style={{ color: 'blue' }}>Based on</h5>
                                <p style={{ color: '#4F4F4F' }}><IoLocation className='mx-2 ' />Noida, Delhi, India</p>
                            </div>

                        </div>

                    </div>

                    <div className="container mt-4">
                        <div className="row">
                            <div className="col-12 col-lg-5">
                                <div>
                                    <h5 style={{ color: 'blue' }}>Customer Rating</h5>
                                    <p className="d-flex align-items-center gap-2">
                                        <ReactStars  size={18} count={5} value={4.5} edit={false} color2={'#ffd700'} />
                                        <span style= {{fontSize: '14px'}} >4.5 star</span>
                                    </p>
                                </div>
                                <div className='mb-2'>
                                    <h5 style={{ color: 'blue' }}>Number of Trips done</h5>
                                    <p style={{ margin: '0' }}>24</p>
                                </div>
                            </div>

                            <div className="d-none d-lg-block col-lg-1" style={{ borderLeft: '1px solid #ccc', minHeight: '100px' }}></div>


                            <div className="col-12 col-lg-5 order-lg-last">
                                <div className='mb-'>
                                    <h5 style={{ color: 'blue', lineHeight: '1' }}>Average Trips/Month</h5>
                                    <p style={{ margin: '0' }}>2</p>
                                </div>
                                <div>
                                    <h5 style={{ color: 'blue', lineHeight: '1' }}>Top Destination</h5>
                                    <p style={{ margin: '0', fontSize: '15px'}}>Karnyakumari - Chilka - Goa</p>
                                </div>
                            </div>
                        </div>
                    </div>
                     

                </div>
            </div>
        </>
    )
}