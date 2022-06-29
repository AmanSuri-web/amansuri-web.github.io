import React,{useEffect} from 'react'

const About=()=>{
	useEffect(() => {
   document.title = "About Us"
}, []);
	const year = new Date().getFullYear();
	return (<>
		<div style={{backgroundColor:'black',marginTop:'-4px',height:'100%'}}>
		<div className='ml-20 mr-20' style={{textAlign:'',marginLeft:'20%',marginRight:'20%',marginTop:'0px'}}>
		<h1 style={{textAlign:'center',marginBottom:'50px',color:'white'}}>ABOUT US</h1>
		<p style={{color:'white'}}>A Dream! A Hope! A Wish! This is where all good things start!<br/>

And it started by late Sh. B.K.Suri, a true karamyogi, visionary and great philanthropist. Galaxy  is an organisation with plenty of history. Our company has been selling scientific , medical and teaching aids since 1977 by late Sh. B.K.Suri and we are now the largest supplier of Human Biology instruments ..<br/>

<span style={{fontWeight:'bolder',fontStyle: 'italic'}}>GALAXY</span> backed by over 40 years experience in Scientific,  Medical  and Educational Technological Products.<br/>

<span style={{fontWeight:'bolder',fontStyle: 'italic'}}>GALAXY INFORMATICS (INDIA)</span> was Established in 1987 and got registered in 1988 September after serving the education community for about 40 years and today we manufacture , export ,Import  trade wide range of products in the field of <span style={{fontWeight:'bolder',fontStyle: 'italic'}}>Anthropology, Physiology, Evaluation, Nutrition, Forensic, Healthcare, Medical, Nursing care,  Surgical Devices and other laboratory products.</span><br/>

Scientific , Medical laboratories and physiotherapy  professionals use our products as aids for  education. We also provide a range of simulators used by nurses in their practical training. The Anthropology  departments in most of the universities in India also find our products and training aids invaluable.<br/>

Galaxy  has continued to source new products to help train and educate in our schools, colleges and medical institutions . We specialize in Human Anatomy, Human Physiology, Health Education,  science & Technology materials.<br/>

What makes Galaxy  stand out is the personal service we provide. We care for all of our customers and try to help them to the best of our ability. Each member of staff is responsible for a particular product range, ensuring good product knowledge. We maintain stock levels of all popular items and endeavour to stock only quality products.<br/>

<br/><span style={{fontWeight:'bolder',fontStyle: 'italic'}}>Personal Service for Individuals and Educational Institutions</span><br/>

At Galaxy, we treat each of our clients as an individual. The individual service we provide is valuable, but also indispensable when you consider the sensitive and vital nature of the Indian .<br/>

To provide clients with the best possible service, we tailor our solutions, aids and tools to meet their needs. Of course, this requires a huge amount of resources and staff, so Galaxy has dedicated staff for each product range. This does not only provide benefits where the provision of our aids and tools is concerned, but also benefits for clients who want to rely on our know-how and knowledge.<br/>

<br/><span style={{fontWeight:'bolder',fontStyle: 'italic'}}>Good Stock Management</span><br/>

When you need our products quickly, the last thing you want to encounter is your required item being out of stock. To guarantee our clients never encounter this problem, we have a dedicated team to ensure good stock levels for all our popular products.<br/>

Of course, not only the amount of stock matters, because the quality of our products is important too. To maximise the product quality of products, tools and aids for medical professionals and educational institutions, all our products are subject to rigorous quality control. Low-quality items will not be added to our range, so clients can put their trust in our experience, knowledge and our dedication to superior quality.<br/>

<br/><span style={{fontWeight:'bolder',fontStyle: 'italic'}}>Our Karol Bagh Showroom</span><br/>

Viewing our aids, tools and products online can give you a better idea of what we could offer you. However, you could also drop by at our Karol Bagh ,New Delhi showroom, where you can get more familiar with our range. During your visit, we guarantee a personal service and a clear view of our extensive product range. If you are unable to come and see us, call us and we will do our best to help you<br/>
<br/><span style={{fontWeight:'bolder',fontStyle: 'italic'}}>Small list of our Satisfied Clients</span><br/>
Nutrition Foundation of India Public Health Foundation of India Delhi University- Delhi<br/>
Panjab University-Chandigarh Manipur University-Imphal<br/>
ILBS –Vasant Kunj , Delhi Pondicherry University<br/>
Sikkim University-Gangtok<br/>
HS Gour University-Sagar<br/>
SGT University- Gurgaon<br/>
Kantar India<br/>
Sigma Research –New Delhi IMRB – Jaipur<br/>
GTB Hospital –Delhi<br/>
Kalawati Hospital- Delhi<br/>

<br/><span style={{fontWeight:'bolder',fontStyle: 'italic'}}>Contacting Galaxy</span><br/>

Do you have a question about our extensive range of charts, anatomical models or other products? Would you like some personal assistance during product selection? Feel free to contact our experienced team for more information. Our team can always assist over the telephone, but we can also provide more information via email if required.</p>

</div>
<footer className=" bg-dark text-center" style={{marginTop:'100px'}}>
    <p style={{color:'white'}}>© {year} Galaxy Informatics</p>
    </footer></div></>);
}
export default About