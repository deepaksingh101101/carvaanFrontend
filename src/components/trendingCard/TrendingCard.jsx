import { FaArrowRightLong } from "react-icons/fa6";

export default function TrendingCard({ trendingCardData }) {
  return (
    <div className="container">
        <div className="row  d-flex justify-content-center ">
            
        {trendingCardData &&
        trendingCardData.map((cardData, index) => (
          <div className="card  px-0 my-3 mx-3" style={{ width: "18rem",fontFamily: "Inter, sans-serif"}} key={index}>
            <img src={cardData.image} className="card-img-top" alt={cardData.alt} style={{height:"180px"}} />
            <div className="card-body d-flex justify-content-between align-items-center">
              <div className="d-flex justify-content-between flex-column ">
                <h5 className="card-title" style={{color:"#9A3C70"}} >{cardData.title}</h5>
                <p className="card-text">{cardData.description}</p>
              </div>
              <FaArrowRightLong />
            </div>
          </div>
        ))}
        </div>
      
    </div>
  );
}
