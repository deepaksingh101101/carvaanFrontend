import './CompareBox.css'
import { AiOutlineCloseSquare } from "react-icons/ai";
import selectToAdd from '../../assets/comparision/selectToAdd.png'
export default function CompareBox() {
  return (
    <div className="container-fluid compare  py-3">
    <div className="container">
      <div className="d-flex d-flex justify-content-between">
  <h5 className='fw-bold' >Add to Compare</h5>
  <AiOutlineCloseSquare style={{fontSize:"30px"}} />
  
      </div>
      <p className='fw-semibold' >Choose Max 3 Items</p>


      <div className="row d-flex justify-content-between">

      <div className="col-lg-9  d-flex align-items-center justify-content-center">
      <div className="row d-flex w-100 justify-content-between  ">
      <div   className=" my-2 col-lg-4 py-3  d-flex  comparison1 align-items-center justify-content-center">
            <img src={selectToAdd} alt='Add'/>
            <h6 className='ms-3 mb-0' >Select to add</h6>
        </div>
        <div   className="my-2 d-flex py-3  col-lg-4 comparison1 align-items-center justify-content-center">
            <img src={selectToAdd} alt='Add'/>
            <h6 className='ms-3 mb-0' >Select to add</h6>
        </div>
        <div   className="my-2 d-flex py-3 col-lg-4 comparison1 align-items-center justify-content-center">
            <img src={selectToAdd} alt='Add'/>
            <h6 className='ms-3 mb-0' >Select to add</h6>
        </div>
      </div>


      </div>
        
      <div className="col-lg-2 my-2 my-md-2 my-lg-0 d-flex justify-content-center justify-content-lg-end align-items-center ">
      <button className="btn fw-bold compare_btn">
            Compare Now
        </button>
      </div>
      


      </div>

  
    </div>
  
  
  </div>
  )
}
