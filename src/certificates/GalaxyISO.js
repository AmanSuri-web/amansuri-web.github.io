import React,{useEffect} from 'react'
import image1 from "./Galaxy ISO Certificate.jpg"


const GalaxyISO=()=>{
	useEffect(() => {
   document.title = "Galaxy ISO Certificate"
}, []);
	return (<>
			<img src={image1} alt="certificate" style={{marginLeft:'auto',marginRight:'auto',display: 'block',marginTop:'50px'}}/>
			
		</>);
}
export default GalaxyISO