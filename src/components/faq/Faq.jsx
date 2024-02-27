import React from 'react'
import './Faq.css'
import Accordian from '../accordian/Accordian'
export default function Faq() {
  return (
    <>
  <div className="container faq mb-5" id="faq">
    <h2 className='text-center fw-bold mt-5'>Frequently ask question</h2>
  <ul className="nav  nav-pills mb-3 d-flex justify-content-center mt-5" id="pills-tab" role="tablist">
  <li className="nav-item for_active" role="presentation">
    <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">General</button>
  </li>
  <li className="nav-item for_active" role="presentation">
    <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Pricing</button>
  </li>
  <li className="nav-item for_active" role="presentation">
    <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Travel</button>
  </li>
  <li className="nav-item for_active" role="presentation">
    <button className="nav-link" id="pills-other-tab" data-bs-toggle="pill" data-bs-target="#pills-other" type="button" role="tab" aria-controls="pills-other" aria-selected="false">Other</button>
  </li>
  <li className="nav-item for_active" role="presentation">
    <button className="nav-link" id="pills-pricing-tab" data-bs-toggle="pill" data-bs-target="#pills-pricing" type="button" role="tab" aria-controls="pills-pricing" aria-selected="false">Pricing</button>
  </li>
</ul>
<div className="tab-content" id="pills-tabContent">
  <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
    <Accordian/>
  </div>
  <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
<Accordian/>
    </div>
  <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
<Accordian/>
    </div>
  <div className="tab-pane fade" id="pills-other" role="tabpanel" aria-labelledby="pills-other-tab">
<Accordian/>
    </div>
  <div className="tab-pane fade" id="pills-pricing" role="tabpanel" aria-labelledby="pills-pricing-tab">
<Accordian/>
    </div>
</div>
  </div>
    </>
  )
}
