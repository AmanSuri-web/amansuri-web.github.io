import React,{useEffect} from 'react'
import image1 from "./Galaxy GMP Certificate.jpg"


const GalaxyGMP=()=>{
	useEffect(() => {
   document.title = "Galaxy GMP Certificate"
}, []);
	return (<>
			<img src={image1} alt="certificate" style={{marginLeft:'auto',marginRight:'auto',display: 'block',marginTop:'50px'}}/>
			
		</>);
}
export default GalaxyGMP