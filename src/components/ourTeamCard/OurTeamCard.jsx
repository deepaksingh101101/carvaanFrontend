// OurTeamCard.js
import React from 'react';
import './OurTeamCard.css';
import { IoBagHandle } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";



export default function OurTeamCard({ team }) {
  const { name, job, img } = team;

  return (
    <div className="about_card col-12 col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center">
        <div className="card my-4 my-sm-4 my-md-4 my-lg-2" style={{ width: "370px" }}>
      <img src={img} className="teamPic w-100" alt={name} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title fw-semibold">{name}</h5>
        <div className="d-flex align-items-center">
        <IoBagHandle className='job' />
        <p className="card-text fw-semibold job ms-2">{job}</p>
        </div>
       <div className="d-flex mt-4 ">
       <IoMdMail  className='job me-2  social_icons mail' style={{transform: "scale(1.2)"}}  />
       <FaLinkedin   className=' me-2 social_icons job ms-1' />
       <FaInstagram  className=' me-2 social_icons job ms-1'  />
       </div>

      </div>
    </div>
    </div>
  );
}
