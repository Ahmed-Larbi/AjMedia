import React, { useEffect } from 'react'
import "./Intro.css"
import "../../fonts/FuturaCyrillicMedium.ttf"
import mainImage from "../../assets/mainimage.png"
import bannerImage1 from "../../assets/banner/11.jpg"
import bannerImage2 from "../../assets/banner/Group1023.jpg";
import Vector from "../../assets/vectors/Vector.png"
import Vector2 from "../../assets/vectors/Vector2.png"
import {AnimatePresence,motion} from "framer-motion"
// import Shader1 from "../../assets/Rectangle.png"
// import Shader2 from "../../assets/Rectangle2.png"

function Intro() {
  // eslint-disable-next-line no-unused-vars
  const [images, setImages] = React.useState([mainImage, bannerImage1,bannerImage2])
  const [currentImage, setCurrentImage] = React.useState(0)
 
  function change(){
    if(currentImage < images.length - 1)
    {
      setCurrentImage( currentImage + 1)

    }
    else {
      setCurrentImage(0)
    }
    changeCurrentButton()

  }
  function changeCurrentButton() {
    var dot = document.getElementsByClassName('dots')
    for(let x=0; x<images.length; x++)
    {
      if(x === currentImage)
      {
        
        dot[currentImage].style = `width: 34px;
        background: #A3C891;`
      }
      else{ 
        dot[x].style = 'overflow: revert';
      }
    }
    
  }
  
  
  // eslint-disable-next-line no-implied-eval 

  useEffect( ()=> {
    const interValid = setInterval( () => {
      change()
    }, 2970);
    return ()=> {
      clearInterval(interValid)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[currentImage])


  return (
    <div className='intro__container'>
      <img src={images[currentImage]} id="image1" alt="" className='animate'/>
        <h1 className='intro__text'>WELCOME TO <span><br></br>AJMAN RULER'S COURT<br></br> MEDIA OFFICE</span></h1>
        <img src={Vector} alt="" id="vector1"/>
        <img src={Vector2} alt="" id="vector2"/> 
        <div className='shader1'></div>
        <div className='shader2'></div>
        <AnimatePresence>

        <motion.span id='dot1' className='dots'></motion.span>
        <motion.span id='dot2' className='dots'></motion.span>
        <motion.span id='dot3' className='dots'></motion.span>
        </AnimatePresence>
    </div>
  )
}

export default Intro;