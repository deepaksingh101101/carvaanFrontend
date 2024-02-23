
import './PackageCarauselCard.css';
import { IoIosStar } from "react-icons/io";
import { FaLocationArrow } from "react-icons/fa6";

export default function PackageCarauselCard({ img, destination, rating, price, duration }) {
  return (
    <div className="card m-3 package_card1 border-0" style={{ width: "18rem" }}>
      <img loading='lazy' src={img} className="card-img-top existing_packages_img1 object-fit-cover" alt="..." />
      <div className="card-body package_card_body1">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex flex-column">
            <h6 className='existing_price1 fw-semibold my-0'>{destination}</h6>
            <div className="d-flex align-items-center">
              <span className='grey400 existing_rating1 fw-semibold'>{rating}</span>
              <IoIosStar className='star1 yellow400 ms-1 mt-0' />
            </div>
          </div>
          <div className="d-flex flex-column">
            <h6 className='green400 existing_price1 fw-semibold my-0'>${price}/-</h6>
            <span className='grey400  ms-lg-4 existing_perPerson1 fw-semibold'>Per Person</span>
          </div>
        </div>

        <div className="d-flex duration_outer1 mt-2 align-items-center">
          <FaLocationArrow className='duration1' />
          <p className='grey400 ms-0 ms-sm-1 ms-md-1 ms-lg-1 my-0 duration1 fw-semibold'>{duration}</p>
        </div>
      </div>
    </div>
  );
}
