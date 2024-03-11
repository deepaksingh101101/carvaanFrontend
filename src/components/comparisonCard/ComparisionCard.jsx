import './ComparisionCard.css';
import { CiCalendarDate } from "react-icons/ci";
import ReactStars from 'react-stars';

export default function ComparisionCard({ selectedCards }) {
  return selectedCards.map((card, index) => (
    <div key={index} className="card comparison_card" style={{ width: "19rem" }}>
      <img src={card.img} style={{ height: "260px" }} className="p-2 card-img-top object-fit-cover" alt="..." />
      <div className="card-body px-2 pb-2 pt-0">
        <h6 className="card-title fw-semibold">{card.name}</h6>

        <div className="d-flex">
          <p className='mb-1' style={{ fontSize: "14px", fontWeight: "500" }}>Price:</p>
          <p className='ms-1 mb-1 fw-semibold comp_para_green' style={{ fontSize: "14px" }}>INR {card.offerPrice}</p>
          <s className='ms-1 fw-semibold compare_para_grey' style={{ fontSize: "14px" }}>INR {card.originalPrice}</s>
        </div>

        <div className="d-flex ">
          <p className='mb-1' style={{ fontSize: "14px", fontWeight: "500" }}>Departure Date:</p>
          <p className='ms-1 mb-1 fw-semibold compare_para_grey' style={{ fontSize: "14px" }}><CiCalendarDate className='mb-1' style={{ fontSize: "20px" }} /> From {card.departure_date}</p>
        </div>

        <div className="d-flex align-items-center">
          <p className='mb-1' style={{ fontSize: "14px", fontWeight: "500" }}>Duration:</p>
          <p className='ms-1 mb-1 fw-semibold compare_para_grey' style={{ fontSize: "14px" }}>{card.duration}</p>
        </div>

        <div className="d-flex align-items-center">
          <p className='mb-1' style={{ fontSize: "14px", fontWeight: "500" }}>Rating:</p>
          <p className='ms-1 mb-1 fw-semibold compare_para_grey' style={{ fontSize: "14px" }}>{card.rating} Star</p>
          <ReactStars
            className='ms-1 mb-1'
            count={5}
            onChange={(newRating) => console.log(newRating)} // Handle rating change
            size={18}
            edit={false}
            value={card.rating}
            color={'#F79009'}
          />
        </div>

        <div className="d-flex align-items-center">
          <p className='mb-1' style={{ fontSize: "14px", fontWeight: "500" }}>Seats:</p>
          <p className='ms-1 mb-1 fw-semibold comp_para_green' style={{ fontSize: "14px" }}>{card.seats_left}</p>
          <p className='ms-1 mb-1 fw-semibold compare_para_grey' style={{ fontSize: "14px" }}>Seats Left</p>
        </div>

        <div className="d-flex justify-content-center">
          <button href="#" className="btn fw-bold w-100 book_now_btn ">Book Now</button>
        </div>
      </div>
    </div>
  ));
}
