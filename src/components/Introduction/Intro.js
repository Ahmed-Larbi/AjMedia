import React, { useEffect } from 'react'
import "./Intro.css"
import mainImage from "../../assets/mainimage.png"
import bannerImage1 from "../../assets/banner/11.jpg"
import bannerImage2 from "../../assets/banner/Group1023.jpg";
import Vector from "../../assets/vectors/Vector.png"
import Vector2 from "../../assets/vectors/Vector2.png"
import { CSSTransition, TransitionGroup } from "react-transition-group";
// import Shader1 from "../../assets/Rectangle.png"
// import Shader2 from "../../assets/Rectangle2.png"

function Intro() {
  // eslint-disable-next-line no-unused-vars
  const [images, setImages] = React.useState([mainImage, bannerImage1,bannerImage2])
  const [currentImage, setCurrentImage] = React.useState(0)
  const [isHovering, setIsHovering] = React.useState([{id: 0, isHovered: false},{id: 1, isHovered: false},{id: 2, isHovered: false}])
 
  function change(){
    if(currentImage < images.length - 1)
    {
      setCurrentImage( currentImage + 1)

    }
    else {
      setCurrentImage(0)
    }
    const newState = isHovering.map(obj => {
      if (obj.id === currentImage) {
        return {...obj, isHovered: true};
      }

      // 👇️ otherwise return object as is
      return {...obj, isHovered: false};
    });
    console.log(newState)
    setIsHovering(newState)
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
      changeCurrentButton()
    }, 3000);
    return ()=> {
      clearInterval(interValid)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[currentImage])


  return (
    <div className='intro__container'>
      <img src={images[currentImage]} id="image1" alt="" className='animate'/>
        <img src={Vector} alt="" id="vector1"/>
        <img src={Vector2} alt="" id="vector2"/> 
        <div className='shader1'></div>
        <div className='shader2'></div>
        <h1 className='intro__text'>WELCOME TO <span><br></br>AJMAN RULER'S COURT<br></br> MEDIA OFFICE</span></h1>
        <span id='dot1' className='dots'></span>
        <span id='dot2' className='dots'></span>
        <span id='dot3' className='dots'></span>
    </div>
  )
}

export default Intro;