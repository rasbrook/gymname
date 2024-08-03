import {motion} from 'framer-motion'


function Stuff(props){
    return(
    <motion.div style={{width:'30vw',maxWidth:400, minWidth:320, position:'relative', margin:'2vw', borderRadius:10}}>
        <motion.img src={props.sorce} style={{maxWidth:400, width:"25vw", minWidth:300, margin:10, borderRadius:10}} ></motion.img>
        <motion.h1 style={{textAlign:'center'}}>{props.name}</motion.h1>
        <motion.p style={{textAlign:'center'}}>{props.role}</motion.p>

    </motion.div>)
}




export default Stuff