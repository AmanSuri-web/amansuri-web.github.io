import React from 'react';
import { useHistory,NavLink } from "react-router-dom";

const Pagination = ({num,val,id}) => {
  


  
  
  
  const render0 = () => {
       
        return (<li className="page-item disabled"><a className="page-link" href="/">...</a></li>)
      
    }
    const render1 = () => {
      if (num==1) {
         return (<li className="page-item active" ><li className="page-item"><NavLink className="page-link" to={{pathname:`/products-category/${id}/page1`}}>1</NavLink></li></li>)
      } else {
        return (<li className="page-item"><NavLink className="page-link" to={{pathname:`/products-category/${id}/page1`}}>1</NavLink></li>)
      }
    }
    const render2 = () => {
      if (num==2) {
         return (<li className="page-item active" ><li className="page-item"><NavLink className="page-link" to={{pathname:`/products-category/${id}/page2`}}>2</NavLink></li></li>)
      } else {
        return (<li className="page-item"><NavLink className="page-link" to={{pathname:`/products-category/${id}/page2`}}>2</NavLink></li>)
      }
    }
    const render3 = () => {
      if (num==3) {
         return (<li className="page-item active" ><li className="page-item"><NavLink className="page-link" to={{pathname:`/products-category/${id}/page3`}}>3</NavLink></li></li>)
      } else {
        return (<li className="page-item"><NavLink className="page-link" to={{pathname:`/products-category/${id}/page3`}}>3</NavLink></li>)
      }
    }
    const render4 = () => {
      if (num==4) {
         return (<li className="page-item active" ><li className="page-item"><NavLink className="page-link" to={{pathname:`/products-category/${id}/page4`}}>4</NavLink></li></li>)
      } else {
        return (<li className="page-item"><NavLink className="page-link" to={{pathname:`/products-category/${id}/page4`}}>4</NavLink></li>)
      }
    }
    const render5 = () => {
      if (num==5) {
         return (<li className="page-item active" ><li className="page-item"><NavLink className="page-link" to={{pathname:`/products-category/${id}/page5`}}>5</NavLink></li></li>)
      } else {
        return (<li className="page-item"><NavLink className="page-link" to={{pathname:`/products-category/${id}/page5`}}>5</NavLink></li>)
      }
    }
    const render6 = () => {
      if (num==6) {
         return (<li className="page-item active" ><li className="page-item"><NavLink className="page-link" to={{pathname:`/products-category/${id}/page6`}}>6</NavLink></li></li>)
      } else {
        return (<li className="page-item"><NavLink className="page-link" to={{pathname:`/products-category/${id}/page6`}}>6</NavLink></li>)
      }
    }
    const render7 = () => {
      if (num==7) {
         return (<li className="page-item active" ><li className="page-item"><NavLink className="page-link" to={{pathname:`/products-category/${id}/page7`}}>7</NavLink></li></li>)
      } else {
        return (<li className="page-item"><NavLink className="page-link" to={{pathname:`/products-category/${id}/page7`}}>7</NavLink></li>)
      }
    }
    
    
    const renderElement=()=>{
      console.log(val)
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
    
}

  return (
    <>
    
    
    
    {renderElement()}
    
    </>
  );
};

export default Pagination;