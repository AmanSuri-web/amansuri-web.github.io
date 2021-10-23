import React ,{useState,useEffect} from 'react'
import Card from './../Card.js'
import HumanAnatomy from './HumanAnatomy.js'
import { makeStyles } from '@material-ui/core/styles';
import {Helmet} from "react-helmet";

import { useHistory ,NavLink} from "react-router-dom";
import "./../index.css";
import GetPageList from './GetPageList.js';
const Products=(props)=>{
	const history = useHistory();
	const num=props.match.params.page;
	var x=parseInt(num)+1;
	console.log(num)
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
	const handleChange=(event,value)=>{
		
		history.push(`/products${value}`);
	}
	
	

    
	return (<>
		<Helmet>
        <title>Human Anatomy products</title>
        <meta name="description" content="Galaxy Informatics Human Anatomy products" />
    			</Helmet>
		<div className="my-5">
		
			
			<div className={classes.root}>
			<h7>SHOWING {(num-1)*rowsPerPage+1}–{Math.min(num*rowsPerPage,HumanAnatomy.length)} OF {HumanAnatomy.length} RESULTS</h7>
		
			
		
		</div>
		<div style={{marginLeft:'20px',marginRight:'20px'}}>
		<div className="row row-cols-1 row-cols-md-4 g-4" >
		{
  		
  			HumanAnatomy
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
			
		

		
		</div>
		</div>	
		</>
		);
}
export default Products