import "./sourceDestCard.css";
import { IoIosSearch } from "react-icons/io";

export default function SourceDestCard() {
  return (
    
    <div
      className="container source  "
      
    >
      <div className="row mx-0 d-flex justify-content-center align-items-center">

        <div className="col-lg-10 px-0  ">
          <div className="row d-flex justify-content-between  align-items-center">
            <div
              className="col-lg-3 top  d-flex flex-column justify-content-center white"
              style={{ height: "110px",border:"10px solid white" }}
            >
              <div className="">
                <h6>From</h6>
              </div>
              <div className="bottom">
                <h4 className="fw-bold">Kolkata</h4>
              </div>
            </div>
            <div
              className="col-lg-3 top d-flex flex-column white justify-content-center"
              style={{ height: "110px",border:"10px solid white" }}
            >
              <div className="">
                <h6>To</h6>
              </div>
              <div className="bottom">
                <h4 className="fw-bold">Dhaka</h4>
              </div>
            </div>
            <div
              className="col-lg-3 top  d-flex flex-column white justify-content-center"
              style={{ height: "110px",border:"10px solid white" }}
            >
              <div className="">
                <h6>Travel Month</h6>
              </div>
              <div className="bottom">
                <h4 className="fw-bold">Select Now</h4>
              </div>
            </div>
            <div
              className="col-lg-3 top  d-flex flex-column white justify-content-center"
              style={{ height: "110px",border:"10px solid white" }}
            >
              <div className="">
                <h6>Travelers Count</h6>
              </div>
              <div className="bottom">
                <h4 className="fw-bold">
                  <b>0</b> Adult/Child{" "}
                </h4>
              </div>
            </div>
          </div>
        </div>

        <div
          className= "col-md-12 white rm_border px-0 col-lg-2  d-flex flex-column justify-content-center"
          style={{ height: "110px",border:"" }}
        >
          <button className="btn ms-md-0 ms-lg-4 d-flex align-items-center justify-content-center ">
          <IoIosSearch className="me-2 text-white" style={{fontSize:"20px"}}  />
          <p className="text-white m-0">Search</p>
          </button>
      
        </div>



      </div>
    </div>
  );
}
