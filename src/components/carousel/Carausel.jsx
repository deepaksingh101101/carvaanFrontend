import React from 'react';
import ItiCard from "../itiCard/ItiCard";
import "./Carausel.css";
import { GrNext, GrPrevious } from "react-icons/gr";



export default function Carausel({ itinerariesData }) {


  return (
    <>

       
       <ItiCard   itinerariesData= {itinerariesData} />

        
    
   
      {/* <div className='gradient-overlay'></div> */}
    </>
  );
}
