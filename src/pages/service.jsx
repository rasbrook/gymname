import Head from "../head"
import Foot from "../foot"
import Classes from "../classes"
import person from '../assets/person.jpg'
import spin from '../assets/spin.jpg'
import aerob from '../assets/aerob.jpg'
import sauna from '../assets/sunna.jpg'
import s from '../assets/s.jpg'
import b10 from '../assets/b10.jpg'
import {motion} from 'framer-motion'

function Service(){
    return(<div>
        <Head />
        <motion.h1 style={{textAlign:'center', fontSize:'4em', fontWeight:100,color:"#ffff4c"}}>Service We Provide</motion.h1>
        <motion.div style={{display:'flex', flexWrap:'wrap', gap:20,placeContent:'center'}}>
      <Classes sorce={person} class='Personal Training'/>
      <Classes sorce={spin} class='Spin Class'/>
      <Classes sorce={aerob} class='Aerobics Class'/>
      <Classes sorce={b10} class='Ultimate Open Gym'/>
      <Classes sorce={sauna} class='Sauna Bath'/>
      <Classes sorce={s} class='Steam'/>
      <Classes sorce={s} class='Gym Coffee'/>
    </motion.div>






    <Foot />
    </div>)
}


export default Service