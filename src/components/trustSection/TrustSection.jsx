import TrustCard from '../trustCard/TrustCard'
import { useState, useEffect } from 'react';
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import '../carousel/Carausel'
import './TrustSection.css'


export default function TrustSection({ trustCardDatas }) {
  const [chunkSize, setChunkSize] = useState(4);

  useEffect(() => {
    const updateChunkSize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1399) {
        setChunkSize(4);
      } else if (screenWidth >= 991) {
        setChunkSize(3);
      }
      else if (screenWidth >= 768) {
        setChunkSize(2);
      }
      else {
        setChunkSize(1);
      }
    };

    // Initial chunk size update
    updateChunkSize();

    // Event listener for window resize
    window.addEventListener('resize', updateChunkSize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', updateChunkSize);
    };
  }, []);

  // Function to chunk the itinerariesData array into groups
  const chunkArray = (array, size) => {
    const chunkedArr = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArr.push(array.slice(i, i + size));
    }
    return chunkedArr;
  };

  // Chunk the itinerariesData array into groups based on chunkSize
  const chunkedTrustCardDatas = chunkArray(trustCardDatas, chunkSize);

  return (
    <>
      <div id="carouselExample2" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {chunkedTrustCardDatas.map((chunk, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
              <div className="container d-flex flex-wrap align-items-center justify-content-center justify-content-sm-center  justify-content-md-between justify-content-lg-between">
                {chunk.map((trust, i) => (
                  <TrustCard key={i} {...trust} />
                ))}
              </div>
            </div>
          ))}
        </div>
      <div className="d-flex mt-4  justify-content-center align-items-center">
      <button className="next mx-3 " type="button" data-bs-target="#carouselExample2" data-bs-slide="prev">
            <span className="prev_span" aria-hidden="true"><GrPrevious /></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <p className='my-0'>4 of 12</p>
      <button className="prev mx-3" type="button" data-bs-target="#carouselExample2" data-bs-slide="next">
            <span className="next_span" aria-hidden="true"><GrNext /></span>
            <span className="visually-hidden">Next</span>
          </button>
         
          
      </div>
      </div> 
    </>
  )
}
