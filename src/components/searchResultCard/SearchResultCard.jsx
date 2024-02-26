import './SearchResultCard.css';

import { MdOutlineDateRange } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";


export default function SearchResultCard({ searchResults }) {
  return (
    <>
      {searchResults.map(searchResult => (
        <div key={searchResult.id} className=" container search_result_card_section my-3" style={{ maxWidth: "935.216px" }}>
          <div className="row search_result_card px-sm-3 py-sm-3 px-md-3 py-md-3 px-lg-1 py-lg-1">
            <div className="col-md-12 px-0 px-lg-2 col-lg-3">
              <div className="d-flex flex-column px-3 py-3 py-sm-0 py-md-0 py-lg-0 px-sm-0 py-sm-0">
                <img className='object-fit-cover my-0 my-lg-2 search_result_image' src={searchResult.img} alt='searchResult1' />
                <div className="d-flex px-sm-3 px-md-0 px-lg-0 flex-lg-column justify-content-between">
                  <span className='search_result_by mt-1 mt-sm-1 mt-md-1 mt-lg-0 px-0 px-md-2 px-lg-0 fw-semibold'>By Maa Kali Travel</span>
                  <div className="d-flex px-0 px-md-2 px-lg-0 ">
                    <p className='fw-bold only_seats mb-1'>Seats:</p> <p className='px-1 mb-1 fw-semibold search_result_seat'><span className='fw-bold count_seat '>30</span> Seats left </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-9 ps-lg-1 px-md-2 px-lg-3 pt-lg-2">
              <div className="d-flex justify-content-between">
                <h4 className='search_result_title mb-0'>{searchResult.name}</h4>
                <span className='' >
                  <FaRegHeart  className='heart heart_ mb-2 mb-sm-0 mb-md-0 mb-lg-0 me-2' style={{ fontSize: "25px" }} />
                </span>
              </div>
              <div className="d-flex align-items-center justify-content-between justify-content-lg-start">
                <p className='fw-semibold my-0 search_result_duration'>{searchResult.duration}</p>
                <div className="d-flex align-items-center ms-2">
                  <MdOutlineDateRange className='date-grey' style={{ fontSize: "22px" }} />
                  <p className='date-grey px-2 my-0 search_result_date'>From 12.02.24</p>
                </div>
              </div>
              <div className="d-flex flex-row flex-lg-column justify-content-between justify-content-lg-start">
                <div className="d-flex align-items-center mt-0 mt-sm-0 mt-md-3 mt-lg-3">
                  <p className='my-0 date-grey search_result_our'>Our Price</p>
                  <button className='mx-2 search_result_price_btn'>{searchResult.offerPercentage}</button>
                </div>
                <div className="d-flex align-items-center mt-1 mt-sm-1 mt-md-3 mt-lg-3">
                  <div className="d-flex flex-column justify-content-center">
                    <h4 className='my-0 search_result_oprice fw-bold'>{searchResult.offerPrice}</h4>
                    <p className='per_person mb-0 fw-semibold'>Per Person</p>
                  </div>
                  <p className='my-1 mx-2'><s className='date-grey dprice'>{searchResult.originalPrice}</s></p>
                </div>
              </div>
              <p className='stay_included mb-0 fw-semibold date-grey'>Stay Included This Packages</p>
              <div className="d-flex flex-wrap mt-0 mt-sm-4 mt-md-4 mt-lg-4 justify-content-center justify-content-sm-between justify-content-md-between justify-content-lg-between align-items-baseline mb-3 mb-sm-0 mb-md-0 mb-lg-0 mt-2">
                <div className="d-flex ">
                  <div className="me-2 form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label className="form-check-label fw-semibold" htmlFor="flexRadioDefault1">Camp</label>
                  </div>
                  <div className="mx-2 form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                    <label className="fw-semibold form-check-label" htmlFor="flexRadioDefault2">Hotel</label>
                  </div>
                  <div className="mx-2 form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                    <label className="fw-semibold form-check-label" htmlFor="flexRadioDefault2">Dorm</label>
                  </div>
                </div>
                <div className="me-0 me-md-2 me-lg-2 d-flex justify-content-between justify-content-sm-between last_card_btn justify-content-md-start justify-content-lg-start">
                  <button className='btn mx-1 search_result_view'>View Details</button>
                  <button className='btn mx-1 search_result_book'>Book Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
