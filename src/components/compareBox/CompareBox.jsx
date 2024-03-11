// CompareBox.js

import './CompareBox.css';
import { AiOutlineCloseSquare } from "react-icons/ai";
import selectToAdd from '../../assets/comparision/selectToAdd.png';
import { useSelector, useDispatch } from 'react-redux';
import { clearSelectedCards, removeSelectedCard, setIsAnyCardSelectedFalse } from '../../store/slices/isAnyCardSelected';
import { setCompareCheckboxFalse } from '../../store/slices/isCompareCheckbox';
import { TiDelete } from "react-icons/ti";
import ComparisionCard from '../comparisonCard/ComparisionCard'
export default function CompareBox() {

 
  const dispatch = useDispatch();
  const selectedCards = useSelector((state) => state.isAnyCard.selectedCards);

  const handleCloseCompare = () => {
    dispatch(setIsAnyCardSelectedFalse());
    dispatch(setCompareCheckboxFalse());
    dispatch(clearSelectedCards())
  };

const handleRemoveSelectedCard=(index)=>{
  dispatch(removeSelectedCard(index))
}

  return (<>
  

    <div className="position-relative container-fluid compare pos py-3" style={{zIndex:"10"}}>
      <div className="container">
        <div className="d-flex justify-content-between">
          <h5 className='fw-bold'>Add to Compare</h5>
          <AiOutlineCloseSquare onClick={handleCloseCompare} style={{ fontSize: "30px" }} />
        </div>
        <p className='fw-semibold'>Choose Max 3 Items</p>
        <div className="row d-flex justify-content-between">
          <div className="col-lg-10 d-flex align-items-center justify-content-center">
            <div className="row d-flex w-100 ">
              {selectedCards.map((card, index) => (
                <div key={index} className=" position-relative my-2 mx-3 col-lg-4 py-3 d-flex comparison1 align-items-center justify-content-center">
                  <img style={{height:"70px",width:"70px"}} src={card.img || selectToAdd} alt='Add' />
                  <div className="d-flex flex-column">
                  <h6 className='ms-3 me-3 mb-0'>{card.name || "Select to add"}</h6>
                  <p style={{fontSize:"12px"}} className=' compare_para fw-semibold  mt-1 ms-3 mb-0' >{card.duration}</p>
                  </div>

                  <TiDelete onClick={()=>{handleRemoveSelectedCard(card.id)}}  className='position-absolute top-0'  role='button' style={{fontSize:"30px",color:"grey",right:"0"}}  />

                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-2 my-2 my-md-2 my-lg-0 d-flex justify-content-center justify-content-lg-end align-items-center">
          <button type="button" data-bs-toggle="modal" data-bs-target="#comparisionModal" className={`btn fw-bold compare_btn${selectedCards.length <= 2 ? " disabled" : ""}`}>
  Compare Now
</button>

          </div>
        </div>
      </div>
    </div>

    
 
    </>
  );
}
