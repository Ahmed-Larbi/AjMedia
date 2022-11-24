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
 
  function change(){
    if(currentImage < images.length - 1)
    {
      setCurrentImage( currentImage + 1)

    }
    else {
      setCurrentImage(0)
    }
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
      var bannerImage = document.getElementById('bannerImage')
      bannerImage.style.transition= 'opacity 0 2s linear;';
    }, 3000);
    return ()=> {
      clearInterval(interValid)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[currentImage])


  return (
    <div className='intro__container'>
    <TransitionGroup>
          <CSSTransition
            timeout={1000}
            classNames="messageout"
          >
            <img src={images[currentImage]} id="bannerImage" alt=""/>
          </CSSTransition>
        </TransitionGroup>
      <img src={Vector} alt=""/>
      <img src={Vector2} alt=""/> 
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