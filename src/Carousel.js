import React,{useState} from 'react'
import "./index.css";
import Carousel from 'react-bootstrap/Carousel'  
import 'bootstrap/dist/css/bootstrap.min.css';
import i1 from './i1.png';
import i2 from './i2.png';
import i3 from './i3.png';
import i4 from './i4.png';
import i5 from './i5.png';

function ControlledCarousel() {
  

  return (
    <Carousel>
    
      <Carousel.Item interval={2000} >
        <img
          className="d-block w-100"
          src={i1}
          alt="First slide"
          style={{height:'300px'}}
        />
        <Carousel.Caption >
          <h3 className="ScrollText">Medical & Surgical Products</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={i2}
          alt="Second slide"
          style={{height:'300px'}}
        />

        <Carousel.Caption  >
          <h3 className="ScrollText">Anthropometry Instruments</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={i3}
          alt="Third slide"
          style={{height:'300px'}}
        />

        <Carousel.Caption >
          <h3 className="ScrollText">Psychology & Sports Sciences</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={i4}
          alt="Fourth slide"
          style={{height:'300px'}}
        />

        <Carousel.Caption >
          <h3 className="ScrollText">Forensic Science Products</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={i5}
          alt="Fifth slide"
          style={{height:'300px'}}
        />

        <Carousel.Caption >
          <h3 className="ScrollText">Healthcare & Nutrition Products</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
  );
}

export default ControlledCarousel