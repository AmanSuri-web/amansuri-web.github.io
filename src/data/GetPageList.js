import React ,{useEffect} from 'react';

import Pagination from './Pagination.js';

const GetPageList = ({num,totalPages,id}) => {

  var x=parseInt(num)+1;
  var row=[];
  if(totalPages<=7){
    for(var i=1;i<=totalPages;i++)
    {
      row.push(i)
    }
  
    
}

return (<>

  {
  
    row.map((val,ind)=>{
      
        return(<Pagination num={num} val={val} id={id}/>)
        
    })
    
    
    
    }
    </>
    )
}

export default GetPageList;