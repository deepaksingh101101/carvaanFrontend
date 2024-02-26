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

const searchResultData =[
    {
        id:1,
        name:"Trip to Kanyakumari (New Year Special)",
        duration:"4 days 3 Night",
        offerPercentage:"24% off",
        offerPrice:"$13,345/",
        originalPrice:"$16,345/",
        img:search1,
    },
    {
        id:2,
        name:"Trip to Kanyakumari (New Year Special)",
        duration:"3 days 3 Night",
        offerPercentage:"24% off",
        offerPrice:"$13,345/",
        originalPrice:"$16,345/",
        img:search2,
    },
    {
        id:3,
        name:"Trip to Kanyakumari (New Year Special)",
        duration:"2 days 3 Night",
        offerPercentage:"24% off",
        offerPrice:"$13,345/",
        originalPrice:"$16,345/",
        img:search3,
    },
    {
        id:4,
        name:"Trip to Kanyakumari (New Year Special)",
        duration:"1 days 3 Night",
        offerPercentage:"24% off",
        offerPrice:"$13,345/",
        originalPrice:"$16,345/",
        
        img:search4,
    },
    {
        id:5,
        name:"Trip to Kanyakumari (New Year Special)",
        duration:"1 days 2 Night",
        offerPercentage:"24% off",
        offerPrice:"$13,345/",
        originalPrice:"$16,345/",
        img:search5,
    },
    {
        id:6,
        name:"Trip to Kanyakumari (New Year Special)",
        duration:"1 days 0 Night",
        offerPercentage:"24% off",
        offerPrice:"$13,345/",
        originalPrice:"$16,345/",
        img:search6,
    }
]

export default function SearchResult() {
  return (
    <>
    <Navbar bg={"#13182F"}/>
    


    <div className="container  d-flex flex-column  justify-content-between mt-5 pt-5" style={{ maxWidth: "980.216px" }}>
<div className="d-flex justify-content-between px-3">
<h6 className='text-start fw-bold search_result_count' >Chilka: <span className='fw-bold'>13</span> Search result found </h6>

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
      <SearchResultCard searchResults={searchResultData}/>
    </div>
    </>
  )
}