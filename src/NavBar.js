import React,{useState,useEffect} from 'react';
import "./index.css";
import { NavLink ,useLocation} from "react-router-dom";
import $ from 'jquery';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { InstantSearch } from 'react-instantsearch-dom';
import Sdata from './Sdata.js'
import Popper from 'popper.js';
import logo from './galaxyLogo.svg';
import SearchIcon from '@material-ui/icons/Search';
import Tooltip from '@material-ui/core/Tooltip';
import { Navbar, Nav, Container,NavDropdown } from 'react-bootstrap';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { ReactSVG } from 'react-svg'
import {ReactComponent as Logo} from './galaxyLogo.svg';
import { fade, makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.45),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.60),
    },
    marginLeft: 0,
    
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  
  inputInput1: {
    color:'white',
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
   
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
  inputInput: {
    color:'black',
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    
    [theme.breakpoints.up('sm')]: {
      width: '120px',
      '&:focus': {
        width: '200px',
      },
    },
    "@media (max-width: 768px)": {
      
      width: '400px',
      
    
    },
    
  },
}));

const Navigation=()=>{

  const num=useLocation().pathname;
  
const [c,setc] = useState('true')
const [a,seta] = useState('true')

useEffect(() => {
    //Checks if location.pathname is not "/".
    setc(num === "/"||num === "/about"||num==="/contact")
    seta(num === "/about"||num=="/contact")
  }, [num]);

	

	const[n, setn]=useState('')//search string
	const inputEvent=(event)=>{
		setn(event.target.value);
		
	}
	
  
	var list=[];  
const SearchField=()=>{
	
	setn('')//search clear
}


const cleanupWord = word =>{
	return word.trim().toLowerCase().replace(/( )/g," ");
}
const filterData = word =>{
	return Sdata.filter(item=>item.title.toLowerCase().includes(word));
}
const render = (word=" ") =>{
	
	word=cleanupWord(word)
	const filtered = filterData(word);
	filtered.forEach( item  => {
		const object1 = { id: item.id, title: item.title };
		list.push(object1)
		
	});
}

render(n); //form list


if(n==''){
	list=[]
}
const [test,settest] = useState('false')
  
  
const navColor=()=>{
  settest(!test)
  
}
const classes = useStyles();

const [expanded, setExpanded] = useState(false)

    function overrideToggle() {
        console.log("TOGGLE TRIGGERED...")
        setExpanded(prevExpanded => !prevExpanded)
    }

	return (
		<>	
		
			
		




<Navbar   expand="lg" variant={c?"dark":'light'} className={c?(test?(a?"navbar-custom":"navbar-t"):"navbar-custom"):"navbar-t"} expanded={expanded} onToggle={overrideToggle}>

  < NavLink   to="/" onClick={SearchField} className="navbar-brand2"><Logo fill={c?'white':'black'} className="navbar-brand2"/><span className={c ? "navbar-brand2 navbar-brand" : "navbar-brand"} >Galaxy Informatics</span></NavLink>

  <Navbar.Toggle  aria-controls="basic-navbar-nav" onClick={navColor}/>

  <Navbar.Collapse className={c?"nav-link1 ":''} id="basic-navbar-nav">
    
    <Nav className={c?"nav-link1 ml-auto":'ml-auto'}  >
    
      <NavLink  className={({ isActive }) => (isActive?(c ? "menu_active1 nav-link1 nav-link":"menu_active"):(c?" nav-link1 nav-link":"nav-link "))}   aria-current="page" to="/" onClick={SearchField}>Home</NavLink>

        <li>
    <div className="dropdown">
          <a className={c?"nav-link dropdown-toggle nav-link1":"nav-link dropdown-toggle "} data-toggle="dropdown" href="#">Products</a>
          <ul className={c?(a?"dropdown-menu dropdown-menu3":"dropdown-menu dropdown-menu1"):"dropdown-menu dropdown-menu2"} aria-labelledby="navbarDropdown">
        <li><NavLink  className={({ isActive }) => (isActive?(c ? "menu_active1 dropdown-item nav-link1 nav-link":"menu_active nav-link"):(c?"dropdown-item nav-link1 nav-link":"dropdown-item nav-link"))}  to="/products1" onClick={SearchField}><span style={{fontSize:'17px',backgroundColor:'transparent'}}>All Products</span></NavLink></li>
        
        <li><NavLink className={({ isActive }) => (isActive?(c ? "menu_active1 dropdown-item nav-link1 nav-link":"menu_active nav-link"):(c?"dropdown-item nav-link1 nav-link":"dropdown-item nav-link"))} to="/products-category/medical-surgical/page1" style={{backgroundColor:'none'}} onClick={SearchField}><span style={{fontSize:'17px',backgroundColor:'transparent'}}>Medical & Surgical Products</span></NavLink></li>
        
        <NavLink className={({ isActive }) => (isActive?(c ? "menu_active1 dropdown-item nav-link1 nav-link":"menu_active nav-link"):(c?"dropdown-item nav-link1 nav-link":"dropdown-item nav-link"))} to="/products-category/anthropometry-instruments/page1" onClick={SearchField}><span style={{fontSize:'17px',backgroundColor:'transparent'}}>Anthropometry Instruments</span></NavLink>
        
        <NavLink className={({ isActive }) => (isActive?(c ? "menu_active1 dropdown-item nav-link1 nav-link":"menu_active nav-link"):(c?"dropdown-item nav-link1 nav-link":"dropdown-item nav-link"))} to="/products-category/psychology-sports/page1" onClick={SearchField}><span style={{fontSize:'17px',backgroundColor:'transparent'}}>Psychology & Sports Science</span></NavLink>
        
        <NavLink  className={({ isActive }) => (isActive?(c ? "menu_active1 dropdown-item nav-link1 nav-link":"menu_active nav-link"):(c?"dropdown-item nav-link1 nav-link":"dropdown-item nav-link"))} to="/products-category/forensic-science/page1" onClick={SearchField}><span style={{fontSize:'17px',backgroundColor:'transparent'}}>Forensic Science Products</span></NavLink>
        
        <NavLink className={({ isActive }) => (isActive?(c ? "menu_active1 dropdown-item nav-link1 nav-link":"menu_active nav-link"):(c?"dropdown-item nav-link1 nav-link":"dropdown-item nav-link"))} to="/products-category/healthcare-nutrition/page1" onClick={SearchField}><span style={{fontSize:'17px',backgroundColor:'transparent'}}>Healthcare & Nutrition Products</span></NavLink>
        
        <NavLink className={({ isActive }) => (isActive?(c ? "menu_active1 dropdown-item nav-link1 nav-link":"menu_active nav-link"):(c?"dropdown-item nav-link1 nav-link":"dropdown-item nav-link"))} to="/products-category/human-anatomy-models/page1" onClick={SearchField}><span style={{fontSize:'17px',backgroundColor:'transparent'}}>Human Anatomy Models & Charts</span></NavLink>
        </ul>
        </div>
        </li>
        
      <NavLink className={({ isActive }) => (isActive?(c ? "menu_active1 nav-link1 nav-link":"menu_active"):(c?" nav-link1 nav-link":"nav-link "))} aria-current="page" to="/about" onClick={SearchField}>About Us</NavLink>
      <NavLink className={({ isActive }) => (isActive?(c ? "menu_active1 nav-link1 nav-link":"menu_active"):(c?" nav-link1 nav-link":"nav-link "))} aria-current="page" to="/contact" onClick={SearchField}>Contact Us</NavLink>

      <li >
          <div className="dropdown">
          <a className={c?"nav-link dropdown-toggle nav-link1":"nav-link dropdown-toggle "} data-toggle="dropdown" href="#">Certificates</a>
          <ul className={c?(test?(a?"dropdown-menu dropdown-menu3 certiDropDown":"dropdown-menu dropdown-menu1 certiDropDown"):"dropdown-menu dropdown-menu1"):(test?"dropdown-menu dropdown-menu2 certiDropDown":"dropdown-menu dropdown-menu2")} aria-labelledby="navbarDropdown" style={{backgroundColor:'black'}}>
      
      
        <li><NavLink className={({ isActive }) => (isActive?(c ? "menu_active1 dropdown-item nav-link1 nav-link":"menu_active nav-link"):(c?"dropdown-item nav-link1 nav-link":"dropdown-item nav-link"))}  to="/galaxy-env-manage-certificate" style={{fontSize:'10px'}} onClick={SearchField}><span style={{fontSize:'17px',opacity:'1'}}>Galaxy Quality Management Certificate</span></NavLink></li>
        
        <li><NavLink className={({ isActive }) => (isActive?(c ? "menu_active1 dropdown-item nav-link1 nav-link":"menu_active nav-link"):(c?"dropdown-item nav-link1 nav-link":"dropdown-item nav-link"))}  to="galaxy-quality-manage-certificate" onClick={SearchField}><span style={{fontSize:'17px',backgroundColor:'transparent'}}>Galaxy Environmental Management Certificate</span></NavLink></li>
        
        <li><NavLink className={({ isActive }) => (isActive?(c ? "menu_active1 dropdown-item nav-link1 nav-link":"menu_active nav-link"):(c?"dropdown-item nav-link1 nav-link":"dropdown-item nav-link"))}  to="/galaxy-gmp-certificate" onClick={SearchField}><span style={{fontSize:'17px',backgroundColor:'transparent'}}>Galaxy GMP Certificate</span></NavLink></li>
        
        <li><NavLink className={({ isActive }) => (isActive?(c ? "menu_active1 dropdown-item nav-link1 nav-link":"menu_active nav-link"):(c?"dropdown-item nav-link1 nav-link":"dropdown-item nav-link"))} to="/galaxy-ce-certificate" onClick={SearchField}><span style={{fontSize:'17px',backgroundColor:'transparent'}}>Galaxy CE Certificate</span></NavLink></li>
       
        </ul>
        </div>
        </li>
        <div >
     
     <div className={classes.search}>
         <div className={c?'searchIconHome':'searchIconNormal'}>
           <SearchIcon />
         </div>
         <div className={c?'navSearchField1':'navSearchField'}>
         <InputBase
         
         onChange={inputEvent} value={n}
           placeholder="Search…"
           classes={{
             
             input: classes.inputInput,
           }}
           inputProps={{ 'aria-label': 'search' }}
         />
         </div>
       </div>
     </div>
    </Nav>
    

  </Navbar.Collapse>
</Navbar>

	<div className="search-input" style={{marginTop:'5px'}}>
        

        <div >
        <div className="autocom-box" >
		{list.map((val)=>{
			return(<><NavLink className="page-link" to={{pathname:`/products/${val.id}`}} onClick={SearchField}><li style={{color:'black'}}><SearchIcon/>{val.title}</li></NavLink></>)
		})}
       </div>
		</div>
        </div>
      
		
		
	</>
	)
}


export default Navigation;
