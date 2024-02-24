import ep1 from '../../assets/existingPackage/ep1.jfif'
import ep2 from '../../assets/existingPackage/ep2.png'
import ep3 from '../../assets/existingPackage/ep3.jfif'
import ep4 from '../../assets/existingPackage/ep4.jfif'
import ep5 from '../../assets/existingPackage/ep5.jfif'
import ep6 from '../../assets/existingPackage/ep6.jfif'
import ep7 from '../../assets/existingPackage/ep7.jfif'
import ep8 from '../../assets/existingPackage/ep8.jfif'
import ep9 from '../../assets/existingPackage/ep9.jfif'
import ep10 from '../../assets/existingPackage/ep10.jfif'

import domestic1 from '../../assets/domestic/domestic1.jfif'
import domestic2 from '../../assets/domestic/domestic2.jfif'
import domestic3 from '../../assets/domestic/domestic3.jfif'
import domestic4 from '../../assets/domestic/domestic4.jfif'
import domestic5 from '../../assets/domestic/domestic5.jfif'
import domestic6 from '../../assets/domestic/domestic6.png'
import domestic7 from '../../assets/domestic/domestic7.jfif'
import domestic8 from '../../assets/domestic/domestic8.jfif'


import Carausel from '../../components/carousel/Carausel';

import goa from '../../assets/trending/goa.png'
import andaman from '../../assets/trending/andaman.png'
import chilka from '../../assets/trending/chilka.png'
import goa2 from '../../assets/trending/goa2.png'
import kerala from '../../assets/trending/kerala.png'
import ladakh from '../../assets/trending/ladakh.png'
import melborn from '../../assets/trending/melborn.png'
// import paris from '../../assets/trending/paris.png'
// import Offer from '../../components/offers/Offer';
// import Faq from '../../components/faq/Faq';


import './ExistingPackage.css'
import { IoIosSearch } from "react-icons/io";
// import PackagesCard from '../../components/packagesCard/PackagesCard'
import Navbar from '../../components/navbar/Navbar'
import ExistingPackageCarausel from '../../components/existingPackageCarausel/ExistingPackageCarausel'
import PackageCarauselCard from '../../components/packageCarauselCard/PackageCarauselCard'
const domesticCardData=[{
  id:1,
  destination:"Rome, Italy",
  price:"23,458",
  rating:4.5,
  duration:"4 Days 3 Night",
  img:domestic1
},
{
  id:2,
  destination:"Rome, Italy",
  price:"23,458",
  rating:4.5,
  duration:"4 Days 2 Night",
  img:domestic2
},
{
  id:3,
  destination:"Rome, Italy",
  price:"23,458",
  rating:4.5,
  duration:"4 Days 1 Night",
  img:domestic3
},
{
  id:4,
  destination:"Rome, Italy",
  price:"23,458",
  rating:4.5,
  duration:"4 Days ",
  img:domestic4
},
{
  id:5,
  destination:"Rome, Italy",
  price:"23,458",
  rating:4.5,
  duration:"3 Days 3 Night",
  img:domestic5
},
{
  id:6,
  destination:"Rome, Italy",
  price:"23,458",
  rating:4.5,
  duration:"3 Days 2 Night",
  img:domestic6
},
{
  id:7,
  destination:"Rome, Italy",
  price:"23,458",
  rating:4.5,
  duration:"3 Days 1 Night",
  img:domestic7
},
{
  id:8,
  destination:"Rome, Italy",
  price:"23,458",
  rating:4.5,
  duration:"3 Days 3 Night",
  img:domestic8
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

export default function ExistingPackage() {
  return (
    <>
      <Navbar bg={"#13182F"} />
      <div className="container mt-5 pt-4 d-flex  justify-content-center  my-5">
        <form className="d-flex py-2 mt-4 px-3 existing_search justify-content-between align-items-center " style={{ minWidth: "40%" }} role="search">
          <IoIosSearch className='me-2' style={{ fontSize: "30px" }} />
          <input className=" me-2  border-0 w-100 " type="search" placeholder="Search" aria-label="Search" />
          <button className="btn existing_search_btn px-4 py-2 " type="submit">Search</button>
        </form>
      </div>


      <div className=" px-0 px-lg-5  existing_packages">
        <h5 className='text-center fw-semibold text_secondary'>Top Rated</h5>
        <h1 className='blue_ternary text-center my-4 fw-bold display-5 px-2 px-sm-3 px-md-0 px-lg-0' >Honeymoon Destination</h1>
        <ExistingPackageCarausel domesticCardData={domesticCardData} crouselId="carouselHoneymoonPackage" interval="1500" />

        <h1 className='text-center blue_ternary  fw-bold display-5 px-2 px-sm-3 px-md-0 px-lg-0' >Trending Religious Places</h1>
        <ExistingPackageCarausel domesticCardData={domesticCardData}  crouselId="carouselExistingPackage" interval="2000" />


        <h5 className='text-center fw-semibold text_secondary '>Top Rated</h5>
        <h1 className='blue_ternary text-center my-3 fw-bold display-5 px-2 px-sm-3 px-md-0 px-lg-0' >Our Domestic Trips</h1>
        <div className="d-flex justify-content-center flex-wrap">
          {domesticCardData.map((packageData) => (
            <PackageCarauselCard key={packageData.id} {...packageData} />
          ))}
        </div>


        
      </div>

      <h5 className='text-center fw-semibold mt-5'>Explore</h5>
      <h1 className='text-center blue_ternary my-1 fw-bold display-5' >Best Handpicked For You</h1>
      <div className="d-flex justify-content-center flex-wrap">
        <div className="container my-5">
          {/* You may include your carousel component here */}
          <Carausel itinerariesData={itinerariesData}/>

        </div>
      </div>
    </>
  )
}
