import {motion} from 'framer-motion'


function Containone(props){
    return(<motion.div style={{display:'flex' , flexWrap:'wrap',position:'relative', top:0,overflow:'hidden', width:'100vw', marginTop:'5vh'}}>
        <h1 style={{width:'48vw' , fontSize:'3.7em', minWidth:'320px',fontWeight:10,paddingLeft:'5vw'}}>{props.head}</h1>
        <p style={{width:'35vw' ,
            minWidth:'375px', 
            fontWeight:10, 
            justifyContent:'center',
            position:'relative',
            top:'3vh', 
            height:'100px'
            }}>{props.contain}</p>
    </motion.div>)
}



export default Containone