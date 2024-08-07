import {Link} from 'react-router-dom'
import {motion, useAnimationControls} from 'framer-motion'



function Head(){
    const f=useAnimationControls()

    function Show(){
        f.start('final')
    }
    function Hide(){
        
        f.start('init')
    }



    return(<div className="head" style={{zIndex:100}}>
        <div className='comp'>
            <h1 style={{marginLeft:"2vw"}}>Jemo Gym</h1>
        </div>
        <div id='links' >
            <div style={{display:'flex', alignItems:'center'}}>
            <motion.h1 
            whileHover={{scale:1.1, color:"#ffff4c"}}
            transition={{duration:0.2}}>
            <Link 
            style={{color:'inherit', textDecoration:'none', marginRight:'5vw', fontSize:'1.6vw', fontWeight:100}}
            to={'/'}>
                Home
            </Link>
            </motion.h1>

            <motion.h1
            whileHover={{scale:1.1, color:"#ffff4c"}}
            transition={{duration:0.2}}>
            <Link 
            style={{color:'inherit', textDecoration:'none', marginRight:'5vw', fontSize:'1.6vw', fontWeight:100}}
            to={'/service'}>
                Service
            </Link>
            </motion.h1>

            <motion.h1
            whileHover={{scale:1.1, color:"#ffff4c"}}
            transition={{duration:0.2}}>
            <Link 
            style={{color:'inherit', textDecoration:'none', marginRight:'5vw', fontSize:'1.6vw', fontWeight:100}}
            to={'/about'}>
                About
            </Link>

            </motion.h1>

           

            <motion.h1
            whileHover={{scale:1.1, color:"#ffff4c"}}
            transition={{duration:0.2}}>
            <Link 
            style={{color:'inherit', textDecoration:'none', marginRight:'5vw', fontSize:'1.6vw', fontWeight:100}}
            to={'/schedule'}>
                Schedule
            </Link>
                
            </motion.h1>

           

            <motion.h1
            whileHover={{scale:1.1, color:"#ffff4c"}}
            transition={{duration:0.2}}>
            <Link 
            style={{color:'inherit', textDecoration:'none', marginRight:'5vw', fontSize:'1.6vw', fontWeight:100}}
            to={'/blog'}>
                Blog
            </Link>
                
            </motion.h1>

            

            <motion.h1
            whileHover={{scale:1.1, color:"#ffff4c"}}
            transition={{duration:0.2}}>
            <Link 
            style={{color:'inherit', textDecoration:'none', marginRight:'5vw', fontSize:'1.6vw', fontWeight:100}}
            to={'/contact'}>
                Contact
            </Link>
                
            </motion.h1>

            </div>
            

           

        </div>




        <div id='social' >
        <motion.svg
        whileHover={{scale:1.1, color:"#ffff4c", fill:"#ffff4c", cursor:'pointer'}}
        transition={{duration:0.2}}  
        fill="#fff" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
	 width="1.2em" height="1.2em" viewBox="0 0 169.063 169.063"
	 xmlSpace="preserve">
<g>
	<path d="M122.406,0H46.654C20.929,0,0,20.93,0,46.655v75.752c0,25.726,20.929,46.655,46.654,46.655h75.752
		c25.727,0,46.656-20.93,46.656-46.655V46.655C169.063,20.93,148.133,0,122.406,0z M154.063,122.407
		c0,17.455-14.201,31.655-31.656,31.655H46.654C29.2,154.063,15,139.862,15,122.407V46.655C15,29.201,29.2,15,46.654,15h75.752
		c17.455,0,31.656,14.201,31.656,31.655V122.407z"/>
	<path d="M84.531,40.97c-24.021,0-43.563,19.542-43.563,43.563c0,24.02,19.542,43.561,43.563,43.561s43.563-19.541,43.563-43.561
		C128.094,60.512,108.552,40.97,84.531,40.97z M84.531,113.093c-15.749,0-28.563-12.812-28.563-28.561
		c0-15.75,12.813-28.563,28.563-28.563s28.563,12.813,28.563,28.563C113.094,100.281,100.28,113.093,84.531,113.093z"/>
	<path d="M129.921,28.251c-2.89,0-5.729,1.17-7.77,3.22c-2.051,2.04-3.23,4.88-3.23,7.78c0,2.891,1.18,5.73,3.23,7.78
		c2.04,2.04,4.88,3.22,7.77,3.22c2.9,0,5.73-1.18,7.78-3.22c2.05-2.05,3.22-4.89,3.22-7.78c0-2.9-1.17-5.74-3.22-7.78
		C135.661,29.421,132.821,28.251,129.921,28.251z"/>
</g>
</motion.svg>


<motion.svg 
 whileHover={{scale:1.1, color:"#ffff4c", fill:"#ffff4c"}}
 transition={{duration:0.2}}  

width="1.2em" height="1.2em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<motion.path
whileHover={{scale:1.1, color:"#ffff4c", fill:"#ffff4c", cursor:'pointer'}}
transition={{duration:0.2}} 
 fillRule="evenodd" clipRule="evenodd" d="M23.1117 4.49449C23.4296 2.94472 21.9074
 1.65683 20.4317 2.227L2.3425 9.21601C0.694517 9.85273 0.621087 12.1572 2.22518 12.8975L6.1645
  14.7157L8.03849 21.2746C8.13583 21.6153 8.40618 21.8791 8.74917 21.968C9.09216 22.0568 9.45658
   21.9576 9.70712 21.707L12.5938 18.8203L16.6375 21.8531C17.8113 22.7334 19.5019 22.0922 19.7967
    20.6549L23.1117 4.49449ZM3.0633 11.0816L21.1525 4.0926L17.8375 20.2531L13.1 16.6999C12.7019
     16.4013 12.1448 16.4409 11.7929 16.7928L10.5565 18.0292L10.928 15.9861L18.2071 8.70703C18.5614
      8.35278 18.5988 7.79106 18.2947 7.39293C17.9906 6.99479 17.4389 6.88312 17.0039 7.13168L6.95124
       12.876L3.0633 11.0816ZM8.17695 14.4791L8.78333 16.6015L9.01614 15.321C9.05253 15.1209 9.14908
        14.9366 9.29291 14.7928L11.5128 12.573L8.17695 14.4791Z" fill="#fff"/>
</motion.svg>

        </div>






        <motion.svg  id='bars' fill="#fff" width="50px" height="40px" viewBox="0 0 24 24"  onClick={Show}
        xmlns="http://www.w3.org/2000/svg"><path d="M3,11H21a1,1,0,0,0,0-2H3a1,1,0,0,0,0,2Zm18,
        2H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z"/></motion.svg>


        <motion.div 
        style={{position:'absolute',
                top:0, 
                width:'100%', 
                backgroundColor:'#00000099',
                height:'100vh', 
                backdropFilter:'blur(5px)'
            }}
        variants={{
            init:{
                display:'none',
                opacity:0
            }, 
            final:{
                display:'block',
                opacity:1,
                

            }
            
        }} initial='init' animate={f}>

<svg onClick={Hide}
style={{position:'absolute',top:'5vh', left:'90vw'}}
width="1.5em" height="1.5em" viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" 
xmlnsXlink="http://www.w3.org/1999/xlink">
  
    <g id="Page-1" stroke="#fff" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="work-case" fill="#fff" transform="translate(91.520000, 91.520000)">
            <polygon id="Close" points="328.96 30.2933333 298.666667 1.42108547e-14 
            164.48 134.4 30.2933333 1.42108547e-14 1.42108547e-14 30.2933333 134.4 
            164.48 1.42108547e-14 298.666667 30.2933333 328.96 164.48 194.56 298.666667 
            328.96 328.96 298.666667 194.56 164.48">

</polygon>
        </g>
    </g>
</svg>
                <div>
            <h3 style={{textAlign:'center', margin:'10vh', fontWeight:20}}>
            <Link 
            style={{color:'inherit', textDecoration:'none', marginRight:'5vw', fontSize:'1.2em'}}
            to={'/'}>
                Home
            </Link>
            </h3>


            <h3 style={{textAlign:'center', margin:'10vh', fontWeight:20}}>
            <Link 
            style={{color:'inherit', textDecoration:'none', marginRight:'5vw', fontSize:'1.2em'}}
            to={'/service'}>
                Service
            </Link>
            </h3>
                

            <h3 style={{textAlign:'center', margin:'10vh', fontWeight:20}}>
            <Link 
            style={{color:'inherit', textDecoration:'none', marginRight:'5vw', fontSize:'1.2em'}}
            to={'/about'}>
                About
            </Link>
            </h3 >

            <h3 style={{textAlign:'center', margin:'10vh', fontWeight:20}}>
            <Link 
            style={{color:'inherit', textDecoration:'none', marginRight:'5vw', fontSize:'1.2em'}}
            to={'/Schedule'}>
               Schedule
            </Link>
            </h3>

            <h3 style={{textAlign:'center', margin:'10vh', fontWeight:20}}>
            <Link 
            style={{color:'inherit', textDecoration:'none', marginRight:'5vw', fontSize:'1.2em'}}
            to={'/blog'}>
                Blog
            </Link>
            </h3>

            <h3 style={{textAlign:'center', margin:'10vh', fontWeight:20}}>
            <Link 
            style={{color:'inherit', textDecoration:'none', marginRight:'5vw', fontSize:'1.2em'}}
            to={'/contact'}>
                contact
            </Link>
            </h3>
            </div>
            <div style={{alignItems:'center', justifyItems:'center',alignSelf:'center'}} >
        <svg  
        fill="#fff" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
	 width="1.2em" height="1.2em" viewBox="0 0 169.063 169.063"
	 xmlSpace="preserve">
<g>
	<path d="M122.406,0H46.654C20.929,0,0,20.93,0,46.655v75.752c0,25.726,20.929,46.655,46.654,46.655h75.752
		c25.727,0,46.656-20.93,46.656-46.655V46.655C169.063,20.93,148.133,0,122.406,0z M154.063,122.407
		c0,17.455-14.201,31.655-31.656,31.655H46.654C29.2,154.063,15,139.862,15,122.407V46.655C15,29.201,29.2,15,46.654,15h75.752
		c17.455,0,31.656,14.201,31.656,31.655V122.407z"/>
	<path d="M84.531,40.97c-24.021,0-43.563,19.542-43.563,43.563c0,24.02,19.542,43.561,43.563,43.561s43.563-19.541,43.563-43.561
		C128.094,60.512,108.552,40.97,84.531,40.97z M84.531,113.093c-15.749,0-28.563-12.812-28.563-28.561
		c0-15.75,12.813-28.563,28.563-28.563s28.563,12.813,28.563,28.563C113.094,100.281,100.28,113.093,84.531,113.093z"/>
	<path d="M129.921,28.251c-2.89,0-5.729,1.17-7.77,3.22c-2.051,2.04-3.23,4.88-3.23,7.78c0,2.891,1.18,5.73,3.23,7.78
		c2.04,2.04,4.88,3.22,7.77,3.22c2.9,0,5.73-1.18,7.78-3.22c2.05-2.05,3.22-4.89,3.22-7.78c0-2.9-1.17-5.74-3.22-7.78
		C135.661,29.421,132.821,28.251,129.921,28.251z"/>
</g>
</svg>


<svg 
style={{marginLeft:'10vw'}}
 width="1.2em" height="1.2em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M23.1117 4.49449C23.4296 2.94472 21.9074
 1.65683 20.4317 2.227L2.3425 9.21601C0.694517 9.85273 0.621087 12.1572 2.22518 12.8975L6.1645
  14.7157L8.03849 21.2746C8.13583 21.6153 8.40618 21.8791 8.74917 21.968C9.09216 22.0568 9.45658
   21.9576 9.70712 21.707L12.5938 18.8203L16.6375 21.8531C17.8113 22.7334 19.5019 22.0922 19.7967
    20.6549L23.1117 4.49449ZM3.0633 11.0816L21.1525 4.0926L17.8375 20.2531L13.1 16.6999C12.7019
     16.4013 12.1448 16.4409 11.7929 16.7928L10.5565 18.0292L10.928 15.9861L18.2071 8.70703C18.5614
      8.35278 18.5988 7.79106 18.2947 7.39293C17.9906 6.99479 17.4389 6.88312 17.0039 7.13168L6.95124
       12.876L3.0633 11.0816ZM8.17695 14.4791L8.78333 16.6015L9.01614 15.321C9.05253 15.1209 9.14908
        14.9366 9.29291 14.7928L11.5128 12.573L8.17695 14.4791Z" fill="#fff"/>
</svg>
</div>




            

        </motion.div>





        
        
     
  
        </div>)
}


export default Head