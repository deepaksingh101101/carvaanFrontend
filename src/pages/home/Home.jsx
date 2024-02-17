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
    title:"Dubai International special Flight Deals",
    orignalPrice:"INR 2,34,455",
    discountPrice:"INR 86,000",
    img:goa
  },
  {
    id:"2",
    time:"7 Days 4 Night",
    rating:"4.2",
    review:"244",
    title:"Dubai International special Flight Deals",
    orignalPrice:"INR 2,34,455",
    discountPrice:"INR 86,000",
    img:ladakh
  },
  {
    id:"3",
    time:"7 Days 4 Night",
    rating:"4.6",
    review:"244",
    title:"Dubai International special Flight Deals",
    orignalPrice:"INR 2,34,455",
    discountPrice:"INR 86,000",
    img:andaman
  },
  {
    id:"4",
    time:"7 Days 4 Night",
    rating:"4.6",
    review:"244",
    title:"Dubai International special Flight Deals",
    orignalPrice:"INR 2,34,455",
    discountPrice:"INR 86,000",
    img:chilka
  },
  {
    id:"5",
    time:"7 Days 4 Night",
    rating:"4.6",
    review:"244",
    title:"Dubai International special Flight Deals",
    orignalPrice:"INR 2,34,455",
    discountPrice:"INR 86,000",
    img:goa2
  },
  {
    id:"6",
    time:"7 Days 4 Night",
    rating:"4.6",
    review:"244",
    title:"Dubai International special Flight Deals",
    orignalPrice:"INR 2,34,455",
    discountPrice:"INR 86,000",
    img:kerala
  },
  {
    id:"7",
    time:"7 Days 4 Night",
    rating:"4.6",
    review:"244",
    title:"Dubai International special Flight Deals",
    orignalPrice:"INR 2,34,455",
    discountPrice:"INR 86,000",
    img:melborn
  },
  {
    id:"8",
    time:"7 Days 4 Night",
    rating:"4.6",
    review:"244",
    title:"Dubai International special Flight Deals",
    orignalPrice:"INR 2,34,455",
    discountPrice:"INR 86,000",
    img:ladakh
  },
  {
    id:"9",
    time:"7 Days 4 Night",
    rating:"4.6",
    review:"244",
    title:"Dubai International special Flight Deals",
    orignalPrice:"INR 2,34,455",
    discountPrice:"INR 86,000",
    img:goa
  }
 
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


      {/* <SourceDestCard/> */}
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

<Faq/>
    </>
  )
}
