import React from 'react';
import img1 from '../../assets/cardView/Rectangle 28.png';
import img2 from '../../assets/cardView/img2.jpg';
import img3 from '../../assets/cardView/img3.jpg';

const Slider = () => {
    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000">
                    <img src={img1} className="d-block w-100 object-fit-cover" alt="Slide 1" style={{ height: "500px",borderRadius: "8px" }} />
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                    <img src={img2} className="d-block w-100 object-fit-cover" alt="Slide 2" style={{ height: "500px",borderRadius: "8px" }} />
                </div>
                <div className="carousel-item">
                    <img src={img3} className="d-block w-100 object-fit-cover" alt="Slide 3" style={{ height: "500px", borderRadius: "8px" }} />
                </div>
            </div>

            
        </div>
    )
}

export default Slider;
