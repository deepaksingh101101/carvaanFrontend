import './About.css'
import aboutimg from '../../assets/about/aboutImage.jfif'
import OurTeamCard from '../../components/ourTeamCard/OurTeamCard'
import team1 from '../../assets/about/team1.jfif'
import team2 from '../../assets/about/team2.jfif'
import team3 from '../../assets/about/team3.jfif'
import team4 from '../../assets/about/team4.jfif'
import team5 from '../../assets/about/team5.jfif'
import team6 from '../../assets/about/team6.jfif'
import share from '../../assets/about/share.svg'
// import Navbar from '../../components/navbar/Navbar'
export default function About() {

  const teamsCardData=[
    {
      id:1,
      name:"Kathryn Murphy",
      job:"Dog Trainer",
      img:team1,
    },
    {
      id:2,
      name:"Shivam Kumar",
      job:"Marketing Coordinator",
      img:team2,
    },
    {
      id:3,
      name:"Floyd Miles ",
      job:"President of sale",
      img:team3,
    },
    {
      id:4,
      name:"Ralph Edwards",
      job:"Web Designer",
      img:team4,
    },
    {
      id:5,
      name:"Esther Howard",
      job:"Nursing Assistant",
      img:team5
    },
    {
      id:6,
      name:"Jane Cooper",
      job:"Medical Assitant",
      img:team6
    },
  ]


  return (
<>
{/* <Navbar bg={"#13182F"}/> */}
<div className="container about d-flex flex-column ">
<h1 className='text-center fw-bold our_story display-4'  >Our Story</h1> 
<p className='our_story_p   text-center fw-medium mt-4'  >Welcome to Carvaan, where the journey begins beyond the ordinary. We are not just a travel website; we are the architects of unforgettable adventures. At Carvaan, we've redefined the travel experience by creating a groundbreaking marketplace connecting B2C brands offering captain-led group trips with enthusiastic travelers seeking seamless exploration.</p>   

<img src={aboutimg} loading='lazy' className='about_img mt-4' style={{borderRadius:"12px"}} alt='About'/>

<p className='our_story_p text-center fw-medium mt-4'  >Say goodbye to the tedious search for the perfect trip! Carvaan brings all your travel desires under one roof, eliminating the need to navigate through individual travel agencies. Our platform showcases a diverse array of options, allowing you to effortlessly browse and book from an extensive range of captivating destinations.</p>   
<p className='our_story_p text-center fw-medium mt-2'  > Discover the ease of one-click bookings with our pre-designed itineraries, offering fixed packages for friends, families, couples, colleagues & solo travellers. For those seeking a more personalized touch, our detailed query form empowers you to shape your dream journey. Our dedicated agents will craft a custom plan based on your unique specifications, ensuring every trip is as distinctive as the traveler.</p>   
<p className='our_story_p text-center fw-medium mt-2'  >Carvaan is not just a travel website; it's a revolution. With an abundance of themes, unique destinations, hand picked itineraries and an array of filters, we provide a one-stop-shop for every type of traveler. It’s time to embark on a seamless adventure with Carvaan – your gateway to a world of unparalleled exploration.</p>   

<div className="container my-5" style={{fontFamily:"Inter"}}>
<h2 className='text-center fw-bold'> <span className="trending_para_span">Founder</span> Message</h2>
</div>

<div className="d-flex justify-content-center">
<iframe height="fit-content" width='100%' src="https://www.youtube.com/embed/mI7cq4uHCZ4" frameborder="0" allowfullscreen></iframe>

</div>
{/* <video  controls>
  <source src="https://www.youtube.com/embed/mI7cq4uHCZ4" type="video/mp4"/>
</video> */}


<div className="container mt-5 mb-4" style={{fontFamily:"Inter"}}>
<h2 className='text-center fw-bold'> <span className="trending_para_span">Our</span> Team</h2>
</div>

<div className="row mb-5">
      {teamsCardData.map(team => (
        <OurTeamCard key={team.id} team={team} />
      ))}
    </div>






</div>

<div className="container d-flex my-5 justify-content-center get_in_touch d-flex flex-column justify-content-center position-relative">
  <img src={share} className="position-absolute d-none d-sm-none d-md-block d-lg-block end-0 top-0" style={{marginTop: "-10px", marginRight: "-10px" }} width="50" alt=""/>
  
  <h2 className='text-center fw-bold mt-4 px-5 px-lg-0' >Get In Touch To Reach Out Today For 
  </h2>
  <h2 className='text-center fw-bold'>Exciting Opportunities!</h2>
  <div className="d-flex justify-content-center my-5">
    <button className="btn mb-2 mb-lg-5 p-5 px-sm-5 px-md-5 px-lg-5 py-3  contact_btn  fw-semibold">
      Contact With Us
    </button>
  </div>
</div>





</>
    )
}
