import './SearchResult.css'
import Navbar from '../../components/navbar/Navbar'
import SearchResultCard from '../../components/searchResultCard/SearchResultCard'
import search1 from '../../assets/searchResult/search1.jfif';
import search2 from '../../assets/searchResult/search2.jfif';
import search3 from '../../assets/searchResult/search3.jfif';
import search4 from '../../assets/searchResult/search4.jfif';
import search5 from '../../assets/searchResult/search5.jfif';
import search6 from '../../assets/searchResult/search6.jfif';
import { FaAngleDown } from "react-icons/fa";
import Filter from '../../components/filter/Filter';
import CompareBox from '../../components/compareBox/CompareBox';
import { useDispatch, useSelector } from 'react-redux';
import { toggleIsCompareCheckboxChecked } from '../../store/slices/isCompareCheckbox';
import ComparisionCard from '../../components/comparisonCard/ComparisionCard';
// import { setIsAnyCardSelectedTrue } from '../../store/slices/isAnyCardSelected';
import ReactStars from 'react-stars'

const searchResultData =[
    {
        id:1,
        name:"Trip to Kanyakumari (New Year Special)",
        duration:"4 days 3 Night",
        offerPercentage:"24% off",
        offerPrice:"$13,345/",
        originalPrice:"$16,345/",
        img:search1,
        departure_date:"12.02.24",
        rating:5,
        seats_left:20,
        company_name:"By Ma kali Travels "

    },
    {
        id:2,
        name:"Trip to Kanyakumari (New Year Special)",
        duration:"3 days 3 Night",
        offerPercentage:"24% off",
        offerPrice:"$13,345/",
        originalPrice:"$16,345/",
        img:search2,
        departure_date:"12.02.24",
        rating:5,
        seats_left:20,
        company_name:"By Ma kali Travels "
    },
    {
        id:3,
        name:"Trip to Kanyakumari (New Year Special)",
        duration:"2 days 3 Night",
        offerPercentage:"24% off",
        offerPrice:"$13,345/",
        originalPrice:"$16,345/",
        img:search3,
        departure_date:"12.02.24",
        rating:5,
        seats_left:20,
        company_name:"By Ma kali Travels "
    },
    {
        id:4,
        name:"Trip to Kanyakumari (New Year Special)",
        duration:"1 days 3 Night",
        offerPercentage:"24% off",
        offerPrice:"$13,345/",
        originalPrice:"$16,345/",
        
        
        img:search4,
        departure_date:"12.02.24",
        rating:5,
        seats_left:20,
        company_name:"By Ma kali Travels "
    },
    {
        id:5,
        name:"Trip to Kanyakumari (New Year Special)",
        duration:"1 days 2 Night",
        offerPercentage:"24% off",
        offerPrice:"$13,345/",
        originalPrice:"$16,345/",
        img:search5,
        departure_date:"12.02.24",
        rating:5,
        seats_left:20,
        company_name:"By Ma kali Travels "
    },
    {
        id:6,
        name:"Trip to Kanyakumari (New Year Special)",
        duration:"1 days 0 Night",
        offerPercentage:"24% off",
        offerPrice:"$13,345/",
        originalPrice:"$16,345/",
        img:search6,
        departure_date:"12.02.24",
        rating:5,
        seats_left:20,
        company_name:"By Ma kali Travels "
    }
]




export default function SearchResult() {


  
  const isCompareCheckboxChecked = useSelector((state) => state.compareCheckbox.isCompareCheckboxChecked);
  const dispatch = useDispatch();

  const isAnyCardSelected = useSelector((state) => state.isAnyCard.isAnyCardSelected);
  
const handleCompareCheckClick=()=>{
dispatch(toggleIsCompareCheckboxChecked())
}
const selectedCards = useSelector((state) => state.isAnyCard.selectedCards);


  return (
    <>
    <Navbar bg={"#13182F"}/>
    


<div className="container">
  <div className="row">
    <div className="col-lg-3">
<Filter/>
    </div>
    <div className="col-lg-9">
    <div className="container  d-flex flex-column  justify-content-between  mt-3 pt-0 mt-sm-3 pt-sm-0 mt-md-5 pt-md-0 mt-lg-5 pt-lg-5" style={{ maxWidth: "980.216px" }}>
<div className="d-flex justify-content-between px-3">
<h6 className='text-start fw-bold search_result_count' >Chilka: <span className='count fw-bold'>13</span> Search result found </h6>

<div className="dropdown  sort_dropdown  d-flex flex-column">

  <button className="btn d-flex flex-column  pt-0 sort_btn after_drop dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
  <span className='sort_by fw-semibold  pt-1 ' style={{fontSize:"10px"}}>Sort by</span>
    <div className="d-flex">
    <span className='early' >Early Days of Month</span>
    <FaAngleDown />
    </div>

  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#">Action</a></li>
    <li><a className="dropdown-item" href="#">Another action</a></li>
    <li><a className="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
</div>

<div className="d-flex flex-row-reverse px-3 mt-2 ">
<div className="d-flex flex-row-reverse ">
  <input onClick={handleCompareCheckClick}  className="form-check-input ms-3 " checked={isCompareCheckboxChecked} type="checkbox" value={isCompareCheckboxChecked} id="flexCheckDefault"/>
  <label  className="form-check-label" htmlFor="flexCheckDefault">
    Add to Compare
  </label>
</div>
</div>

      <SearchResultCard searchResults={searchResultData}/>
      
    </div>
    </div>
  </div>
</div>


{
  isAnyCardSelected
  &&
  <div  className=" position-fixed  w-100" style={{bottom:"0"}}>
  <CompareBox/>
  </div>
}


<div className="modal fade mt-5" id="comparisionModal" aria-labelledby="comparisionModalLabel" >
  <div  className="modal-dialog comparison_modal modal-xl">
    <div className="modal-content">
      <div className="modal-header">
        <h1  className="modal-title compare_modal_title w-100 text-center fs-3 fw-bold  " id="comparisionModalLabel">Comparison Result </h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="px-0 mx-0 mx-lg-5 modal-body d-flex justify-content-between">
      <ComparisionCard selectedCards={selectedCards} />
      </div>

      <div className="modal-footer m-0 compare_footer_table d-sm-none d-md-none d-lg-none d-flex justify-content-center">
<h5 className='compare_modal_title text-center'>Detailed Comparision</h5>

<table className="table">
  <thead>
  <tr>
  <th style={{ fontSize: "9px" }} scope="col">Title</th>
  {selectedCards.map((card, index) => (
    <th  key={index} style={{ fontSize: "8px" }} scope="col">{card.name.split('(')[0]}</th>
  ))}
</tr>


    <tr>
      <th style={{ fontSize: "9px" }} scope="col">Offer Price</th>
      {selectedCards.map((card, index) => (
        <td key={index} style={{ fontSize: "10px" }}>{card.offerPrice}</td>
      ))}
    </tr>
    <tr>
      <th style={{ fontSize: "9px" }} scope="col">Original Price</th>
      {selectedCards.map((card, index) => (
        <td key={index} style={{ fontSize: "10px" }}>{card.originalPrice}</td>
      ))}
    </tr>
    <tr>
      <th style={{ fontSize: "9px" }} scope="col">Duration</th>
      {selectedCards.map((card, index) => (
        <td key={index} style={{ fontSize: "10px" }}>{card.duration}</td>
      ))}
    </tr>
    <tr>
      <th style={{ fontSize: "9px" }} scope="col">Ratings</th>
      {selectedCards.map((card, index) => (
        <  >
        {/* <div className="d-flex  "> */}
        <td className='' key={index} style={{ fontSize: "10px" }}>
        <ReactStars
  count={5}
  size={10}
  value={card.rating}
  edit={false}
  color2={'#ffd700'} /></td>
        {/* </div> */}
       
        
        </>
        
      ))}
    </tr>
    <tr>
      <th style={{ fontSize: "10px" }} scope="col">Travel Agent Name</th>
      {selectedCards.map((card, index) => (
        <td key={index} style={{ fontSize: "10px" }}>{card.company_name}</td>
      ))}
    </tr>
    <tr>
      <th style={{ fontSize: "10px" }} scope="col">Departure Date</th>
      {selectedCards.map((card, index) => (
        <td key={index} style={{ fontSize: "10px" }}>{card.departure_date}</td>
      ))}
    </tr>
    <tr>
      <th style={{ fontSize: "10px" }} scope="col">Seats Left</th>
      {selectedCards.map((card, index) => (
        <td key={index} style={{ fontSize: "10px" }}>{card.seats_left}</td>
      ))}
    </tr>
    <tr>
      <th style={{ fontSize: "10px" }} scope="col">Offer Percentage</th>
      {selectedCards.map((card, index) => (
        <td key={index} style={{ fontSize: "10px" }}>{card.offerPercentage}</td>
      ))}
    </tr>
  </thead>
</table>




         </div>
    </div>
  </div>
</div>


    </>
  )
}
