import './Home.css';

import TrendingCard from '../../components/trendingCard/TrendingCard';
import goa from '../../assets/trending/goa.png'
import andaman from '../../assets/trending/andaman.png'
import chilka from '../../assets/trending/chilka.png'
import goa2 from '../../assets/trending/goa2.png'
import kerala from '../../assets/trending/kerala.png'
import ladakh from '../../assets/trending/ladakh.png'
import melborn from '../../assets/trending/melborn.png'
import paris from '../../assets/trending/paris.png'
import Carausel from '../../components/carousel/Carausel';
import Offer from '../../components/offers/Offer';
import Faq from '../../components/faq/Faq';
import aeroplane from '../../assets/home/areoplane.png'
import { MdAirplanemodeActive } from "react-icons/md";
import { IoWallet } from "react-icons/io5";
import { MdSupportAgent } from "react-icons/md";
import TrustCard from '../../components/trustCard/TrustCard';


import blue_img1 from '../../assets/trust/blue_img1.jfif'
import blue_img2 from '../../assets/trust/blue_img2.jfif'
import blue_img3 from '../../assets/trust/blue_img3.jfif'
import blue_img4 from '../../assets/trust/blue_img4.jfif'
import TrustSection from '../../components/trustSection/TrustSection';
import SourceDestCard from '../../components/sourceDestCard/SourceDestCard';
export default function Home() {

const trendingCardData=[
  {
    id:"1",
    image:goa,
    title:"Goa",
    description:"123 Popular Place",
    link:"/"
  },
  {
    id:"2",
    image:andaman,
    title:"Andaman",
    description:"123 Popular Place",
    link:"/"
  },
  {
    id:"3",
    image:kerala,
    title:"Kerala",
    description:"123 Popular Place",
    link:"/"
  },
  {
    id:"4",
    image:chilka,
    title:"Chilka",
    description:"123 Popular Place",
    link:"/"
  },
  {
    id:"5",
    image:paris,
    title:"Paris",
    description:"123 Popular Place",
    link:"/"
  },
  {
    id:"6",
    image:melborn,
    title:"Melborn",
    description:"123 Popular Place",
    link:"/"
  },
  {
    id:"7",
    image:ladakh,
    title:"Ladakh",
    description:"123 Popular Place",
    link:"/"
  },
  {
    id:"8",
    image:goa2,
    title:"Goa",
    description:"123 Popular Place",
    link:"/"
  },
]

const itinerariesData=[
  {
    id:"1",
    time:"7 Days 4 Night",
    rating:"4.6",
    review:"244",
    title:"Dubai International special Flight Deals1",
    orignalPrice:"INR 2,34,455",
    discountPrice:"INR 86,000",
    img:goa
  },
  {
    id:"2",
    time:"7 Days 4 Night",
    rating:"4.2",
    review:"244",
    title:"Dubai International special Flight Deals2",
    orignalPrice:"INR 2,34,455",
    discountPrice:"INR 86,000",
    img:ladakh
  },
  {
    id:"3",
    time:"7 Days 4 Night",
    rating:"4.6",
    review:"244",
    title:"Dubai International special Flight Deals3",
    orignalPrice:"INR 2,34,455",
    discountPrice:"INR 86,000",
    img:andaman
  },
  {
    id:"4",
    time:"7 Days 4 Night",
    rating:"4.6",
    review:"244",
    title:"Dubai International special Flight Deals4",
    orignalPrice:"INR 2,34,455",
    discountPrice:"INR 86,000",
    img:chilka
  },
  {
    id:"5",
    time:"7 Days 4 Night",
    rating:"4.6",
    review:"244",
    title:"Dubai International special Flight Deals5",
    orignalPrice:"INR 2,34,455",
    discountPrice:"INR 86,000",
    img:goa2
  },
  {
    id:"6",
    time:"7 Days 4 Night",
    rating:"4.6",
    review:"244",
    title:"Dubai International special Flight Deals6",
    orignalPrice:"INR 2,34,455",
    discountPrice:"INR 86,000",
    img:kerala
  },
  {
    id:"7",
    time:"7 Days 4 Night",
    rating:"4.6",
    review:"244",
    title:"Dubai International special Flight Deals7",
    orignalPrice:"INR 2,34,455",
    discountPrice:"INR 86,000",
    img:melborn
  },
  {
    id:"8",
    time:"7 Days 4 Night",
    rating:"4.6",
    review:"244",
    title:"Dubai International special Flight Deals8",
    orignalPrice:"INR 2,34,455",
    discountPrice:"INR 86,000",
    img:ladakh
  },
  {
    id:"9",
    time:"7 Days 4 Night",
    rating:"4.6",
    review:"244",
    title:"Dubai International special Flight Deals9",
    orignalPrice:"INR 2,34,455",
    discountPrice:"INR 86,000",
    img:goa
  }
 
]

const trustCardDatas=[
  {
    id:"1",
    name:"Soumuyadip jana",
    location:"kolkata",
    profileImg:blue_img1
},
  {
    id:"2",
    name:"Soumuyadip jana",
    location:"kolkata",
    profileImg:blue_img2
},
  {
    id:"3",
    name:"Soumuyadip jana",
    location:"kolkata",
    profileImg:blue_img3
},
  {
    id:"4",
    name:"Soumuyadip jana",
    location:"kolkata",
    profileImg:blue_img4
},
  {
    id:"5",
    name:"Soumuyadip jana",
    location:"kolkata",
    profileImg:blue_img4
},
  {
    id:"6",
    name:"Soumuyadip jana",
    location:"kolkata",
    profileImg:blue_img3
},
  {
    id:"7",
    name:"Soumuyadip jana",
    location:"kolkata",
    profileImg:blue_img2
},
  {
    id:"8",
    name:"Soumuyadip jana",
    location:"kolkata",
    profileImg:blue_img1
},
]

  return (
    <>
      <div className="container-fluid home_bg p-0 position-relative d-flex justify-content-center flex-column align-items-center"  >
        <div className="row me-0 d-flex justify-content-center">
          <div className="col-12 col-md-6  col-lg-9 ">
          <h1 className='text-light mt-5 pt-4 mx-4 fw-bold text-center'>Enjoy Your Dream Vacation</h1>
          <h4 className='text-light px-3 fw-light text-center' >Plan and book our perfect trip with expert advice, travel tips, destination information and inspiration from us</h4>
          </div>
        </div>
      </div>

{/* 
      <div style={{borderRadius:"8px",background:"white"}} className="container">
      <SourceDestCard/>
      </div> */}




      
<div className="container my-5" style={{fontFamily:"Inter"}}>
<h2 className='text-center fw-bold'>Explore <span className="trending_para_span">Trending</span> Destination</h2>
</div>
    <TrendingCard trendingCardData={trendingCardData}/>

    <div className="container my-5" style={{fontFamily:"Inter"}}>
<h2 className='text-center fw-bold'> <span className="trending_para_span">Handpicked</span> Itineraries for you</h2>
</div>


{/* Carausel  */}

<div className="container">
<Carausel itinerariesData={itinerariesData}/>
</div>


<div className="container my-5" style={{fontFamily:"Inter"}}>
<h2 className='text-center fw-bold'> <span className="trending_para_span">Offers</span>  For You</h2>
</div>

<Offer/>
{/* Why choose us? section */}


<div className="container choose mb-5   ">
  <div className="row">
    <div className="col-lg-6">
    {/* <img src={aeroplane} alt="Areoplane"/> */}
    </div>
    <div className=" col-lg-6 center d-flex flex-column ">
<div className="my-3 center " style={{fontFamily:"Inter"}}>
<h2 className='fw-bold'>Why <span className="trending_para_span">Choose </span>Us</h2>
<p className='choose_color text-sm-center text-lg-start'>We are offering unbeatable prices and custom packages </p>
</div>

<div className="my-3">
<div className="row mx-0 center  d-flex align-items-center ">
  <div className=" col-lg-1 d-flex mb-2 mb-sm-2 mb-md-2 mb-lg-0 align-items-center justify-content-center" style={{background:"white",borderRadius:"10px",height:"60px",width:"60px"}}>
  <MdAirplanemodeActive  className=' blue_icons ' fontSize={"40px"} />
  </div>
  <div className="center col-lg-10 px-md-0 px-lg-2 d-flex justify-content-between  flex-column">
    <h5 className=''>Wide Range Option</h5>
    <p className='choose_color mb-0'>Guaranteed the best prices for every booking </p>
  </div>
</div>
</div>

<div className="my-3">
<div className="row mx-0 center d-flex align-items-center ">
  <div className="col-lg-1  d-flex mb-2 mb-sm-2 mb-md-2 mb-lg-0 align-items-center justify-content-center" style={{background:"white",borderRadius:"10px",height:"60px",width:"60px"}}>
  <IoWallet  className=' blue_icons ' fontSize={"40px"} />
  </div>
  <div className="col-lg-10 center px-md-0 px-lg-2 d-flex justify-content-between  flex-column">
    <h5 className=''>Best Prices And Special Offers</h5>
    <p className='choose_color mb-0'>Guaranteed the best prices for every booking </p>
  </div>
</div>
</div>

<div className="my-3">
<div className="row mx-0 center d-flex align-items-center ">
  <div className="col-lg-1 mb-2 mb-sm-2 mb-md-2 mb-lg-0 d-flex align-items-center px- justify-content-center" style={{background:"white",borderRadius:"10px",height:"60px",width:"60px"}}>
  <MdSupportAgent  className=' blue_icons ' fontSize={"40px"} />
  </div>
  <div className="col-lg-10 center  px-md-0 px-lg-2 d-flex justify-content-between  flex-column">
    <h5 className=''>24*7 Hours Customer Support</h5>
    <p className='choose_color mb-0'>Guaranteed the best prices for every booking </p>
  </div>
</div>
</div>


    </div>
  </div>
</div>

<div className="container-fluid trust_section py-5">
  <h2 className='text-center fw-bold '>Overs 1000+ People Trust Us</h2>
  <p className='text-center mt-4'>Carvaan support our Travelers from all aspects</p>
<TrustSection trustCardDatas={trustCardDatas}/>
</div>

<Faq/>


    </>
  )
}
