import './Home.css';
import SourceDestCard from '../../components/navbar/sourceDestCard/SourceDestCard';
import TrendingCard from '../../components/trendingCard/TrendingCard';
import goa from '../../assets/trending/goa.png'
import andaman from '../../assets/trending/andaman.png'
import chilka from '../../assets/trending/chilka.png'
import goa2 from '../../assets/trending/goa2.png'
import kerala from '../../assets/trending/kerala.png'
import ladakh from '../../assets/trending/ladakh.png'
import melborn from '../../assets/trending/melborn.png'
import paris from '../../assets/trending/paris.png'

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


  return (
    <>
      <div className="container-fluid home_bg p-0 position-relative d-flex justify-content-center flex-column align-items-center" style={{ fontFamily: "Inter, sans-serif"}} >
        <div className="row me-0 d-flex justify-content-center">
          <div className="col-12 col-md-6  col-lg-9 ">
          <h1 className='text-light mt-5 pt-4 mx-4 fw-bold text-center'>Enjoy Your Dream Vacation</h1>
          <h4 className='text-light px-3 fw-light text-center' >Plan and book our perfect trip with expert advice, travel tips, destination information and inspiration from us</h4>
          </div>
        </div>
      </div>


      {/* <SourceDestCard/> */}

    <TrendingCard trendingCardData={trendingCardData}/>
    </>
  )
}
