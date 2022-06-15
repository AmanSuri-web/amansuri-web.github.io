import React,{useState,createContext,useEffect} from 'react';
import "./index.css";
import CompA from "./CompA.js"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';

import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap';
import {Route,Switch,NavLink,useHistory,useLocation} from "react-router-dom"
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
import medicalProducts from './data/medicalProducts.js'
import anthroProducts from './data/anthroProducts.js'
import PSProducts from './data/psychologySports.js'
import FSProducts from './data/forensicScience.js'
import HNProducts from './data/healthcareProducts.js'
import HAProducts from './data/humanAnatomyProducts.js'
import Scroll from './Scroll.js';
import ScrollToTop from './ScrollToTop.js';
const Name=()=>{
	return (<h1>This is Name page</h1> );
}

const App=()=>{

	return (
		<>
		
		<Scroll showBelow={250}/>
		
	<Navigation/>
			 
			 <ScrollToTop>
				
				<Switch>
					<Route exact path="/" component={Home}/>

					<Route exact path="/products:page" component={Products}/>
					<Route exact path="/about" component={About}/>
					<Route exact path="/contact" component={Contact}/>
					<Route exact path="/galaxy-ce-certificate" component={GalaxyCE}/>
					<Route exact path="/galaxy-gmp-certificate" component={GalaxyGMP}/>
					<Route exact path="/galaxy-env-manage-certificate" component={GalaxyISO}/>
					<Route exact path="/galaxy-quality-manage-certificate" component={GalaxyISO1}/>
					<Route exact path="/products-category/medical-surgical/page:page" component={medicalProducts}/>
					<Route exact path="/products-category/anthropometry-instruments/page:page" component={anthroProducts}/>
					<Route exact path="/products-category/psychology-sports/page:page" component={PSProducts}/>
					<Route exact path="/products-category/forensic-science/page:page" component={FSProducts}/>
					<Route exact path="/products-category/healthcare-nutrition/page:page" component={HNProducts}/>
					<Route exact path="/products-category/human-anatomy-models/page:page" component={HAProducts}/>
					<Route  path="/products/:id" component={ProductDetails}/>
					<Route path="*" component={Error}/>
					
					
				</Switch>
				</ScrollToTop>
				<Footer  style={{bottom:'0%'}}/>
				
		</>
		)
}

export default App