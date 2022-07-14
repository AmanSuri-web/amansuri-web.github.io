import React from 'react'
import {NavLink} from "react-router-dom"
import {useHistory} from "react-router-dom";

const Contact=()=>{
	const history=useHistory();
	console.log(history.goBack())
	return (<>
		<div style={{alignItems:'center',margin:'20px auto',display:'grid',
		textAlign:'center'}}>
		<h1>404 error page</h1>
		<h1>Oops! Page Not Found</h1>
		<NavLink to="history.goBack()">Go Back</NavLink>
		</div>
		</>);
}
export default Contact