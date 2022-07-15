import React from 'react';
import { NavLink } from "react-router-dom";

const Pagination = ({num,val}) => {
  


  var x=parseInt(num)+1;
  
  
  const render0 = () => {
       
        return (<li className="page-item disabled"><a className="page-link" href="/">...</a></li>)
      
    }
    const render1 = () => {
      if (num==1) {
         return (<li className="page-item active" ><li className="page-item"><NavLink className="page-link" to="/products1">1</NavLink></li></li>)
      } else {
        return (<li className="page-item"><NavLink className="page-link" to="/products1">1</NavLink></li>)
      }
    }
    const render2 = () => {
      if (num==2) {
         return (<li className="page-item active" ><li className="page-item"><NavLink className="page-link" to="/products2">2</NavLink></li></li>)
      } else {
        return (<li className="page-item"><NavLink className="page-link" to="/products2">2</NavLink></li>)
      }
    }
    const render3 = () => {
      if (num==3) {
         return (<li className="page-item active" ><li className="page-item"><NavLink className="page-link" to="/products3">3</NavLink></li></li>)
      } else {
        return (<li className="page-item"><NavLink className="page-link" to="/products3">3</NavLink></li>)
      }
    }
    const render4 = () => {
      if (num==4) {
         return (<li className="page-item active" ><li className="page-item"><NavLink className="page-link" to="/products4">4</NavLink></li></li>)
      } else {
        return (<li className="page-item"><NavLink className="page-link" to="/products4">4</NavLink></li>)
      }
    }
    const render5 = () => {
      if (num==5) {
         return (<li className="page-item active" ><li className="page-item"><NavLink className="page-link" to="/products5">5</NavLink></li></li>)
      } else {
        return (<li className="page-item"><NavLink className="page-link" to="/products5">5</NavLink></li>)
      }
    }
    const render6 = () => {
      if (num==6) {
         return (<li className="page-item active" ><li className="page-item"><NavLink className="page-link" to="/products6">6</NavLink></li></li>)
      } else {
        return (<li className="page-item"><NavLink className="page-link" to="/products6">6</NavLink></li>)
      }
    }
    const render7 = () => {
      if (num==7) {
         return (<li className="page-item active" ><li className="page-item"><NavLink className="page-link" to="/products7">7</NavLink></li></li>)
      } else {
        return (<li className="page-item"><NavLink className="page-link" to="/products7">7</NavLink></li>)
      }
    }
    const render8 = () => {
      if (num==8) {
         return (<li className="page-item active" ><li className="page-item"><NavLink className="page-link" to="/products8">8</NavLink></li></li>)
      } else {
        return (<li className="page-item"><NavLink className="page-link" to="/products8">8</NavLink></li>)
      }
    }
    const render9 = () => {
      if (num==9) {
         return (<li className="page-item active" ><li className="page-item"><NavLink className="page-link" to="/products9">9</NavLink></li></li>)
      } else {
        return (<li className="page-item"><NavLink className="page-link" to="/products9">9</NavLink></li>)
      }
    }
    const render10 = () => {
      if (num==10) {
         return (<li className="page-item active" ><li className="page-item"><NavLink className="page-link" to="/products10">10</NavLink></li></li>)
      } else {
        return (<li className="page-item"><NavLink className="page-link" to="/products10">10</NavLink></li>)
      }
    }
    const render11 = () => {
      if (num==11) {
         return (<li className="page-item active" ><li className="page-item"><NavLink className="page-link" to="/products11">11</NavLink></li></li>)
      } else {
        return (<li className="page-item"><NavLink className="page-link" to="/products11">11</NavLink></li>)
      }
    }
    const render12 = () => {
      if (num==12) {
         return (<li className="page-item active" ><li className="page-item"><NavLink className="page-link" to="/products12">12</NavLink></li></li>)
      } else {
        return (<li className="page-item"><NavLink className="page-link" to="/products12">12</NavLink></li>)
      }
    }
    const render13 = () => {
      if (num==13) {
         return (<li className="page-item active" ><li className="page-item"><NavLink className="page-link" to="/products13">13</NavLink></li></li>)
      } else {
        return (<li className="page-item"><NavLink className="page-link" to="/products13">13</NavLink></li>)
      }
    }
    const render14 = () => {
      if (num==14) {
         return (<li className="page-item active" ><li className="page-item"><NavLink className="page-link" to="/products14">14</NavLink></li></li>)
      } else {
        return (<li className="page-item"><NavLink className="page-link" to="/products14">14</NavLink></li>)
      }
    }
    const render15 = () => {
      if (num==15) {
         return (<li className="page-item active" ><li className="page-item"><NavLink className="page-link" to="/products15">15</NavLink></li></li>)
      } else {
        return (<li className="page-item"><NavLink className="page-link" to="/products15">15</NavLink></li>)
      }
    }
    const render16 = () => {
      if (num==16) {
         return (<li className="page-item active" ><li className="page-item"><NavLink className="page-link" to="/products16">16</NavLink></li></li>)
      } else {
        return (<li className="page-item"><NavLink className="page-link" to="/products16">16</NavLink></li>)
      }
    }
    const render17 = () => {
      if (num==17) {
         return (<li className="page-item active" ><li className="page-item"><NavLink className="page-link" to="/products17">17</NavLink></li></li>)
      } else {
        return (<li className="page-item"><NavLink className="page-link" to="/products17">17</NavLink></li>)
      }
    }
    const render18 = () => {
      if (num==18) {
         return (<li className="page-item active" ><li className="page-item"><NavLink className="page-link" to="/products18">18</NavLink></li></li>)
      } else {
        return (<li className="page-item"><NavLink className="page-link" to="/products18">18</NavLink></li>)
      }
    }
    const render19 = () => {
      if (num==19) {
         return (<li className="page-item active" ><li className="page-item"><NavLink className="page-link" to="/products19">19</NavLink></li></li>)
      } else {
        return (<li className="page-item"><NavLink className="page-link" to="/products19">19</NavLink></li>)
      }
    }
    const render20 = () => {
      if (num==20) {
         return (<li className="page-item active" ><li className="page-item"><NavLink className="page-link" to="/products20">20</NavLink></li></li>)
      } else {
        return (<li className="page-item"><NavLink className="page-link" to="/products20">20</NavLink></li>)
      }
    }
    const render21 = () => {
      if (num==21) {
         return (<li className="page-item active" ><li className="page-item"><NavLink className="page-link" to="/products21">21</NavLink></li></li>)
      } else {
        return (<li className="page-item"><NavLink className="page-link" to="/products21">21</NavLink></li>)
      }
    }
    const render22 = () => {
      if (num==22) {
         return (<li className="page-item active" ><li className="page-item"><NavLink className="page-link" to="/products22">22</NavLink></li></li>)
      } else {
        return (<li className="page-item"><NavLink className="page-link" to="/products22">22</NavLink></li>)
      }
    }
    const render23 = () => {
      if (num==23) {
         return (<li className="page-item active" ><li className="page-item"><NavLink className="page-link" to="/products23">23</NavLink></li></li>)
      } else {
        return (<li className="page-item"><NavLink className="page-link" to="/products23">23</NavLink></li>)
      }
    }
    const render24 = () => {
      if (num==24) {
         return (<li className="page-item active" ><li className="page-item"><NavLink className="page-link" to="/products24">24</NavLink></li></li>)
      } else {
        return (<li className="page-item"><NavLink className="page-link" to="/products24">24</NavLink></li>)
      }
    }
    const render25 = () => {
      if (num==25) {
         return (<li className="page-item active" ><li className="page-item"><NavLink className="page-link" to="/products25">25</NavLink></li></li>)
      } else {
        return (<li className="page-item"><NavLink className="page-link" to="/products25">25</NavLink></li>)
      }
    }
    const render26 = () => {
      if (num==26) {
         return (<li className="page-item active" ><li className="page-item"><NavLink className="page-link" to="/products26">26</NavLink></li></li>)
      } else {
        return (<li className="page-item"><NavLink className="page-link" to="/products26">26</NavLink></li>)
      }
    }
    const render27 = () => {
      if (num==27) {
         return (<li className="page-item active" ><li className="page-item"><NavLink className="page-link" to="/products27">27</NavLink></li></li>)
      } else {
        return (<li className="page-item"><NavLink className="page-link" to="/products27">27</NavLink></li>)
      }
    }
    const render28 = () => {
      if (num==28) {
         return (<li className="page-item active" ><li className="page-item"><NavLink className="page-link" to="/products28">28</NavLink></li></li>)
      } else {
        return (<li className="page-item"><NavLink className="page-link" to="/products28">28</NavLink></li>)
      }
    }
    
    const renderElement=()=>{
   if(val==1)
      return render1()
    else if(val==0)
      return render0()
   else if(val==2)
      return render2()
    else if(val==3)
      return render3()
    else if(val==4)
      return render4()
    else if(val==5)
      return render5()
    else if(val==6)
      return render6()
    else if(val==7)
      return render7()
    else if(val==8)
      return render8()
    else if(val==9)
      return render9()
    else if(val==10)
      return render10()
     else if(val==11)
      return render11()
     else if(val==12)
      return render12()
     else if(val==13)
      return render13()
     else if(val==14)
      return render14()
    else if(val==15)
      return render15()
    else if(val==16)
      return render16()
    else if(val==17)
      return render17()
    else if(val==18)
      return render18()
    else if(val==19)
      return render19()
    else if(val==20)
      return render20()
    else if(val==21)
      return render21()
    else if(val==22)
      return render22()
    else if(val==23)
      return render23()
    else if(val==24)
      return render24()
    else if(val==25)
      return render25()
    else if(val==26)
      return render26()
    else if(val==27)
      return render27()
    else if(val==28)
      return render28()
}

  return (
    <>
    
    
    
    {renderElement()}
    
    </>
  );
};

export default Pagination;