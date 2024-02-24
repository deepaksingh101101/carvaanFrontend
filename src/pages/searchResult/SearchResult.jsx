
import './SearchResult.css'
import Navbar from '../../components/navbar/Navbar'
import SearchResultCard from '../../components/searchResultCard/SearchResultCard'
export default function SearchResult() {
  return (
    <>
    <Navbar bg={"#13182F"}/>
<div className="container mt-5 pt-5">
    <SearchResultCard/>
</div>
    </>
  )
}
