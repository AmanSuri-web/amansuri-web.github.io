import React, {useState}from 'react'
import emailjs from "emailjs-com"
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EmailIcon from '@material-ui/icons/Email';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import Home from './Home.js'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const Contact=()=>{
	const year = new Date().getFullYear();
	const [data,setData]=useState({
		fullname : '' ,
		email : '' ,
		subject : '' ,
		message : '' ,
	})
	
	const InputEvent=(event)=>{
		const {name,value}=event.target;
		
		setData((preVal)=>{
			return {
				...preVal ,
				[name]:value ,
			}
		})
	}
	const formSubmit=(e)=>{
		

		e.preventDefault()
		console.log(e.target)
		if(data.fullname==''||data.email==''||data.subject==''||data.message==''){
			alert(`Fill out all the fields`)

		}
		else{
		emailjs.sendForm('service_nzpoyuj', 'template_25c1l1c', e.target, 'user_CSE0o4ChU86kiOIprfgR6')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
		alert(`mail sent`)
		setData({
			fullname:'',
			email:'',
			subject:'',
			message:'',
		})
		}
	}
	
	return(<>
	<div style={{backgroundColor:'black',color:'white',height:'100%'}}>
		<div className=" text-center" style={{marginTop:'-4px'}}>
		<p style={{color:'rgb(150,150,150)'}}>We would love to hear from you!</p>
			<h1 className='text-center' style={{marginTop:'-10px'}}>Contact Us</h1>
			<p style={{padding:'30px',marginTop:'-20px'}}>For Medical, Surgical & Laboratory Products, Feel free to contact us anytime</p>
		</div>
		<div className='site_container' style={{alignItems:'center'}}>
		<div className='' style={{width:'70%',marginLeft:'auto',marginRight:'auto'}}>
		<p className='text-center'>
			SK Suri <br/><br/>
     GALAXY INFORMATICS ( INDIA )<br/><br/>
<span style={{marginLeft:'0px'}}><LocationOnIcon/></span>105, Avinash Mansion , 82/3 Joshi Road<br/>
 Karol Bagh, New Delhi-110005 , India<br/><br/>
<ContactPhoneIcon/>Tel : +91-11-47012788/ 23554172<br/>
<ContactPhoneIcon/>Tel : +91-9312202557/ 9968056566<br/><br/>
<EmailIcon/>galaxyinformatics@yahoo.com<br/>
<EmailIcon/>surisk1968@gmail.com<br/><br/>
		</p>
<br/><br/><br/>
		</div>
	
			<div className="row" style={{width:'100%',marginLeft:'auto',marginRight:'auto'}}>
				<div className='col-md-6 col-10 mx-auto login-dark'>

				<form onSubmit={formSubmit} >

					<div className="">
					<h5 className="text-center">* All fields are required</h5>
  <label for="exampleFormControlInput1" className="form-label">Full Name</label>
  <input type="text" className="form-control" id="exampleFormControlInput1" name="fullname" value={data.fullname} onChange={InputEvent} placeholder="Enter your name"/>
</div>
<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={InputEvent}  placeholder="name@example.com"/>
</div>
<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Subject</label>
  <input type="text" className="form-control" id="exampleFormControlInput1" name="subject" value={data.subject} onChange={InputEvent}  placeholder="subject"/>
</div>
<div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">
  Message
  </label>
  <textarea className="form-control" id="exampleFormControlTextarea1" name="message" value={data.message} onChange={InputEvent}  rows="3"></textarea>
</div>
<div class="col-12">
    <button class="btn btn-outline-primary" type="submit" >Submit form</button>
  </div>
				</form>
				</div>
			</div>
		</div>
		<footer style={{bottom: '0'}} className=" bg-dark text-center" style={{marginTop:'100px'}}>
    <p style={{color:'white'}}>© {year} Galaxy Informatics</p>
    </footer>
		</div>
		</>);
}

export default Contact;
