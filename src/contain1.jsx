import {motion} from 'framer-motion'


function Containone(props){
    return(<motion.div 
        initial={{position:'relative',top:200,opacity:0}} 
        whileInView={{position:'relative', top:0,opacity:1}}
        transition={{duration:1}}
    style={{display:'flex' , flexWrap:'wrap',position:'relative', top:0,overflow:'hidden', width:'100vw', marginTop:'5vh'}}>
        <motion.h1 
       
         style={{width:'48vw' , fontSize:'3.7em', minWidth:'320px',fontWeight:10,paddingLeft:'5vw'}}>{props.head}</motion.h1>
        <motion.p 
        
        style={{width:'35vw' ,
            minWidth:'375px', 
            fontWeight:10, 
            justifyContent:'center',
            position:'relative',
            top:'3vh', 
            height:'100px'
            }}>{props.contain}</motion.p>
    </motion.div>)
}



export default Containone