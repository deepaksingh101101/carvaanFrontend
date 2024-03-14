import React, { useState, useEffect, useRef } from "react";
import "./sourceDestCard.css";
import { IoIosSearch } from "react-icons/io";
import { MdMyLocation } from "react-icons/md";
import { FiMinusCircle } from "react-icons/fi";
import { GoPlusCircle } from "react-icons/go";
import Calander from "../calander/Calander";


export default function SourceDestCard() {
  const [showFrom, setShowFrom] = useState(false);
  const [showTo, setShowTo] = useState(false);
  const fromBoxRef = useRef(null);

  const handleForm = () => {
    setShowFrom(true);
    setShowTo(false); // Close To box if opened
  };

  const handleTo = () => {
    setShowTo(true);
    setShowFrom(false); // Close From box if opened
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (fromBoxRef.current && !fromBoxRef.current.contains(event.target)) {
        setShowFrom(false);
        setShowTo(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [fromBoxRef]);

  const from=[{
    id:1,
    name:"Banglore"
  },
  {
    id:2,
    name:"Chennai"
  },
  {
    id:3,
    name:"Cochin"
  },
  {
    id:4,
    name:"Hyderabad"
  },
  {
    id:5,
    name:"Kolkata"
  },
  {
    id:6,
    name:"Manali"
  }
  ,
  {
    id:7,
    name:"Mumbai"
  },
  {
    id:8,
    name:"Rajasthan"
  },
  {
    id:9,
    name:"Punjab"
  }

]


  return (
    <>
      <div className="container source ">
        <div className="row mx-0 d-flex justify-content-center align-items-center">
          <div className="col-lg-10 px-2 my-2">
            <div className="row d-flex justify-content-between align-items-center">
              <div
                onClick={() => handleForm()}
                className="col-md-6 col-lg-3 my-2 top px-0 d-flex flex-column justify-content-center white"
              >
                <div className="">
                  <h6 className="px-3 ">From</h6>
                </div>

                <div className="bottom position-relative">
                  <h4 className="fw-bold px-3">Kolkata</h4>

                  {showFrom ? (
                    <div
                      ref={fromBoxRef}
                      className="from_box container top-0 position-absolute w-100 overflow-y-auto"
                    >
                      <div className="d-flex align-items-center">
                        <IoIosSearch
                          className="me-2"
                          style={{ fontSize: "20px" }}
                        />
                        <input
                          type="text"
                          placeholder="Enter Source"
                          className="w-100 py-2 locationInput fw-bold border-0"
                        />
                      </div>
                      <hr className="m-1" />
                      <div
                        className="d-flex align-items-center"
                        role="button"
                      >
                        <MdMyLocation
                          style={{ fontSize: "20px" }}
                          className="me-2 blue_secondary"
                        />
                        <span style={{fontSize:"14px"}} className="m-0 ">Use Current Location</span>
                      </div>
                      <div className="d-flex my-2 flex-column justify-content-center">
                        <h6 style={{fontSize:"15px"}}>TOP SEARCHES</h6>

                        <p role="button">Bangalore</p>
                        <p role="button">Chennai</p>
                        <p role="button">Cochin</p>
                        <p role="button">Hyderabad</p>
                        <p role="button">Kolkata</p>
                        <p role="button">Manali</p>
                        <p role="button">Mumbai</p>
                        <p role="button">Rajasthan</p>
                        <p role="button">Punjab</p>
                        <p role="button">Kashmir</p>
                        <p role="button">Dubai</p>
                        <p role="button">America</p>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>

              <div
                onClick={() => handleTo()}
                className="col-md-6 col-lg-3 top px-0 d-flex flex-column justify-content-center white"
              >
                <div className="">
                  <h6 className="px-3 ">To</h6>
                </div>

                <div className="bottom position-relative">
                  <h4 className="fw-bold px-3">Dhaka</h4>

                  {showTo ? (
                    <div
                    style={{zIndex:"80"}}
                      ref={fromBoxRef} // Reusing the same ref is not correct, you should create a new one for To box
                      className="from_box container top-0 position-absolute w-100 overflow-y-auto"
                    >
                      <div className="d-flex align-items-center">
                        <IoIosSearch
                          className="me-2"
                          style={{ fontSize: "20px" }}
                        />
                        <input
                          type="text"
                          placeholder="Enter Source"
                          className="w-100 py-2 locationInput fw-bold border-0"
                        />
                      </div>
                      <hr className="m-1" />
                      {/* <div
                        className="d-flex align-items-center"
                        role="button"
                      >
                        <MdMyLocation
                          style={{ fontSize: "20px" }}
                          className="me-2 blue_secondary"
                        />
                        <span className="m-0 ">Use Current Location</span>
                      </div> */}
                      <div className="d-flex my-3 flex-column justify-content-center">
                        <h6 className="">TOP SEARCHES</h6>

                        <p role="button">Bangalore</p>
                        <p role="button">Chennai</p>
                        <p role="button">Cochin</p>
                        <p role="button">Hyderabad</p>
                        <p role="button">Kolkata</p>
                        <p role="button">Manali</p>
                        <p role="button">Mumbai</p>
                        <p role="button">Rajasthan</p>
                        <p role="button">Punjab</p>
                        <p role="button">Kashmir</p>
                        <p role="button">Dubai</p>
                        <p role="button">America</p>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>

              <div className="col-md-6 col-lg-3 top d-flex flex-column white justify-content-center">
                <div className="">
                  <h6>Travel Month</h6>
                </div>
                <div className="bottom position-relative">
                  <h4 className="fw-bold">Select Now</h4>
                  <div className="position-absolute" style={{zIndex:"20"}}>
                  <Calander  />
                  </div>
                </div>
                
              </div>

              <div style={{zIndex:"20"}} className="col-md-6 col-lg-3 top d-flex flex-column white justify-content-center">
                <div className="">
                  <h6>Travelers Count</h6>
                </div>
                <div className="bottom position-relative">
                  <h4 className="fw-bold">
                    <b>0</b> Adult/Child{" "}
                  </h4>
                  {/* <div className="container travelers_count position-absolute " style={{width:"380px"}}>
                    <div className="one d-flex align-items-center justify-content-center">
                      <h4 className="m-0 fw-bold">Total Traveler</h4>
                      <h6 className="ms-2 my-0">20</h6>
                    </div>

                    <div className="two d-flex align-items-center justify-content-between">
                      <div className="d-flex flex-column">
                        <div className="d-flex  align-items-center mt-2 ">
                          <h6 className="p-0">Adult</h6>
                          <p className="mx-0">(8yr+)</p>
                        </div>
                        <p className="p-0 error_color" >Max*13</p>
                      </div>
                      <div className="d-flex align-items-center">
                      <div className="minus">
                      <FiMinusCircle className="mx-1 total_icons"/>
                      </div>
                      <div className="count" >
                        0
                      </div>
                      <div className="plus">
                      <GoPlusCircle className="mx-1 total_icons" />
                      </div>
                      </div>
                    </div>
                    <hr/>
                    <div className="two d-flex align-items-center justify-content-between">
                      <div className="d-flex flex-column">
                        <div className="d-flex  align-items-center mt-2 ">
                          <h6 className="p-0">Child</h6>
                          <p className="mx-0">(Below 8yr+)</p>
                        </div>
                        <p className="p-0 error_color" >Max*13</p>
                      </div>
                      <div className="d-flex align-items-center">
                      <div className="minus">
                      <FiMinusCircle className="mx-1 total_icons"/>
                      </div>
                      <div className="count" >
                        0
                      </div>
                      <div className="plus">
                      <GoPlusCircle className="mx-1 total_icons" />
                      </div>
                      </div>
                    </div>

                  </div> */}
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-md-12 white rm_border px-0 col-lg-2  d-flex flex-column justify-content-center"
            style={{ height: "110px", border: "" }}
          >
            <button className="btn ms-md-0 ms-lg-4 d-flex align-items-center justify-content-center ">
              <IoIosSearch
                className="me-2 text-white"
                style={{ fontSize: "20px" }}
              />
              <p className="text-white m-0">Search</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
