import './SearchResult.css'
import Navbar from '../../components/navbar/Navbar'
import SearchResultCard from '../../components/searchResultCard/SearchResultCard'
import search1 from '../../assets/searchResult/search1.jfif';
import search2 from '../../assets/searchResult/search2.jfif';
import search3 from '../../assets/searchResult/search3.jfif';
import search4 from '../../assets/searchResult/search4.jfif';
import search5 from '../../assets/searchResult/search5.jfif';
import search6 from '../../assets/searchResult/search6.jfif';

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
    <div className="container mt-5 pt-5">
      <SearchResultCard searchResults={searchResultData}/>
    </div>
    </>
  )
}
