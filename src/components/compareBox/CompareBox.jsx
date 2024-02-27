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

      <div className="d-flex justify-content-between align-items-center ">

        <div className="d-flex comparison1 align-items-center justify-content-center">
            <img src={selectToAdd} alt='Add'/>
            <h6 className='ms-3 mb-0' >Select to add</h6>
        </div>
        <div className="d-flex comparison1 align-items-center justify-content-center">
            <img src={selectToAdd} alt='Add'/>
            <h6 className='ms-3 mb-0' >Select to add</h6>
        </div>
        <div className="d-flex comparison1 align-items-center justify-content-center">
            <img src={selectToAdd} alt='Add'/>
            <h6 className='ms-3 mb-0' >Select to add</h6>
        </div>

        <button className="btn fw-bold compare_btn">
            Compare Now
        </button>
      </div>
    </div>
  
  
  </div>
  )
}
