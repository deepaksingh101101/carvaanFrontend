import React, { useState, useEffect } from 'react';
import ItiCard from "../itiCard/ItiCard";
import "./Carausel.css";
// import { GrNext } from "react-icons/gr";
// import { GrPrevious } from "react-icons/gr";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
export default function Carausel({ itinerariesData }) {
  // const [chunkSize, setChunkSize] = useState(4);

  // useEffect(() => {
  //   const updateChunkSize = () => {
  //     const screenWidth = window.innerWidth;
  //     if (screenWidth >= 1399) {
  //       setChunkSize(4);
  //     } else if (screenWidth >= 991) {
  //       setChunkSize(3);
  //     }
  //     else if (screenWidth >= 768){
  //       setChunkSize(2);
  //     }
  //     else {
  //       setChunkSize(1);
  //     }
  //   };

  //   // Initial chunk size update
  //   updateChunkSize();

  //   // Event listener for window resize
  //   window.addEventListener('resize', updateChunkSize);

  //   // Cleanup
  //   return () => {
  //     window.removeEventListener('resize', updateChunkSize);
  //   };
  // }, []);

  // Function to chunk the itinerariesData array into groups
  // const chunkArray = (array, size) => {
  //   const chunkedArr = [];
  //   for (let i = 0; i < array.length; i += size) {
  //     chunkedArr.push(array.slice(i, i + size));
  //   }
  //   return chunkedArr;
  // };

  // Chunk the itinerariesData array into groups based on chunkSize
  // const chunkedItineraries = chunkArray(itinerariesData, chunkSize);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      partialVisibilityGutter: 80,
      items: 4
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 80
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      partialVisibilityGutter: 40
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      partialVisibilityGutter: 40
    }
  };




  return (
    <>
      {/* <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
        <button style={{opacity:"1"}} id='iPrev' className="carousel-control-prev justify-content-start" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="prev_next d-flex align-items-center justify-content-center " aria-hidden="true"><GrPrevious className='' id='prev' /></span>
          <span className="visually-hidden">Previous</span>
        </button>
          {chunkedItineraries.map((chunk, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
              <div className="container d-flex flex-wrap align-items-center justify-content-center justify-content-sm-center  justify-content-md-between justify-content-lg-between">
                {chunk.map((itinerary, i) => (
                  <ItiCard key={i} {...itinerary} />
                ))}
              </div>
            </div>
          ))}
          <button id='iNext' style={{opacity:"1"}} className="ms-4 carousel-control-next justify-content-end" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="prev_next d-flex align-items-center justify-content-center " id="" aria-hidden="true"><GrNext id="next" /></span>
          <span className="visually-hidden">Next</span>
        </button>
        </div>
        <div className='gradient-overlay'>
          
          </div>
        
      </div> */}
<Carousel
partialVisible={true}
  swipeable={true}
  draggable={true}
  responsive={responsive}
  infinite={true}
  autoPlay={true}
  autoPlaySpeed={1000}
  keyBoardControl={true}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>

  {itinerariesData.map((itinerary,i)=>(
    <ItiCard key={i} {...itinerary} />
  ))}
</Carousel>;

    </>
  );
}
