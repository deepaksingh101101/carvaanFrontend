import { useState } from 'react';
import './Filter.css'
import { FaAngleDown } from "react-icons/fa";


export default function Filter() {
    const [showAllDuration, setShowAllDuration] = useState(false);
    const [showAllTranspiration, setShowAllTranspiration] = useState(false);
    const [showAllTheme, setShowAllTheme] = useState(false);
  return (
    <>
  <div className=" pt-5">
  <div className="container filter py-3 px-3 mt-5 ">
    <div className="d-flex justify-content-between">
        
    <div className="d-flex">
    <h6 className="fw-bold " >All Filters</h6>
   
    <div className="filter_count ms-3 d-flex justify-content-center align-items-center ">
    <h6 className="  blue_text mt-2 " >4</h6>
    </div>

    </div>

    <h6 className="blue_text" >Clear all</h6>


    </div>

    <form className="d-flex mt-2 " role="search">
    <input className="filter_search_input form-control bg-transparent border-0 me-2" type="search" placeholder="Search Beach, Places etc" aria-label="Search"/>
    </form>

<div className="d-flex work_mode flex-column mt-4">
<div className="d-flex justify-content-between work"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
<h6>Budget Per Person </h6>
<FaAngleDown  />

</div>

<div className="collapse" id="collapseExample">

<div className="form-check mt-2">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault1"/>
  <label className="form-check-label" htmlFor="flexCheckDefault1">
   0-5k
  </label>
</div>
<div className="form-check mt-2">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault2"/>
  <label className="form-check-label" htmlFor="flexCheckDefault2">
    5k- 10k
  </label>
</div>
<div className="form-check mt-2">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault3"/>
  <label className="form-check-label" htmlFor="flexCheckDefault3">
   10k- 15k
  </label>
</div>
<div className="form-check mt-2">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault3"/>
  <label className="form-check-label" htmlFor="flexCheckDefault3">
   15k- 20k
  </label>
</div>
<div className="form-check mt-2">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault3"/>
  <label className="form-check-label" htmlFor="flexCheckDefault3">
   20k and Above
  </label>
</div>


</div>


</div>



<div className="d-flex work_mode flex-column mt-4">
<div className="d-flex justify-content-between work" onClick={()=>{setShowAllDuration(false)}}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample">
<h6>Duration (no of Days)</h6>
<FaAngleDown  />

</div>

<div className="collapse" id="collapseExample2">
<div className="form-check mt-2">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault1"/>
  <label className="form-check-label" htmlFor="flexCheckDefault1">
    1
  </label>
</div>
<div className="form-check mt-2">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault2"/>
  <label className="form-check-label" htmlFor="flexCheckDefault2">
   2
  </label>
</div>
<div className="form-check mt-2">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault3"/>
  <label className="form-check-label" htmlFor="flexCheckDefault3">
    3
  </label>
</div>

<div className="form-check mt-2">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault3"/>
  <label className="form-check-label" htmlFor="flexCheckDefault3">
    4
  </label>
</div>

{
    !showAllDuration && (<h6 className="blue_text mt-2 ms-4" role="button" onClick={(e)=>{setShowAllDuration(true)}} >View all</h6>
    )
}

{showAllDuration && (
    <>
    <div className="form-check mt-2">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault3"/>
  <label className="form-check-label" htmlFor="flexCheckDefault3">
    5
  </label>
</div>

<div className="form-check mt-2">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault3"/>
  <label className="form-check-label" htmlFor="flexCheckDefault3">
    6
  </label>
</div>

<div className="form-check mt-2">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault3"/>
  <label className="form-check-label" htmlFor="flexCheckDefault3">
    7
  </label>
</div>

<div className="form-check mt-2">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault3"/>
  <label className="form-check-label" htmlFor="flexCheckDefault3">
    More than 7
  </label>
</div>
    </>
)}




</div>








</div>



<div className="d-flex work_mode flex-column mt-4">
<div className="d-flex justify-content-between work"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample14" aria-expanded="false" aria-controls="collapseExample">
<h6>Trip Caption</h6>
<FaAngleDown  />

</div>

<div className="collapse" id="collapseExample14">
<div className="form-check mt-2">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault1"/>
  <label className="form-check-label" htmlFor="flexCheckDefault1">
    yes
  </label>
</div>
<div className="form-check mt-2">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault2"/>
  <label className="form-check-label" htmlFor="flexCheckDefault2">
  No
  </label>
</div>




</div>














</div>


<div className="d-flex work_mode flex-column mt-4">
<div className="d-flex justify-content-between work"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample4" aria-expanded="false" aria-controls="collapseExample">
<h6>Rating</h6>
<FaAngleDown  />

</div>

<div className="collapse" id="collapseExample4">
<div className="form-check mt-2">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault1"/>
  <label className="form-check-label" htmlFor="flexCheckDefault1">
    0-1
  </label>
</div>
<div className="form-check mt-2">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault2"/>
  <label className="form-check-label" htmlFor="flexCheckDefault2">
   1-2
  </label>
</div>
<div className="form-check mt-2">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault3"/>
  <label className="form-check-label" htmlFor="flexCheckDefault3">
  2-3
  </label>
</div>

<div className="form-check mt-2">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault3"/>
  <label className="form-check-label" htmlFor="flexCheckDefault3">
  3-4
  </label>
</div>

<div className="form-check mt-2">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault3"/>
  <label className="form-check-label" htmlFor="flexCheckDefault3">
  4 and Above
  </label>
</div>

{/* <h6 className="blue_text mt-2 ms-4" >View all</h6> */}

</div>














</div>


<div className="d-flex work_mode flex-column mt-4">
<div className="d-flex justify-content-between work"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample5" aria-expanded="false" aria-controls="collapseExample">
<h6>Flight Inclusive</h6>
<FaAngleDown  />

</div>

<div className="collapse" id="collapseExample5">
<div className="form-check mt-2">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault1"/>
  <label className="form-check-label" htmlFor="flexCheckDefault1">
    yes
  </label>
</div>
<div className="form-check mt-2">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault2"/>
  <label className="form-check-label" htmlFor="flexCheckDefault2">
  No
  </label>
</div>


{/* <h6 className="blue_text mt-2 ms-4" >View all</h6> */}

</div>









<div className="d-flex work_mode flex-column mt-4">
<div className="d-flex justify-content-between work"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample3" aria-expanded="false" aria-controls="collapseExample">
<h6>Stay Included</h6>
<FaAngleDown  />

</div>

<div className="collapse" id="collapseExample3">
<div className="form-check mt-2">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault1"/>
  <label className="form-check-label" htmlFor="flexCheckDefault1">
    Hotel
  </label>
</div>
<div className="form-check mt-2">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault2"/>
  <label className="form-check-label" htmlFor="flexCheckDefault2">
  Camp
  </label>
</div>
<div className="form-check mt-2">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault2"/>
  <label className="form-check-label" htmlFor="flexCheckDefault2">
  Dorm
  </label>
</div>


{/* <h6 className="blue_text mt-2 ms-4" >View all</h6> */}

</div>














</div>


<div className="d-flex work_mode flex-column mt-4">
<div className="d-flex justify-content-between work"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample6" aria-expanded="false" aria-controls="collapseExample">
<h6>Room Occupancy</h6>
<FaAngleDown  />

</div>

<div className="collapse" id="collapseExample6">
<div className="form-check mt-2">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault1"/>
  <label className="form-check-label" htmlFor="flexCheckDefault1">
    Single
  </label>
</div>
<div className="form-check mt-2">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault2"/>
  <label className="form-check-label" htmlFor="flexCheckDefault2">
  Double Sharing
  </label>
</div>
<div className="form-check mt-2">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault2"/>
  <label className="form-check-label" htmlFor="flexCheckDefault2">
    Triple Sharing
  </label>
</div>
<div className="form-check mt-2">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault2"/>
  <label className="form-check-label" htmlFor="flexCheckDefault2">
    Quadruple sharing
  </label>
</div>







{/* <h6 className="blue_text mt-2 ms-4" >View all</h6> */}

</div>














</div>


<div className="d-flex work_mode flex-column mt-4">
<div className="d-flex justify-content-between work"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample7" aria-expanded="false" aria-controls="collapseExample">
<h6>No of Seats left</h6>
<FaAngleDown  />

</div>

<div className="collapse" id="collapseExample7">
<div className="form-check mt-2">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault1"/>
  <label className="form-check-label" htmlFor="flexCheckDefault1">
    1-5
  </label>
</div>
<div className="form-check mt-2">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault2"/>
  <label className="form-check-label" htmlFor="flexCheckDefault2">
  5-9
  </label>
</div>
<div className="form-check mt-2">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault2"/>
  <label className="form-check-label" htmlFor="flexCheckDefault2">
    10 or more
  </label>
</div>







{/* <h6 className="blue_text mt-2 ms-4" >View all</h6> */}

</div>














</div>




<div className="d-flex work_mode flex-column mt-4">
<div className="d-flex justify-content-between work"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample8" aria-expanded="false" aria-controls="collapseExample">
<h6>Trips</h6>
<FaAngleDown  />

</div>

<div className="collapse" id="collapseExample8">
<div className="form-check mt-2">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault1"/>
  <label className="form-check-label" htmlFor="flexCheckDefault1">
    Domestic
  </label>
</div>
<div className="form-check mt-2">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault2"/>
  <label className="form-check-label" htmlFor="flexCheckDefault2">
  International
  </label>
</div>








{/* <h6 className="blue_text mt-2 ms-4" >View all</h6> */}

</div>














</div>


<div className="d-flex work_mode flex-column mt-4">
<div className="d-flex justify-content-between work"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample9" aria-expanded="false" aria-controls="collapseExample">
<h6>Age Group</h6>
<FaAngleDown  />

</div>

<div className="collapse" id="collapseExample9">
<div className="form-check mt-2">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault1"/>
  <label className="form-check-label" htmlFor="flexCheckDefault1">
    18 to 25
  </label>
</div>
<div className="form-check mt-2">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault2"/>
  <label className="form-check-label" htmlFor="flexCheckDefault2">
  26 to 35
  </label>
</div>

<div className="form-check mt-2">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault2"/>
  <label className="form-check-label" htmlFor="flexCheckDefault2">
  36 to 45
  </label>
</div>

<div className="form-check mt-2">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault2"/>
  <label className="form-check-label" htmlFor="flexCheckDefault2">
  46 to 55
  </label>
</div>

<div className="form-check mt-2">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault2"/>
  <label className="form-check-label" htmlFor="flexCheckDefault2">
  Above 55
  </label>
</div>




{/* <h6 className="blue_text mt-2 ms-4" >View all</h6> */}

</div>














</div>


<div className="d-flex work_mode flex-column mt-4">
<div className="d-flex justify-content-between work"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample10" aria-expanded="false" aria-controls="collapseExample">
<h6>Meals</h6>
<FaAngleDown  />

</div>

<div className="collapse" id="collapseExample10">
<div className="form-check mt-2">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault1"/>
  <label className="form-check-label" htmlFor="flexCheckDefault1">
    Veg
  </label>
</div>
<div className="form-check mt-2">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault2"/>
  <label className="form-check-label" htmlFor="flexCheckDefault2">
  Non Veg
  </label>
</div>

<div className="form-check mt-2">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault2"/>
  <label className="form-check-label" htmlFor="flexCheckDefault2">
  Jain
  </label>
</div>






{/* <h6 className="blue_text mt-2 ms-4" >View all</h6> */}

</div>














</div>


<div className="d-flex work_mode flex-column mt-4">
<div className="d-flex justify-content-between work" onClick={()=>{setShowAllTranspiration(false)}}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample11" aria-expanded="false" aria-controls="collapseExample">
<h6>Type of Transpiration</h6>
<FaAngleDown  />

</div>

<div className="collapse" id="collapseExample11">
<div className="form-check mt-2">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault1"/>
  <label className="form-check-label" htmlFor="flexCheckDefault1">
    Volvo
  </label>
</div>
<div className="form-check mt-2">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault2"/>
  <label className="form-check-label" htmlFor="flexCheckDefault2">
  Traveller
  </label>
</div>

<div className="form-check mt-2">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault2"/>
  <label className="form-check-label" htmlFor="flexCheckDefault2">
  Train
  </label>
</div>

<div className="form-check mt-2">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault2"/>
  <label className="form-check-label" htmlFor="flexCheckDefault2">
  Flight
  </label>
</div>
{
    !showAllTranspiration && (<h6 className="blue_text mt-2 ms-4" role="button" onClick={()=>{setShowAllTranspiration(true)}} >View all</h6>
    )
}

{showAllTranspiration && (<>
    <div className="form-check mt-2">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault2"/>
  <label className="form-check-label" htmlFor="flexCheckDefault2">
  Private Car
  </label>
</div>

<div className="form-check mt-2">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault2"/>
  <label className="form-check-label" htmlFor="flexCheckDefault2">
  Ferry
  </label>
</div>
</>)}

{/* <h6 className="blue_text mt-2 ms-4" >View all</h6> */}

</div>














</div>


<div className="d-flex work_mode flex-column mt-4">
<div className="d-flex justify-content-between work" onClick={()=>{setShowAllTheme(false)}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample12" aria-expanded="false" aria-controls="collapseExample">
<h6>Choose by Theme</h6>
<FaAngleDown  />

</div>

<div className="collapse" id="collapseExample12">
<div className="form-check mt-2">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault1"/>
  <label className="form-check-label" htmlFor="flexCheckDefault1">
    Couple Friendly
  </label>
</div>
<div className="form-check mt-2">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault2"/>
  <label className="form-check-label" htmlFor="flexCheckDefault2">
  Women only
  </label>
</div>

<div className="form-check mt-2">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault2"/>
  <label className="form-check-label" htmlFor="flexCheckDefault2">
  Dating Trip
  </label>
</div>

<div className="form-check mt-2">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault2"/>
  <label className="form-check-label" htmlFor="flexCheckDefault2">
  Senior Citizen Friendly
  </label>
</div>

{!showAllTheme && (<h6 className="blue_text mt-2 ms-4" onClick={()=>{setShowAllTheme(true)}} role="button" >View all</h6>
)}

{showAllTheme && (<>
    <div className="form-check mt-2">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault2"/>
  <label className="form-check-label" htmlFor="flexCheckDefault2">
  Religious
  </label>
</div>


<div className="form-check mt-2">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault2"/>
  <label className="form-check-label" htmlFor="flexCheckDefault2">
  Party
  </label>
</div>

<div className="form-check mt-2">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault2"/>
  <label className="form-check-label" htmlFor="flexCheckDefault2">
  Mountain
  </label>
</div>

<div className="form-check mt-2">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault2"/>
  <label className="form-check-label" htmlFor="flexCheckDefault2">
  Beach
  </label>
</div>


<div className="form-check mt-2">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault2"/>
  <label className="form-check-label" htmlFor="flexCheckDefault2">
  Forest
  </label>
</div>

<div className="form-check mt-2">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault2"/>
  <label className="form-check-label" htmlFor="flexCheckDefault2">
  River
  </label>
</div>

<div className="form-check mt-2">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault2"/>
  <label className="form-check-label" htmlFor="flexCheckDefault2">
  Desert
  </label>
</div>


<div className="form-check mt-2">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault2"/>
  <label className="form-check-label" htmlFor="flexCheckDefault2">
  Bachelor's
  </label>
</div>

<div className="form-check mt-2">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault2"/>
  <label className="form-check-label" htmlFor="flexCheckDefault2">
  Solo
  </label>
</div>

<div className="form-check mt-2">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault2"/>
  <label className="form-check-label" htmlFor="flexCheckDefault2">
  Corporate Trip
  </label>
</div>

<div className="form-check mt-2">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault2"/>
  <label className="form-check-label" htmlFor="flexCheckDefault2">
  Adventure
  </label>
</div>

<div className="form-check mt-2">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault2"/>
  <label className="form-check-label" htmlFor="flexCheckDefault2">
  Hiking
  </label>
</div>

<div className="form-check mt-2">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault2"/>
  <label className="form-check-label" htmlFor="flexCheckDefault2">
  Honeymoon
  </label>
</div>
<div className="form-check mt-2">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault2"/>
  <label className="form-check-label" htmlFor="flexCheckDefault2">
  Offbeat
  </label>
</div>
<div className="form-check mt-2">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault2"/>
  <label className="form-check-label" htmlFor="flexCheckDefault2">
  Wildlife
  </label>
</div>


</>)}

{/* <h6 className="blue_text mt-2 ms-4" >View all</h6> */}

</div>














</div>


<div className="d-flex work_mode flex-column mt-4">
<div className="d-flex justify-content-between work"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample13" aria-expanded="false" aria-controls="collapseExample">
<h6>Other Filters</h6>
<FaAngleDown  />

</div>

<div className="collapse" id="collapseExample13">
<div className="form-check mt-2">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault1"/>
  <label className="form-check-label" htmlFor="flexCheckDefault1">
    Long Weekend
  </label>
</div>
<div className="form-check mt-2">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault2"/>
  <label className="form-check-label" htmlFor="flexCheckDefault2">
  Influencer Led
  </label>
</div>

<div className="form-check mt-2">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault2"/>
  <label className="form-check-label" htmlFor="flexCheckDefault2">
  Fat Filling
  </label>
</div>

<div className="form-check mt-2">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault2"/>
  <label className="form-check-label" htmlFor="flexCheckDefault2">
  Last Few Seats Lefts
  </label>
</div>


{/* <h6 className="blue_text mt-2 ms-4" >View all</h6> */}

</div>














</div>



</div>



   </div>
  </div>
    </>
  )
}
