import Head from "../head"
import Foot from "../foot"
import { useState } from "react"
import {motion} from 'framer-motion'

function Contact(){
    const [submit, setSubmit]=useState('')
    return(<div>
        <Head />
        <form style={{justifyContent:'space-between', 
            width:'90%', marginLeft:'5%', 
            backgroundColor:'#000',marginTop:'10vw'}}>
            <div className="form">
            <label style={{margin:20}} >Your Name</label>
            <input style={{margin:20,height:30, width:200, borderRadius:5,
                 border:'none', backgroundColor:'#fff', color:'black', overflowX:'hidden'}} type="text" 
                 placeholder="Name" /><br />

            <label style={{margin:20}} >Email Address</label>
            <input style={{margin:20, height:30, width:200, borderRadius:5,
                 border:'none',backgroundColor:'#fff', color:'black', overflowX:'hidden'}} type="email" 
                 placeholder="Email Address"/>
                 <br />


            <label style={{margin:20}} >Phone Number</label>
            <input style={{margin:20, height:30, width:200, borderRadius:5, 
                border:'none',backgroundColor:'#fff', color:'black', overflowX:'hidden'}} type="tel" 
                placeholder="Phone Number" />


            </div>
            <label style={{margin:20}}>Message</label>
            <textarea style={{margin:20, width:'90%', color:'black' ,backgroundColor:'#fff', overflowX:'hidden'}} type='text'  placeholder="message" rows={10} cols={100}></textarea>
        </form>
        <h1 style={{color:'#53b7ff', fontSize:'12px', fontWeight:200,marginLeft:'43.5%'}}>{submit}</h1>

        <motion.button 
        style={{width:150, height:50, border:'none', marginLeft:'45%', 
        backgroundColor:'#ffff4c', color:'#000' ,
         borderRadius:'10px'}} 
         whileHover={{scale:1.1}}
         whileTap={{scale:0.9}}
         onClick={()=>{setSubmit('the message have been submitted')}}>Send message</motion.button>
    



    <Foot /> 
    </div>)

}


export default Contact