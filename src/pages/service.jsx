import Head from "../head"
import Foot from "../foot"
import Classes from "../classes"
import person from '../assets/person.jpg'
import spin1 from '../assets/spin.png'
import spin2 from '../assets/spin1.jpg'
import spin3 from '../assets/spin (2).png'
import ice from '../assets/ice.jpg'
import per1 from '../assets/per.png'
import per2 from '../assets/per1.jpg'
import per3 from '../assets/per2.jpg'
import aerob from '../assets/aerob.jpg'
import sauna from '../assets/sunna.jpg'
import steam from '../assets/steem.jpg'
import b10 from '../assets/gym 2.png'
import coffe from '../assets/coffe.jpg'
import spa from '../assets/spa.png'
import {motion} from 'framer-motion'
import per from '../assets/per.png'


function Service(){
  const s=[spin1,spin2,spin3]
  const spin=s[Math.floor(Math.random() * s.length)]

  const p=[per1,per2, per3]
  const per=p[Math.floor(Math.random() * p.length)]
  
    return(<div>
        <Head />
        <motion.h1 style={{textAlign:'center', fontSize:'4em', fontWeight:100,color:"#ffff4c"}}>Service We Provide</motion.h1>
        <motion.div style={{display:'flex', flexWrap:'wrap', gap:20,placeContent:'center'}}>
      <Classes sorce={per} class='Personal Training'/>
      <Classes sorce={aerob} class='Aerobics Class'/>
      <Classes sorce={spin} class='Spin Class'/>
      <Classes sorce={b10} class='Ultimate Open Gym'/>
      <Classes sorce={spa} class='Spa'/>
      <Classes sorce={sauna} class='Sauna Bath'/>
      <Classes sorce={steam} class='Steam'/>
      <Classes sorce={ice} class='Ice Bath'/>
      <Classes sorce={coffe} class='Gym Cafe'/>
    </motion.div>






    <Foot />
    </div>)
}


export default Service