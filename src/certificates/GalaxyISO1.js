import React,{useEffect} from 'react'
import image1 from "./Galaxy ISO 14001 certificate.jpg"


const GalaxyISO1=()=>{
	useEffect(() => {
   document.title = "Galaxy ISO 14001 Certificate"
}, []);
	return (<>
			<img src={image1} alt="certificate" style={{marginLeft:'auto',marginRight:'auto',display: 'block',marginTop:'50px'}}/>
			
		</>);
}
export default GalaxyISO1