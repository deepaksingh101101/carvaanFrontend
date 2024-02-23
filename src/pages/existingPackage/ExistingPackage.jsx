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

import './ExistingPackage.css'
import { IoIosSearch } from "react-icons/io";
import PackagesCard from '../../components/packagesCard/PackagesCard'

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


export default function ExistingPackage() {
  return (
    <>
    <div className="container d-flex  justify-content-center  my-5">
    <form className="d-flex py-2 mt-4 px-3 existing_search justify-content-between align-items-center " style={{minWidth:"40%"}} role="search">
    <IoIosSearch className='me-2' style={{fontSize:"30px"}} />
        <input className=" me-2  border-0 w-100 " type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn existing_search_btn px-4 py-2 " type="submit">Search</button>
      </form>
    </div>
    

    <div className="container existing_packages">
    <h5 className='text-center fw-semibold'>Top Rated</h5>
    <h1 className='text-center my-3 fw-bold display-5' >Our Domestic Trips</h1>
    <div className="d-flex justify-content-center flex-wrap">
    <PackagesCard domesticCardData={domesticCardData}/>
    </div>
    </div>
    </>
  )
}
