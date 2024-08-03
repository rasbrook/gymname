
import { useState } from "react"
import "./mode.css"


function Mode(){
    
    



  function handlechange(event){
    
    let state=event.target.checked
    
    if (state){
     
      document.getElementById('all').style.backgroundColor='#fff'
      document.getElementById('all').style.color='#000'
      
      
    }
    
    else{
      
      document.getElementById('all').style.backgroundColor='#000'
      document.getElementById('all').style.color='#fff'
    

     
    }
  }
  
  return(<div   className="m" style={{display:'flex', alignItems:'center'}}>
    
    
  <label className="mode">
    
    <input 
    value='on'
  type="checkbox"  
  onChange={handlechange}
></input><span className="slider" /></label>
  </div>
  
)
}





export default Mode