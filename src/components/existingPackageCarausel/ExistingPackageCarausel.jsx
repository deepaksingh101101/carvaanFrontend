import { useEffect, useState } from 'react';
import './existingPackageCarausel.css'
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
// import PackageCarauselCard from '../packageCarauselCard/PackageCarauselCard';
import PackagesCard from '../packagesCard/PackagesCard'

export default function ExistingPackageCarausel({ domesticCardData,crouselId,interval }) {
    const [chunkSize, setChunkSize] = useState(4);
    const [showCarauselButton, setShowCarauselButton] = useState(false);

    useEffect(() => {
        const updateChunkSize = () => {
          const screenWidth = window.innerWidth;
          if (screenWidth >= 1399) {
            setShowCarauselButton(true)
            setChunkSize(4);
          } else if (screenWidth >= 991) {
            setShowCarauselButton(false)
            setChunkSize(3);
          }
          else if (screenWidth >= 768){
            setChunkSize(2);
            setShowCarauselButton(false)
          }
          else {
            setChunkSize(2);
            setShowCarauselButton(false)
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

  const chunkedDomesticCardData = chunkArray(domesticCardData, chunkSize);


  return (
    // <div id={`${crouselId}`} className="carousel slide"  data-bs-ride="true">
    // <div id="carouselExampleSlidesOnly" className="carousel slide"  data-bs-ride="carousel" >
   <div id={`${crouselId}`} className="carousel slide"  data-bs-ride="carousel" >
        <div className="carousel-inner">
        {showCarauselButton&& <button style={{opacity:"1"}} id='iPrev' className="carousel-control-prev  justify-content-start"  type="button" data-bs-target={`#${crouselId}`}  data-bs-slide="prev" >
          <span className="prev_next d-flex mb-5 align-items-center  justify-content-center " aria-hidden="true"><GrPrevious className='' id='prev' /></span>
          <span className="visually-hidden">Previous</span>
        </button>}
          {chunkedDomesticCardData.map((chunk, index) => (
            <div  key={index} className={`carousel-item  ${index === 0 ? "active" : ""}`} data-bs-interval={`${interval}`} >
              <div className="custom_padding_for_box_shadow container d-flex  align-items-center justify-content-center justify-content-sm-center  justify-content-md-between justify-content-lg-between">
                {chunk.map((itinerary, i) => (
                  <PackagesCard key={i} {...itinerary} />
                ))}
              </div>
            </div>
          ))}
         { showCarauselButton &&<button id='iNext' style={{opacity:"1"}} className="   carousel-control-next justify-content-end" type="button" data-bs-target={`#${crouselId}`}  data-bs-slide="next">
          <span className="prev_next d-flex align-items-center justify-content-center  mb-5" id="" aria-hidden="true"><GrNext id="next" /></span>
          <span className="visually-hidden">Next</span>
        </button>}
        </div>
        <div className='gradient-overlay'>
          
          </div>
        <div className='gradient-overlay2'>
          
          </div>
        
      </div>
  )
}
