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
import './ExistingPackage.css'

export default function ExistingPackage() {
  return (
    <>
    <div className="container d-flex  justify-content-center my-5">
    <form className="d-flex py-3 px-3 existing_search justify-content-between " style={{minWidth:"40%"}} role="search">
        <input className=" me-2 border-0 w-100 " type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn existing_search_btn" type="submit">Search</button>
      </form>
    </div>
    </>
  )
}
