import {motion} from 'framer-motion'
function Trainer(props){
    return(<motion.div style={{display:'flex', flexWrap:'wrap', gap:'5vw', marginTop:'10vh', width:'90vw', marginLeft:'4vw'}}>

        <motion.img
        loading="lazy" 
        style={{width:'40vw', maxWidth:500, minWidth:370}}
        src={props.sorce}
        ></motion.img>

        <motion.div style={{width:'40vw', maxWidth:500, minWidth:370}}>
            <h2>{props.head}</h2>
            <p>{props.disc}</p>
        </motion.div>
        
        

    </motion.div>)
}



export default Trainer