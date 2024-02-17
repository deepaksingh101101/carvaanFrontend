import "./sourceDestCard.css";
export default function SourceDestCard() {
  return (
    <div
      className="container source  "
      style={{  borderRadius: "20px" }}
    >
      <div className="row mx-0 d-flex justify-content-center align-items-center">

        <div className="col-lg-10 px-0  ">
          <div className="row d-flex justify-content-between  align-items-center">
            <div
              className="col-lg-3  d-flex flex-column justify-content-center white"
              style={{ height: "100px",border:"10px solid white" }}
            >
              <div className="top">
                <h6>From</h6>
              </div>
              <div className="bottom">
                <h4 className="fw-bold">Kolkata</h4>
              </div>
            </div>
            <div
              className="col-lg-3  d-flex flex-column white justify-content-center"
              style={{ height: "95px",border:"10px solid white" }}
            >
              <div className="top">
                <h6>To</h6>
              </div>
              <div className="bottom">
                <h4 className="fw-bold">Dhaka</h4>
              </div>
            </div>
            <div
              className="col-lg-3   d-flex flex-column white justify-content-center"
              style={{ height: "95px",border:"10px solid white" }}
            >
              <div className="top">
                <h6>Travel Month</h6>
              </div>
              <div className="bottom">
                <h4 className="fw-bold">Select Now</h4>
              </div>
            </div>
            <div
              className="col-lg-3   d-flex flex-column white justify-content-center"
              style={{ height: "95px",border:"10px solid white" }}
            >
              <div className="top">
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
          className= "col-md-12 white rm_border col-lg-2  d-flex flex-column justify-content-center"
          style={{ height: "95px",border:"10px solid white" }}
        >
          <button className="btn btn-primary mx-3">Search</button>
        </div>



      </div>
    </div>
  );
}
