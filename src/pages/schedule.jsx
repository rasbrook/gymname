import Head from "../head"
import Foot from "../foot"
import {motion} from 'framer-motion'
import b13 from '../assets/b13.jpg'


function Schedule(){
    return(<div>
        <Head />
        <motion.h1 style={{fontSize:'4em', fontWeight:200, textAlign:'center',color:"#ffff4c"}}>Our Schedule</motion.h1>
        


        <motion.div style={{width:'80vw', placeContent:'center', marginLeft:'10vw'}}>
        <motion.h1 style={{fontSize:'3.5em', fontWeight:200, textAlign:'center'}}>Weekly Schedule</motion.h1>
        <div style={{display:'flex', alignContent:'center', alignItems:'center', placeContent:'center'}}>
            <motion.h3 style={{fontSize:'1.5em'}}>Spin Class</motion.h3><p>{'--->'}  From Monday-Saturday</p></div>


        <div style={{display:'flex', alignContent:'center', alignItems:'center', placeContent:'center'}}>
                <motion.h3 style={{fontSize:'1.5em'}}>Open Gym</motion.h3><p>{'---->'}  From Monday-Saturday</p></div>


        <div style={{display:'flex', alignContent:'center', alignItems:'center', placeContent:'center'}}>
                <motion.h3 style={{fontSize:'1.5em'}}>Aerobics Class</motion.h3><p>{'---->'}  From Monday-Saturday</p></div>

        <div style={{display:'flex', alignContent:'center', alignItems:'center', placeContent:'center'}}>
                <motion.h3 style={{fontSize:'1.5em'}}>Spa Service</motion.h3><p>{'---->'}  From Monday-Saturday</p></div>
          
        </motion.div>






        <motion.div style={{display:'flex', flexWrap:'wrap', placeContent:'center'}}>



        <motion.div style={{width:'40vw', minWidth:350, placeContent:'center', marginTop:100}}>
        <motion.img src={b13} style={{width:'35vw', minWidth:300, marginLeft:'2.5vw', borderRadius:20}}></motion.img>
        <motion.h1 style={{fontSize:'2.5em', fontWeight:100, textAlign:'center'}}>Spin Class Schedule</motion.h1>   
        </motion.div>



        <motion.div style={{width:'40vw', minWidth:350, marginTop:100}}>
        <motion.img src={b13} style={{width:'35vw', minWidth:300, marginLeft:'2.5vw', borderRadius:20}}></motion.img>
        <motion.h1 style={{fontSize:'2.5em', fontWeight:100, textAlign:'center'}}>Aerobics Class Schedule</motion.h1>
        </motion.div>

        <motion.div style={{width:'40vw', minWidth:350, marginTop:100}}>
        <motion.img src={b13} style={{width:'35vw', minWidth:300, marginLeft:'2.5vw', borderRadius:20}}></motion.img>
        <motion.h1 style={{fontSize:'2.5em', fontWeight:100, textAlign:'center'}}>Open Gym Schedule</motion.h1>
        </motion.div>


        <motion.div style={{width:'40vw', minWidth:350, marginTop:100}}>
        <motion.img src={b13} style={{width:'35vw', minWidth:300, marginLeft:'2.5vw', borderRadius:20}}></motion.img>
        <motion.h1 style={{fontSize:'2.5em', fontWeight:100, textAlign:'center'}}>Spa Schedule</motion.h1>
        </motion.div>
            
        </motion.div>
        



    
    <Foot />     
    </div>)

}


export default Schedule