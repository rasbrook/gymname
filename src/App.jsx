import Head from "./head"
import {motion} from 'framer-motion'
import Containone from "./contain1"
import a1 from './assets/a1.jpg'
import a2 from './assets/a2.jpg'
import a3 from './assets/a3.jpg'
import a4 from './assets/a4.jpg'
import a5 from './assets/a5.jpg'
import a6 from './assets/a6.jpg'
import a7 from './assets/a7.jpg'
import a8 from './assets/a8.jpg'
import a9 from './assets/a9.jpg'
import a10 from './assets/a10.jpg'
import a11 from './assets/a11.jpg'
import a12 from './assets/a12.jpg'
import a14 from './assets/a14.jpg'
import a15 from './assets/a15.jpg'
import a16 from './assets/a16.jpg'
import a17 from './assets/a17.jpg'
import a18 from './assets/a18.jpg'
import a19 from './assets/a19.jpg'
import a20 from './assets/a20.jpg'
import a21 from './assets/a21.jpg'
import a22 from './assets/a22.jpg'
import a23 from './assets/a23.jpg'
import a24 from './assets/a24.jpg'
import a25 from './assets/a25.jpg'
import a26 from './assets/a26.jpg'
import P from './assets/p.png'
import { useState } from "react"
import Stuff from "./staff"
import Foot from "./foot"
import { Link } from "react-router-dom"
import Classes from "./classes"
import aerob from './assets/aerob.jpg'
import spin1 from './assets/spin.png'
import spin2 from './assets/spin1.jpg'
import spin3 from './assets/spin (2).png'

import per1 from './assets/per.png'
import per2 from './assets/per1.jpg'
import per3 from './assets/per2.jpg'












function App() {
  
  const s=[spin1,spin2,spin3]
  const spin=s[Math.floor(Math.random() * s.length)]

  const p=[per1,per2, per3]
  const per=p[Math.floor(Math.random() * p.length)]
  
  

  const l=[a1,a2, a3, a4, a5, a6, a7,a8, a9, a10,a11,a12, a14,a15,a16,a17,a18,a19,a20,a21,a22,a23,a24,a25,a26]
  const [pic1, setPic1]=useState(l[Math.floor(Math.random() * l.length)])
  const [pic2, setPic2]=useState(l[Math.floor(Math.random() * l.length)])


  const check=<svg fill="#fff" height="40px" width="40px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
  viewBox="0 0 496.512 496.512" xmlSpace="preserve">
<g>
 <g>
   <path d="M248.256,0c-136.96,0-248,111.152-248,248.256s111.04,248.256,248,248.256s248-111.152,248-248.256S385.216,0,248.256,0z
      M248.256,480.512c-127.92,0-232-104.192-232-232.256S120.336,16,248.256,16s232,104.192,232,232.256
     S376.176,480.512,248.256,480.512z"/>
 </g>
</g>
<g>
 <g>
   <polygon points="348.368,154.368 193.904,
                    322.944 130.128,259.088
                     118.816,270.4 194.4,346.064
                      360.144,165.168 		"/>
 </g>
</g>
</svg>



      const m=['Earned, Not Given', 
        'Impossible is Noting',
        'Discipline breeds success.',
        'Pain today, strength tomorrow.',
      'Start. Be great.',
      'Mirror: your competition.',
      'Get ahead, start now.',
      'Regret or discipline? Choose.',
      'Well done > well said.',
      'Challenge your limits daily.',
      'Tough times, tough people.',
      'Perseverance over strength.'

    ]


  
    
    
    
  
    

  


  return(<div>
    <div className="landing" >
      <Head />
      <motion.h1 
      style={{fontSize:'4vw', width:'50vw', fontWeight:100, position:'relative', top: '15vh', left:'2vw', color:'#ffff4c'}}>
       {m[Math.floor(Math.random() * m.length)]}
      </motion.h1>
      <motion.a
      href="tel:+2519"
      whileHover={{scale:1.1, color:"#ffff4c"}}
      transition={{duration:1}}
      initial={{scale:0}}
      animate={{scale:1}}
      style={{textDecoration:'none', 
              color:'inherit', 
              padding:15, 
              paddingLeft:30, 
              paddingRight:30, 
              border:'2px solid white', 
              height:20, 
              borderRadius:30,
              position:'relative' ,
              left:'42vw',
              fontSize:'1em',
              top:370,
              zIndex:2
              
              }}>
        Call Us</motion.a>
    </div>

    <Containone head='WE’RE A HIGH QUALITY GYM DEDICATED TO AFFORDABLE HEALTH AND WELLNESS.' 
    contain='Our gym is where you come as you are, and do your best. Our membership offers in-club programming aimed at 
    helping you achieve your fitness goals. Discover all of our club’s offerings below. ' />
    <motion.div style={{marginLeft:'15vw', display:'flex', marginTop:'10em'}} >
      <motion.img 
      initial={{position:'relative',top:100,opacity:1, right:50}} 
      whileInView={{position:'relative', top:'0vw',opacity:1, right:0}}
      transition={{duration:1}}
      
      style={{width:'30vw', minWidth:150}} 
      src={pic1}></motion.img>
      <motion.img 
      initial={{position:'relative',top:-100,opacity:1, right:-50}} 
      whileInView={{position:'relative', top:'-5vh',opacity:1,right:0}}
      transition={{duration:1}}


      style={{width:'30vw',
        minWidth:150, 
        position:'relative', 
        top:'-5vh', 
        left:'-3vw', 
        height:'fit'
      }}      
      
      
  
      src={pic2}></motion.img>
      
      
    </motion.div>
    <motion.h1 style={{textAlign:'center', fontWeight:100, marginTop:'3em',fontSize:'2.5em',color:"#ffff4c"}}>AMENITIES</motion.h1>
      <motion.h4 
      style={{ 
      width:'60vw', 
      placeSelf:'center', 
     marginLeft:'20vw', 
      fontWeight:100, 
      fontSize:'1.5em'}}>At Jemo Gym, we’re always expanding our amenities 
        to meet the needs of our community. 
        Something you’d like to see added to our list? Submit a request.</motion.h4>
    <motion.h1 style={{fontSize:'3em',fontWeight:100, textAlign:'center', marginTop:'7vh',color:"#ffff4c"}}>Maximize your fitness journey</motion.h1>

    <motion.div style={{display:'flex', flexWrap:'wrap', placeContent:'center', overflowX:'hidden', gap:0}}>
      <div style={{alignContent:'center', alignItems:'center', overflowX:'hidden'}}>
       <h2 style={{margin:'2vw', textAlign:'center'}}> {check}  Integrated Approach</h2>
       <h2 style={{margin:'2vw', textAlign:'center'}}> {check}  Expert Guidance</h2>
       <h2 style={{margin:'2vw', textAlign:'center'}}> {check}  Medical Supervision</h2>
      </div>
      <motion.h1
      style={{
        textDecoration:'none', 
              color:'inherit', 
              padding:15, 
              paddingLeft:35, 
              paddingRight:35, 
              border:'2px solid white', 
              height:20, 
              borderRadius:30,
              fontSize:'1.2em' 
      }}
      whileHover={{scale:1.1, color:"#ffff4c",}}
      transition={{duration:0.2}}>

      <Link 
      to={'./service'}
      style={{textDecoration:'none', 
              color:'inherit', 
               
              }}>
        View Our Service</Link>
      </motion.h1>
        
      <div style={{alignContent:'center', alignItems:'center',marginLeft:'0vw', overflowX:'hidden'}}>
       <h2 style={{margin:'2vw', textAlign:'center'}}> {check}  Specialized Programs</h2>
       <h2 style={{margin:'2vw', textAlign:'center'}}> {check}  Comfortable Environment</h2>
       <h2 style={{margin:'2vw', textAlign:'center'}}> {check}  State-of-the-Art Facilities</h2>
      </div>
    </motion.div>
    
    


  
    
    



<motion.h1 style={{textAlign:'center', fontSize:'4em', fontWeight:100,color:"#ffff4c"}}>Our Classes</motion.h1>

    <motion.div style={{display:'flex', flexWrap:'wrap', gap:20,placeContent:'center'}}>
      <Classes sorce={per} class='Personal Training'/>
      <Classes sorce={spin} class='Spin Class'/>
      <Classes sorce={aerob} class='Aerobics Class'/>
    </motion.div>
    <motion.h1
    style={{
      textDecoration:'none', 
              color:'inherit', 
              padding:15, 
              paddingLeft:35, 
              paddingRight:35, 
             
              fontSize:'1.2em'
    }}
    whileHover={{scale:1.1, color:"#ffff4c",}}
    transition={{duration:0.2}}>
    <Link  className="see"
      to={'./service'}
      style={{textDecoration:'none', 
              color:'inherit', 
              padding:15, 
              paddingLeft:35, 
              paddingRight:35, 
              border:'2px solid white', 
              height:20, 
              borderRadius:30, 
              }}>
        See More Services</Link>
    </motion.h1>
    
    
    
    

   
        <motion.h1 style={{textAlign:'center', fontSize:'4em',fontWeight:100,color:"#ffff4c"}}>Meet Out stuff</motion.h1>
    <motion.div style={{display:'flex', flexWrap:'wrap', gap:20,placeContent:'center'}}>
      <Stuff sorce={P} name='Name' role='Role' />
      <Stuff sorce={P} name='Name' role='Role' />
      <Stuff sorce={P} name='Name' role='Role' />
    </motion.div>
    <motion.h3  
    whileHover={{scale:1.1, 
                color:"#ffff4c",}}
    transition={{duration:0.2}}
    
    
    className="see" style={{textAlign:'center', 
              color:'inherit',
              padding:15,
              width:'150px', 
              paddingLeft:3, 
              paddingRight:3, 
              border:'2px solid white', 
              height:20, 
              borderRadius:30}}>
    <Link to={'./about'} 
    style={{color:'inherit', 
    textDecoration:'none', 
    textAlign:'center'}}>See more</Link></motion.h3>
  <Foot />  
  </div>)
}

export default App
