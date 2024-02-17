import blue_img from '../../assets/trust/blue_img1.jpg'
import { CiLocationOn } from "react-icons/ci";
import { FaRegPlayCircle } from "react-icons/fa";

import './TrustCard.css'
export default function TrustCard() {
  return (
    <div className="card my-3 trust" style={{width: "18rem"}}>
  <img src={blue_img} className="card-img-top" alt="..."/>
  <div className="card-body w-100 d-flex justify-content-between  position-absolute " style={{bottom:"0"}}>
   <div className="left d-flex flex-column">
   <h5 className="card-title">Soumyadip Jana</h5>
    <p className="card-text"><span><CiLocationOn /></span> Kolkata</p>
   </div>
   <div className="right d-flex align-items-center justify-content-center">
   <FaRegPlayCircle className='' style={{fontSize:"40px"}} />
   </div>
   </div>
</div>
  )
}
