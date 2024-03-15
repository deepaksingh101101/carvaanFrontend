import React from 'react'
import './Cardnav2.css'

export default function Cardnav2(id) {
    return (
        <div id={id}>
            <div className='container ms-0 mt-5'><div className='p-2 border rounded bg-white'>
                <h4 className="mt-2 ms-1">Itinerary</h4>
                <div className="accordion mt-4">
                    <div className="">
                        <h2 className="header">
                            <button className="accordion-button bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                            <span className="badge bg-primary square-badge me-1 fs-5 py-3">01</span> Day 1: Departure 
                            </button>
                        </h2>
                      
                        <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                            <div className="accordion-body"> 
                           <p> Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet.</p>
                           </div>
                           <ul>
                           <li>5 Star Accommodation</li>
                           <li>Breakfast</li>
                           <li>5 Star Accommodation</li>
                           <li>Breakfast</li>
                           </ul>
                           <hr />
                        </div>
                    </div>
                    <div className="">
                        <h2 className="header">
                            <button className="accordion-button bg-white collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                            <span className="badge bg-primary square-badge me-1 fs-5 py-3">02</span>Day 2: Visiting Zurich, Geneva and Zermatt
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                            <div className="accordion-body">
                                <p>Qui tempore voluptate qui quia commodi rem praesentium alias et voluptates officia sed molestiae sint et voluptas quos. Qui harum repudiandae galisum dolorem</p>
                                
                            </div>
                            <ul><li>5 Star Accommodation</li>
                           <li>Breakfast</li>
                           <li>5 Star Accommodation</li>
                           <li>Breakfast</li></ul>
                           <hr />
                        </div>
                    </div>
                    <div className="">
                        <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                            <button className="accordion-button bg-white collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                            <span className="badge bg-primary square-badge me-1 fs-5 py-3">03</span>Day 3: Visiting Zurich, Geneva and Zermatt
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                            <div className="accordion-body">
                            <p>Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet.</p>                        </div>
                        <hr /></div>
                    </div>
                    <div className="">
                        <h2 className="accordion-header" id="panelsStayOpen-headingFour">
                            <button className="accordion-button bg-white collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
                            <span className="badge bg-primary square-badge me-1 fs-5 py-3">04</span>Day 4: Visiting Zurich, Geneva and Zermatt
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFour">
                            <div className="accordion-body">
                            <p>Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet.</p></div>
                        
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}
