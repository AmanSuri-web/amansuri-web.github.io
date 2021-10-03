import React,{useState} from 'react'
import background from './backgroundImage.jpg'
import "./index.css";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import { NavLink } from "react-router-dom";
import Card2 from './Card2.js'
import Sdata from './Sdata.js'
import MS from './data/Medical&surgical.js';
import PS from './data/Psychology&sports.js';
import Anthropometry from './data/Anthropometry.js';
import Forensic from './data/Forensic.js'
import Healthcare from './data/Healthcare.js'
import HumanAnatomy from './data/HumanAnatomy.js'

import medical from './data/medical.jpg';
import anthro from './data/anthro.jpg';
import psy from './data/psy.jpg';
import forensic from './data/forensic.jpg';
import healthcare from './data/healthcare.jpg';
import human from './data/human.jpg';
import Slider from './AutoSlider/Slider.js'

import Footer from './Footer.js'
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';   
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap';
import Navigation from './NavBar.js'
import Carousel from './Carousel.js'


// render
const year = new Date().getFullYear();
const Home=(props)=>{
	
// Teach Autosuggest how to calculate suggestions for any given input value.

	return (<>
					
					<div className="" style={{position:'absolute',top:'0',width:'100%'}}>
					<div>
<img src={ background } style={{height: 'max(550px,100vh)',
  
  /* Full height */
  width: '100%',
  position: 'absolute',
  top:'0',
  backgroundSize: 'cover',
  overflow: 'hidden',

  /* Center and scale the image nicely */
  backgroundPosition: 'center top',
  backgroundRepeat: 'no-repeat,repeat',
  
  zIndex: '-1'}}
	/>
          
							
              </div>
   									 <div className="homeDiv" style={{position: 'absolute',left: '50%',color:'white',textAlign:'center',alignItems:'center',
            top: '50%',
            transform: 'translate(-50%, -50%)',zIndex: '-1'}}>
            <h1 className="homeText text-center">Galaxy Informatics</h1>
            <h7 className="homeText2 text-center">We Provide Top Rated Medical, Surgical & laboratory Products</h7>
            </div>
            <div className="homeDiv2" style={{position: 'absolute',left: '50%',color:'white',textAlign:'center',alignItems:'center',
            top: '70%',
            transform: 'translate(-50%, -50%)',zIndex: '-1'}}>
   									 <div className="containerScroll">
  <div className="chevron"></div>
  <div className="chevron"></div>
  <div className="chevron"></div>
  <span className="textScroll">Scroll down</span>
  
</div>
</div>

						
							</div>
              <div style={{top:'max(600px,110%)',position:'absolute',zIndex: '-1'}}>
						<h3 style={{textAlign:'center'}}>PRODUCT CATEGORIES</h3>
						
			
      

     


<div style={{marginTop:'20px',marginLeft:'auto',marginRight:'auto',marginBottom:'30px'}}>
			
			<div >
		<div className="col">
    
    <NavLink to='/products1' style={{textDecoration:'none'}}>
    <div className="card " style={{border:'none',width:'',marginTop:'40px'}}>
    <Carousel/>
      <div className="card-body" style={{alignItems:'center'}}>
        <h5 className="card-title text-center" style={{color:"black"}} >ALL PRODUCTS ({Sdata.length})</h5>
         </div>

          </div>
        
     
   </NavLink>
  </div>

  </div>

</div>
  			 


  			<div style={{marginLeft:'30px',marginRight:'30px'}}>
  		<div className='row row-cols-1 row-cols-md-3 g-4' >
					 <Card2
  					id="products-category/medical-surgical/page1"
  					imgsrc={medical}
  					title="MEDICAL & SURGICAL PRODUCTS"
  					num={MS.length}
  					/>
  					<Card2
  					id="products-category/anthropometry-instruments/page1"
  					imgsrc={anthro}
  					title="ANTHROPOMETRY INSTRUMENTS"
  					num={Anthropometry.length}
  					/>
  					<Card2
  					id="products-category/psychology-sports/page1"
  					imgsrc={psy}
  					title="PSYCHOLOGY & SPORTS SCIENCES"
  					num={PS.length}
  					/>
					 <Card2
  					id="products-category/forensic-science/page1"
  					imgsrc={forensic}
  					title="FORENSIC SCIENCE PRODUCTS"
  					num={Forensic.length}
  					/>
  					<Card2
  					id="products-category/healthcare-nutrition/page1"
  					imgsrc={healthcare}
  					title="HEALTHCARE & NUTRITION PRODUCTS"
  					num={Healthcare.length}
  					/>
  					<Card2
  					id="products-category/human-anatomy-models/page1"
  					imgsrc={human}
  					title="HUMAN ANATOMY MODELS & CHARTS"
  					num={HumanAnatomy.length}
  					/>

		</div>
		</div>
		
		<div className="site_container" style={{backgroundColor:'rgb(240,240,240)',justifyContent:'space-between',padding:'20px',marginTop:'30px'}}>
		    <div style={{textAlign:'center',alignItems:'center',padding:'50px'}}>
				<h1>ABOUT US</h1>
				<p style={{color:'rgb(100,100,100)'}}>A litte introduction about our company and what we do</p>
			</div>
			<div style={{padding:'40px'}}>
				<p>A Dream! A Hope! A Wish! This is where all good things start!<br/>

And it started by late Sh. B.K.Suri, a true karamyogi, visionary and great philanthropist. Galaxy is an organization with plenty of history. Our company has been selling scientific, medical and teaching aids since 1977 by late Sh. B.K.Suri and we are now the largest supplier of Human Biology instruments .<br/>

<span style={{fontWeight:'bolder'}}>GALAXY</span> backed by over 40 years experience in Scientific,  Medical and Educational Technological Products.<br/>

<span style={{fontWeight:'bolder'}}>GALAXY INFORMATICS (INDIA)</span> was Established in 1987 and got registered in 1988 September after serving the education community for about 40 years and today we manufacture, export , Import  trade wide range of products in the field of <span style={{fontWeight:'bolder'}}>Anthropology, Physiology, Evaluation, Nutrition, Forensic, Healthcare, Medical, Nursing care,  Surgical Devices and other laboratory products.</span><br/>
</p>
<NavLink to="/about" style={{textDecoration: 'none'}}>Read more</NavLink>
			</div>
		</div>
		<div className="site_container" style={{backgroundColor:'rgb(240,240,240)',justifyContent:'space-between',padding:'20px',marginTop:'30px',position: 'relative'}}>
			<div style={{textAlign:'center',alignItems:'center',padding:'50px',flexDirection:'column'}}>
				<h1>CONTACT US</h1>
				<p style={{color:'rgb(100,100,100)'}}>For All Your Scientific, Medical and Educational Product Needs</p>
			</div>
			<div className="btnPos text-center " style={{padding:'100px',textAlign:'center',position: 'absolute'
				,msTransform: 'translateY(-50%)',transform: 'translateY(-50%)',}}>
				<NavLink to="/contact" className='btn btn-white btn-        animate'>Click Here</NavLink>
			</div>	
		</div>
    <footer className=" bg-light text-center" style={{marginTop:'100px'}}>
    <p>© {year} Galaxy Informatics</p>
    </footer>
		</div>
		</>);
}
export default Home