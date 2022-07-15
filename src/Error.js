import React from 'react'
import {NavLink} from "react-router-dom"
import {useNavigate} from "react-router-dom";

const Contact=()=>{
	const history=useNavigate();
	
	return (<>
		<div style={{alignItems:'center',margin:'20px auto',display:'grid',
		textAlign:'center'}}>
		<h1>404 error page</h1>
		<h1>Oops! Page Not Found</h1>
		<NavLink to={-1}>Go Back</NavLink>
		</div>
		</>);
}
export default Contact