import React, { useEffect } from 'react'
import "./Intro.css"
import mainImage from "../../assets/mainimage.png"
import bannerImage1 from "../../assets/banner/11.jpg"
import bannerImage2 from "../../assets/banner/Group1023.jpg";
import Vector from "../../assets/vectors/Vector.png"
import Vector2 from "../../assets/vectors/Vector2.png"
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
  }
  
  
  // eslint-disable-next-line no-implied-eval 

  useEffect( ()=> {
    const interValid = setInterval( () => {
      change()
    }, 5000);
    return ()=> {
      clearInterval(interValid)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[currentImage])


  return (
    <div className='intro__container'>
      <img src={images[currentImage]} alt="" id="bannerImage"/>
      <img src={Vector} alt=""/>
      <img src={Vector2} alt=""/> 
      <div className='shader1'></div>
      <div className='shader2'></div>
      <h1 className='intro__text'>WELCOME TO <span><br></br>AJMAN RULER'S COURT<br></br> MEDIA OFFICE</span></h1>
      <span className='dot1'></span>
      <span className='dot2'></span>
      <span className='dot3'></span>
    </div>
  )
}

export default Intro;