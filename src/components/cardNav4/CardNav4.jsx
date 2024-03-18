import React, { useState } from 'react';
import { LuBaggageClaim } from "react-icons/lu";
import './CardNav4.css'
export default function CardNav4() {
    const [selectedButton, setSelectedButton] = useState(null);

    const handleButtonClick = (buttonName) => {
        setSelectedButton(buttonName);
    };

    return (
        <>
        <div className='container ms-0 mt-5 p-2'>
        
            <div className="container p-2">
                <div className='p-2 border rounded bg-white'>
                    <h4 className="mt-2 ms-1">
                        <button
                            className={` btn btn-bg-primary mx-2 ${selectedButton === 'inclusive' ? ' active' : ''}`}
                            onClick={() => handleButtonClick('inclusive')}
                        >
                            Inclusive
                        </button>
                        <button
                            className={`btn btn-bg-primary ${selectedButton === 'exclusive' ? ' active' : ''}`}
                            onClick={() => handleButtonClick('exclusive')}
                        >
                            Exclusive
                        </button>
                    </h4>

                    <hr />
                    <div className="row ms-2">
                        <div className="col-lg-6 ">
                            <ul className='ps-4 mb-0  my-list'>
                                <li className='py-1'>Accommodation on twin sharing basis</li>
                                <li className='py-1'>Government Taxes/VAT/ Service Charges</li>
                                <li className='py-1'>Airport Transfers & sightseeing in Private Vehicle</li>
                                <li className='py-1'>English speaking driver cum tour guide</li>
                            </ul>
                        </div>
                        <div className="col-lg-6 mt-0 ">
                            <ul className=' ps-4 my-list'>
                                <li className='py-1'>Water bottle on arrival</li>
                                <li className='py-1'>Meals: Breakfast</li>
                                <li className='py-1'>Meals: Breakfast</li>
                                <li className='py-1'>Local mobile sim card</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container mt-5 p-2'>
                <div className='p-2 border rounded bg-white'>
                    <h4 className="mt-2 ms-1"><LuBaggageClaim style={{ fontSize: '24px', color: '#4263C9' }} className='mx-2' />Your Packing Guide</h4>
                    <hr />
                    <div className="row ">
                        <div className="col-lg-2 ms-2 " style={{ minWidth: "178px" }}>
                            <ul className="ps-4 mb-0 my-list" >
                                <li className='font_14 fw-semibold py-3 li_dot '>Sweater/hoodie</li>
                                <li className='font_14 fw-semibold py-3 li_dot'>Tshirts</li>
                                <li className='font_14 fw-semibold py-3 li_dot'>Jacket</li>
                                <li className='font_14 fw-semibold py-3 li_dot'>Trek pants/lower</li>
                                <li className='font_14 fw-semibold py-3'>Sufficient cash</li>
                            </ul>
                        </div>
                        <div className="col-lg-2 ms-2" style={{ minWidth: "178px" }}>
                            <ul className="ps-4 ps-lg-0 mt-0 mb-0 my-list" >
                                <li className='font_14 fw-semibold py-3'>Poncho/raincoat</li>
                                <li className='font_14 fw-semibold py-3'>Trekking/hiking shoes</li>
                                <li className='font_14 fw-semibold py-3'>Gloves</li>
                                <li className='font_14 fw-semibold py-3'>Woollen cap</li>
                            </ul>
                        </div>
                        <div className="col-lg-2 ms-2" style={{ minWidth: "178px" }}>
                            <ul className="ps-4 ps-lg-0 mt-0 mb-0 my-list" >
                                <li className='font_14 fw-semibold py-3'>Sunglasses </li>
                                <li className='font_14 fw-semibold py-3'>Water bottle</li>
                                <li className='font_14 fw-semibold py-3'>Sunscreen lotion</li>
                                <li className='font_14 fw-semibold py-3'>Medicines</li>
                            </ul>
                        </div>
                        <div className="col-lg-2 ms-2 " style={{ minWidth: "178px" }}>
                            <ul className="ps-4 ps-lg-4 mt-0 mb-0 my-list" >
                                <li className='font_14 fw-semibold py-3'>Sanitizer </li>
                                <li className='font_14 fw-semibold py-3'>Toiletries</li>
                                <li className='font_14 fw-semibold py-3'>Power bank</li>
                                <li className='font_14 fw-semibold py-3'>Aadhar Card </li>
                            </ul>
                        </div>
                        
                    </div>
                </div>

            </div>
            </div>
            
        </>
    )
}
