import {motion} from 'framer-motion'


function Blogcontain(props){
    return(<motion.div style={{width:'40vw', minWidth:350, placeContent:'center', marginTop:100, margin:'2vw'}}>
        <motion.img src={props.sorce} style={{width:'35vw', minWidth:300, marginLeft:'2.5vw', borderRadius:20}}></motion.img>
        <motion.div>
            <motion.h1 style={{fontSize:'2.5em', fontWeight:50, textAlign:'center',color:"#ffff4c"}}>{props.head}</motion.h1>
            <motion.p style={{textAlign:'center', fontWeight:100}}>{props.contain}</motion.p>
        </motion.div>
    </motion.div>)
}



export default Blogcontain