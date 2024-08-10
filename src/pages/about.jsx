import Head from "../head"
import Foot from "../foot"
import Stuff from "../staff"
import P from '../assets/p.png'
import b1 from '../assets/b1.jpg'
import b2 from '../assets/b2.jpg'
import b3 from '../assets/b3.jpg'
import b4 from '../assets/b4.jpg'
import b5 from '../assets/b5.jpg'
import b6 from '../assets/b6.jpg'
import b7 from '../assets/b7.jpg'
import b8 from '../assets/b8.jpg'
import b9 from '../assets/b9.jpg'
import b10 from '../assets/b10.jpg'
import b11 from '../assets/b11.jpg'
import b12 from '../assets/b12.jpg'
import b13 from '../assets/b13.jpg'
import b14 from '../assets/b14.jpg'
import b15 from '../assets/b15.jpg'
import b16 from '../assets/b16.jpg'
import b18 from '../assets/b17.jpg'
import b19 from '../assets/b18.jpg'
import b20 from '../assets/b19.jpg'
import b21 from '../assets/b20.jpg'
import b22 from '../assets/b21.jpg'
import b23 from '../assets/b22.jpg'
import b24 from '../assets/b23.jpg'
import b25 from '../assets/b24.jpg'
import b26 from '../assets/b25.jpg'


import { useState } from "react"
import {motion} from 'framer-motion'


function About(){
    const l=[b1,b2,b3,b4,b5,b6,b6,b7,b8,b9,b10, b11,b12,b13,b14,b15,b16,b18,b19,b20, b21,b22,b23,b24,b25,b26]
    const [gym, setGym]=useState(l[Math.floor(Math.random() * l.length)])



    return(<div>
        <Head />
        <motion.h1 style={{textAlign:'center', fontSize:'4em',fontWeight:100,color:"#ffff4c"}}>Stuff Members</motion.h1>
        <div style={{display:'flex', flexWrap:'wrap', gap:20,placeContent:'center'}}>
            <Stuff sorce={P} name='Name' role='Role' />
            <Stuff sorce={P} name='Name' role='Role' />
            <Stuff sorce={P} name='Name' role='Role' />
            <Stuff sorce={P} name='Name' role='Role' />
            <Stuff sorce={P} name='Name' role='Role' />
        </div>

        <motion.h1 style={{fontSize:'5em', textAlign:'center', fontWeight:100,color:"#ffff4c"}}>Our Gym</motion.h1>
        <p style={{textAlign:'center'}}>Click the images to make them Big</p>
        <div style={{display:'flex', flexWrap:'wrap',placeContent:'center'}}>
           <img style={{width:'90vw', maxWidth:550, minWidth:375, placeSelf:'center', borderRadius:20, marginBottom:50}} src={gym} />
           
           <div style={{display:'flex', flexWrap:'wrap',alignContent:'center', placeContent:'center'}}>
            <motion.img style={{width:'15vw', maxWidth:200, minWidth:100}} src={b1} whileTap={()=>setGym(b1)}/>
            <motion.img style={{width:'15vw', maxWidth:200, minWidth:100}} src={b2} whileTap={()=>setGym(b2)}/>
            <motion.img style={{width:'15vw', maxWidth:200, minWidth:100}} src={b18} whileTap={()=>setGym(b18)}/>
            <motion.img style={{width:'15vw', maxWidth:200, minWidth:100}} src={b19} whileTap={()=>setGym(b19)}/>
            <motion.img style={{width:'15vw', maxWidth:200, minWidth:100}} src={b20} whileTap={()=>setGym(b20)}/>
            <motion.img style={{width:'15vw', maxWidth:200, minWidth:100}} src={b21} whileTap={()=>setGym(b21)}/>
            <motion.img style={{width:'15vw', maxWidth:200, minWidth:100}} src={b23} whileTap={()=>setGym(b23)}/>
            <motion.img style={{width:'15vw', maxWidth:200, minWidth:100}} src={b24} whileTap={()=>setGym(b24)}/>
            <motion.img style={{width:'15vw', maxWidth:200, minWidth:100}} src={b25} whileTap={()=>setGym(b25)}/>
            <motion.img style={{width:'15vw', maxWidth:200, minWidth:100}} src={b26} whileTap={()=>setGym(b26)}/>
            <motion.img style={{width:'15vw', maxWidth:200, minWidth:100}} src={b3} whileTap={()=>setGym(b3)}/>
            <motion.img style={{width:'15vw', maxWidth:200, minWidth:100}} src={b4} whileTap={()=>setGym(b4)}/>
            <motion.img style={{width:'15vw', maxWidth:200, minWidth:100}} src={b5} whileTap={()=>setGym(b5)}/>
            <motion.img style={{width:'15vw', maxWidth:200, minWidth:100}} src={b6} whileTap={()=>setGym(b6)}/>
            <motion.img style={{width:'15vw', maxWidth:200, minWidth:100}} src={b7} whileTap={()=>setGym(b7)}/>
            <motion.img style={{width:'15vw', maxWidth:200, minWidth:100}} src={b8} whileTap={()=>setGym(b8)}/>
            <motion.img style={{width:'15vw', maxWidth:200, minWidth:100}} src={b9} whileTap={()=>setGym(b9)}/>
            <motion.img style={{width:'15vw', maxWidth:200, minWidth:100}} src={b11} whileTap={()=>setGym(b11)}/>
            <motion.img style={{width:'15vw', maxWidth:200, minWidth:100}} src={b13} whileTap={()=>setGym(b13)}/>
            <motion.img style={{width:'15vw', maxWidth:200, minWidth:100}} src={b14} whileTap={()=>setGym(b14)}/>
            <motion.img style={{width:'15vw', maxWidth:200, minWidth:100}} src={b15} whileTap={()=>setGym(b15)}/>
            <motion.img style={{width:'15vw', maxWidth:200, minWidth:100}} src={b16} whileTap={()=>setGym(b16)}/>

            

           </div>
            
        </div>




        
    <Foot />   
    </div>)

}


export default About