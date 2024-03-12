import './ComparisionCard.css';
import { CiCalendarDate } from "react-icons/ci";
import ReactStars from 'react-stars';

export default function ComparisionCard({ selectedCards }) {
  return selectedCards.map((card, index) => (
    <div key={index} className="card mx-0 mx-md-2 mx-lg-2 mx-lg-0 comparison_card" style={{ width: "19rem" }}>
      <img src={card.img} style={{ height: "260px" }} className="p-2 card-img-top compare_card object-fit-cover" alt="..." />
      <div className="card-body px-2 pb-2 pt-0">
        <h6 className="card-title compare_trip_name fw-semibold">{card.name}</h6>

        <div className="d-flex compare_price">
          <p className='mb-1 clamp_compare_right_text ' style={{ fontSize: "14px", fontWeight: "500" }}>Price:</p>
          <p className='ms-1 mb-1 fw-semibold comp_para_green' style={{ fontSize: "14px" }}>INR {card.offerPrice}</p>
          <s className='ms-1 fw-semibold compare_none compare_para_grey' style={{ fontSize: "14px" }}>INR {card.originalPrice}</s>
        </div>

        <div className="d-flex compare_none ">
          <p className='mb-1 clamp_compare_right_text' style={{ fontSize: "14px", fontWeight: "500" }}>Departure Date:</p>
          <p className='ms-1 mb-1 fw-semibold compare_para_grey' style={{ fontSize: "14px" }}><CiCalendarDate className='mb-1 calander_icon ' style={{ fontSize: "20px" }} /> From {card.departure_date}</p>
        </div>

        <div className="d-flex compare_none align-items-center">
          <p className='mb-1 clamp_compare_right_text' style={{ fontSize: "14px", fontWeight: "500" }}>Duration:</p>
          <p className='ms-1 mb-1 fw-semibold compare_para_grey' style={{ fontSize: "14px" }}>{card.duration}</p>
        </div>

        <div className="d-flex compare_none align-items-center">
          <p className='mb-1 clamp_compare_right_text' style={{ fontSize: "14px", fontWeight: "500" }}>Rating:</p>
          <p className='ms-1 mb-1 fw-semibold compare_para_grey' style={{ fontSize: "14px" }}>{card.rating} Star</p>
          <ReactStars
            className='ms-1 mb-1 reactStars'
            count={5}
            onChange={(newRating) => console.log(newRating)} // Handle rating change
            size={14}
            edit={false}
            value={card.rating}
            color={'#F79009'}
          />
        </div>

        <div className="d-flex align-items-center">
          <p className='mb-1 clamp_compare_right_text' style={{ fontSize: "14px", fontWeight: "500" }}>Seats:</p>
          <p className='ms-1 mb-1 fw-semibold comp_para_green' style={{ fontSize: "14px" }}>{card.seats_left}</p>
          <p className='ms-1 mb-1 fw-semibold compare_para_grey' style={{ fontSize: "14px" }}>Seats Left</p>
        </div>

        <div className="d-flex justify-content-center">
          <button href="#" className="btn clamp_compare_right_text fw-bold w-100 book_now_btn ">Book Now</button>
        </div>
      </div>
    </div>
  ));
}
