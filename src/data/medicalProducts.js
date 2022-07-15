import React ,{useState,useEffect} from 'react'
import Card from './../Card.js'
import MS from './Medical&surgical.js'
import { makeStyles } from '@material-ui/core/styles'

import {  NavLink,useParams} from "react-router-dom";
import "./../index.css";
import GetPageList from './GetPageList.js';
const Products=(props)=>{
	useEffect(() => {
   document.title = "Medical Products"
}, []);
	
	
	const { page } = useParams();
  const num = page;
  console.log(num);
	var x=parseInt(num)+1;
	
	const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(2),
      justifyContent:"center",
      display:'flex'
    },
  },
  
}));
	const classes = useStyles();
	
	const rowsPerPage=12
	
	const renderPrevious = () => {
      if (num==1) {
         return (<li className="page-item disabled">
      <NavLink className="page-link" to={{pathname:`/products-category/medical-surgical/page${num-1}`}} tabindex="-1" aria-disabled="true">Previous</NavLink>
    </li>)
      } else {
        return (<li className="page-item ">
      <NavLink className="page-link" to={{pathname:`/products-category/medical-surgical/page${num-1}`}} tabindex="-1" aria-disabled="true">Previous</NavLink>
    </li>)
      }
    }
    const renderNext = () => {
      if (num<6) {
         return (<NavLink className="page-link" to={{pathname:`/products-category/medical-surgical/page${x}`}}>Next</NavLink>)
      } else {
        return (<li className="page-item disabled">
        <NavLink className="page-link" to={{pathname:`/products-category/medical-surgical/page${x}`}}>Next</NavLink></li>)
      }
    }
	
	

    
	return (<>
		<div className="my-5">
		
			
			<div className={classes.root}>
			<h7>SHOWING {(num-1)*rowsPerPage+1}–{Math.min(num*rowsPerPage,MS.length)} OF {MS.length} RESULTS</h7>
		
			
		
		</div>
		<div style={{marginLeft:'20px',marginRight:'20px'}}>
		<div className="row row-cols-1 row-cols-md-4 g-4" >
		{
  		
  			MS
  			.slice((num-1)*rowsPerPage,num*rowsPerPage)
  			.map((val,ind)=>{
  				
  				return (<Card
  					id={val.id}
  					imgsrc={val.imgsrc}
  					title={val.title}
  					sname={val.sname}
  					link={val.link}
  				/>);
  			
		
  		})
  		
  		}
		</div>
		</div>	
		<div className={classes.root}>
			
		<nav aria-label="Page navigation example">
  <ul className="pagination justify-content-center">
  
  {renderPrevious()}

  <GetPageList num={num} totalPages={6} midLength={2} id="medical-surgical"/>
	
	<li className="page-item">
      {renderNext()}
    </li>
  </ul>
</nav>

		
		</div>
		</div>	
		</>
		);
}
export default Products