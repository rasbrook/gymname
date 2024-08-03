import Head from "../head"
import Foot from "../foot"
import Blogcontain from "./blogcontain"
import spin from '../assets/spin.jpg'

import muscle from '../assets/muscle.jpg'
import sleep from '../assets/sleep.jpg'
import fat from '../assets/fat.jpg'
import meta from '../assets/meta.jpg'
import aerob from '../assets/aerob.jpg'
import sauna from '../assets/sunna.jpg'

function Blog(){
    return(<div>
        <Head />
        <div style={{display:"flex" , flexWrap:'wrap', placeContent:'centerh'}}>
        <Blogcontain sorce={muscle}  head='Adding Muscle'  contain='If your goal is to build muscle or improve your overall physique, regular exercise is essential. Resistance training (like weightlifting) helps stimulate muscle growth and definition. When you work specific muscle groups, you encourage hypertrophy (muscle growth) and create a more sculpted appearance.' />
        <Blogcontain sorce={fat}  head='Fat Loss'  contain='For those aiming to shed excess body fat, exercise plays a crucial role. Cardiovascular workouts (such as running, cycling, or swimming) help burn calories and promote fat loss. Additionally, strength training helps maintain lean muscle mass while reducing body fat percentage.' />
        <Blogcontain sorce={spin}  head='Cardiovascular Health'  contain='Regular exercise improves heart health by enhancing circulation, reducing blood pressure, and lowering the risk of heart disease. Cardio workouts strengthen the heart muscle and improve its efficiency.' />
        <Blogcontain sorce={spin}  head='Mental Health'  contain='Exercise has powerful effects on mental well-being. It releases endorphins (the “feel-good” hormones), reduces stress, anxiety, and depression, and enhances cognitive function. So, whether it’s a brisk walk, a dance class, or lifting weights, moving your body positively impacts your mind.' />
        <Blogcontain sorce={sleep}  head='Better Sleep'  contain='Engaging in physical activity can lead to better sleep quality. It helps regulate your body’s internal clock and promotes restful sleep. Just avoid intense workouts close to bedtime, as they might have the opposite effect.' />
        <Blogcontain sorce={meta}  head='Metabolism Boost'  contain='Strength training and high-intensity workouts increase your metabolic rate. Even after you finish exercising, your body continues to burn calories during the recovery process.' />
        <Blogcontain sorce={spin}  head='Caloric Expenditure'  contain='Exercise burns calories, which is crucial for weight management. Whether you’re trying to lose weight or maintain your current weight, consistent physical activity helps create a calorie deficit (if needed) or balance.' />
        <Blogcontain sorce={spin}  head='Sustainable Lifestyle: '  contain='Regular exercise contributes to an active lifestyle. When you find activities you enjoy, you’re more likely to stick with them long-term. Consistency matters for achieving and maintaining your weight goals.' />
        </div>


        <Foot /> 
    </div>)

}


export default Blog