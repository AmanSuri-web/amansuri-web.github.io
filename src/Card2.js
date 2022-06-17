import React from 'react';
import "./index.css";
import { NavLink } from "react-router-dom";
import ProductDetails from './ProductDetails.js';

function Card2(props){
  
	return (<>
    <div>
		<div className="col">
    
    <NavLink to={`/${props.id}`} className="" style={{margin:'0 auto',
    display:'',textDecoration: 'none'}}>
    <div className="card " style={{border:'none',width:'',marginTop:'40px'}}>
      <img src={props.imgsrc} className="card-img-top" style={{height:'300px',display: 'block',marginRight:'auto',marginLeft:'auto'}} alt={props.title}/>
      <div className="card-body" style={{alignItems:'center'}}>
        <h5 className="card-title" style={{color:"black"}} >{props.title} ({props.num})</h5>
         </div>

          </div>
        </NavLink>
     
   
  </div>
  </div>
	</>);
}
export default Card2;