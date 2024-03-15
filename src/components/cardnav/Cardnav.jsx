import React from 'react';
import { IoMdWifi } from "react-icons/io";
import { TbAirConditioning } from "react-icons/tb";
import { FaCar } from "react-icons/fa";
import { FaBusinessTime } from "react-icons/fa";
import { FaPersonSwimming } from "react-icons/fa6";
import { FaRegThumbsUp } from "react-icons/fa";

export default function Cardnav() {
    return (
        <>
            <div className="container ms-0 mt-5">
                <div className="row">
                    <div className="col">
                        <div className="p-2 border rounded  bg-white">
                            <h4 className="ms-2 mt-2">Overview</h4>
                            <p className="mt-4 ms-4 me-4 text-muted">Featuring free WiFi throughout the property, Lakeside Motel Waterfront offers accommodations
                                in Lakes Entrance, 19 mi from Bairnsdale. Free private parking is available on site.
                                Each room at this motel is air conditioned and comes with a flat-screen TV.
                                You will find a kettle, toaster, and a microwave in the room. Each room is fitted with a private
                                bathroom. Guests have access to barbecue facilities and a lovely large lawn area. Metung is 6.8 mi
                                from Lakeside Motel Waterfront, while Paynesville is 14 mi from the property. Couples in particular
                                like the location – they rated it 9.2 for a two-person trip.</p>
                            <hr className="my-4" style={{ borderColor: '#4F4F4F' }} />
                            <h5 className="mb-3 ms-4">Top Facilities</h5>
                            <div className="row mb-3 ms-4">
                                <div className="col-md-4 col-lg-5 ">
                                    <ul className="list-unstyled mb-0 ">
                                        <li className='my-2 d-flex align-items-center' style= {{minWidth: '50px' }} ><IoMdWifi style={{ minWidth: '50px', fontSize: '24px', color: '#4263C9', marginRight: '8px' }} /> <span style= {{minWidth: '50px' }} > Free wifi</span>  </li>
                                        <li className='my-2 d-flex align-items-center' style= {{minWidth: '50px' }}  ><TbAirConditioning style={{ minWidth: '50px',fontSize: '24px', color: '#4263C9', marginRight: '8px' }} /> <span style= {{minWidth: '50px' }} >Air Conditioning</span> </li>
                                        <li className='my-2 d-flex align-items-center' style= {{minWidth: '50px' }}  ><FaCar style={{ minWidth: '50px', fontSize: '24px', color: '#4263C9', marginRight: '8px' }} /> <span style= {{minWidth: '50px' }} > Parking available</span> </li>
                                    </ul>
                                </div>
                                <div className="col-md-4 col-lg-5 ">
                                    <ul className="list-unstyled mt-0 py-lg-2">
                                        <li className='my-0  d-flex align-items-center' style= {{minWidth: '50px' }} ><FaBusinessTime style={{ minWidth: '50px', fontSize: '24px', color: '#4263C9', marginRight: '8px' }} /> <span style= {{minWidth: '100px' }} >Business Services</span></li>
                                        <li className='my-2 d-flex align-items-center' style= {{minWidth: '50px' }}><FaPersonSwimming style={{ minWidth: '50px', fontSize: '24px', color: '#4263C9', marginRight: '8px' }} /> <span style= {{minWidth: '50px' }} > Swimming pool</span></li>
                                        <li className='my-2 d-flex align-items-center' style= {{minWidth: '50px' }}><FaRegThumbsUp style={{ minWidth: '50px', fontSize: '24px', color: '#4263C9', marginRight: '8px' }} /> <span style= {{minWidth: '50px' }} >Top rated in area</span></li>
                                    </ul>
                                </div>
                                <div className="col-lg-6"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
        </>
    );
}
