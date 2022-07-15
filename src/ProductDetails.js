import React,{useEffect} from 'react';
import "./index.css";
import { NavLink,useParams } from "react-router-dom";
import Sdata from './Sdata.js'
import "./index.css";
function ProductDetails(props){
  
  
  const { id } = useParams();
  const num = id;
  
  const t=Sdata[num].title;
  useEffect(() => {
   document.title = t
}, []);
  var l;
  if(Sdata[num].link=="MEDICAL & SURGICAL PRODUCTS"){
    l='medical-surgical';
  }
  else if(Sdata[num].link=="ANTHROPOMETRY INSTRUMENTS"){
    l='anthropometry-instruments';
  }
  else if(Sdata[num].link=="PSYCHOLOGY & SPORTS SCIENCES"){
    l='psychology-sports';
  }
  else if(Sdata[num].link=="FORENSIC SCIENCE PRODUCTS"){
    l='forensic-science';
  }
  else if(Sdata[num].link=="Healthcare & Nutrition Products"){
    l='healthcare-nutrition';
  }
  else if(Sdata[num].link=="HUMAN ANATOMY MODELS & CHARTS"){
    l='human-anatomy-models';
  }
	return (<>
    
    
		<div className="details" >
    <div className="site_container">
    
      <img src={Sdata[num].imgsrc}  className="card_img_top" style={{display: 'block',marginRight:'auto',marginLeft:'auto'}} alt="..."/>
      
  
      
      <div style={{padding:'10px'}}>
        <h5 className="card-title">{Sdata[num].title}</h5>
        
        
        <p className="display-linebreak">{Sdata[num].sname}</p>
        <div style={{display:'flex'}}>
        <p>Category :  </p><NavLink to={`/products-category/${l}/page1`}>{Sdata[num].link}</NavLink>
        </div>
        </div>
        </div>
      </div>
    
    
	</>);
}
export default ProductDetails;