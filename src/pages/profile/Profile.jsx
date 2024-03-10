import Navbar from "../../components/navbar/Navbar";
import ProfileSidebar from "../../components/profileSidebar/ProfileSidebar";

export default function Profile() {
  return (
   <>
   <div className="">
   <Navbar bg={"#13182F"}/>
   </div>
   <div className="profile pt-5">
   <div className="container-fluid mt-5 ">
    <div className="row ">
    <div className="col-lg-4">
        <ProfileSidebar/>
    </div>
    <div className="col-lg-8">
        render
    </div>
    </div>
   </div>
   </div>
   </>
  )
}
