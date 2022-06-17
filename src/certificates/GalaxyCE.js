import React,{useEffect} from 'react'
import image1 from "./Galaxy CE Certificate.jpg"
import image2 from "./Galaxy CE Certificate products Annexure.jpg"

const GalaxyCE=()=>{
	useEffect(() => {
   document.title = "Galaxy CE Certificate"
}, []);
	return (<>
		<div className="site_container">
			<img src={image1} alt="certificate" style={{marginLeft:'auto',marginRight:'auto',display: 'block',marginTop:'50px'}}/>
			<img src={image2} alt="certificate" style={{marginLeft:'auto',marginRight:'auto',display: 'block',marginTop:'50px'}}/>
			</div>
		</>);
}
export default GalaxyCE