import React from 'react';
import "./index.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';


import 'bootstrap';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import About from './About.js'
import Contact from './Contact.js'
import Home from './Home.js'
import Error from './Error.js'
import Navigation from './NavBar.js'
import Products from './Products.js'
import ProductDetails from './ProductDetails.js'
import Footer from './Footer.js'
import GalaxyCE from './certificates/GalaxyCE.js'
import GalaxyGMP from './certificates/GalaxyGMP.js'
import GalaxyISO from './certificates/GalaxyISO.js'
import GalaxyISO1 from './certificates/GalaxyISO1.js'
import MProducts from './data/medicalProducts.js'
import AnProducts from './data/anthroProducts.js'
import PSProducts from './data/psychologySports.js'
import FSProducts from './data/forensicScience.js'
import HNProducts from './data/healthcareProducts.js'
import HAProducts from './data/humanAnatomyProducts.js'
import Scroll from './Scroll.js';
import ScrollToTop from './ScrollToTop.js';


const App=()=>{

	return (
		<>
		<BrowserRouter >
		<ScrollToTop/>
		<Scroll showBelow={250}/>
		
	<Navigation/>
			 
			 
	
				<Routes>
					<Route  path="/" element={<Home/>}/>

					<Route  path="/products:page" element={<Products/>}/>
					<Route  path="/about" element={<About/>}/>
					<Route  path="/contact" element={<Contact/>}/>
					<Route  path="/galaxy-ce-certificate" element={<GalaxyCE/>}/>
					<Route  path="/galaxy-gmp-certificate" element={<GalaxyGMP/>}/>
					<Route  path="/galaxy-env-manage-certificate" element={<GalaxyISO/>}/>
					<Route  path="/galaxy-quality-manage-certificate" element={<GalaxyISO1/>}/>
					<Route  path="/products-category/medical-surgical/page:page" element={<MProducts/>}/>
					
					<Route  path="/products-category/anthropometry-instruments/page:page"  element={<AnProducts/>}/>
					
					<Route  path="/products-category/psychology-sports/page:page" element={<PSProducts/>}/>
					<Route  path="/products-category/forensic-science/page:page" element={<FSProducts/>}/>
					<Route  path="/products-category/healthcare-nutrition/page:page" element={<HNProducts/>}/>
					<Route  path="/products-category/human-anatomy-models/page:page" element={<HAProducts/>}/>
					<Route  path="/products/:id" element={<ProductDetails/>}/>
					<Route path="*" element={<Error/>}/>
					
					
				</Routes>
				
				<Footer  style={{bottom:'0%'}}/>
				</BrowserRouter>
		</>
		)
}

export default App