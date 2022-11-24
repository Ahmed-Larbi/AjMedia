import React from 'react'
import "./Photo.css"
import vectorLeft from "../../assets/vectors/VectorLeft.png"
import vectorRight from "../../assets/vectors/VectorRight.png"
import menu from "../../assets/buttons/menu.png"
import audioIcon from "../../assets/buttons/audio.png"
import cameraIcon from "../../assets/buttons/camera.png"

function PhotoSection() {
  const [isHovering, setIsHovering] = React.useState(false)
  const handleMouseOver = (index) => {
    
    var hidden = document.getElementsByClassName('hidden__details')
    hidden[index-1].style = `display: block`;
  }
  const handleMouseOut = (index) => {
   
    var hidden = document.getElementsByClassName('hidden__details')
    hidden[index-1].style = `display: none`;
  }
  return (
    <div className='photosection__container'>
        <img src={vectorLeft} className='vectorLeft' alt=""/>
        <img src={vectorRight} className='vectorRight' alt=""/>
            
        <h1 className='photosection__title'> Photo-Shooting & Filming in Ajman </h1>
        <plaintext> You can request any kind of shooting permission inside the emirate of Ajman online.</plaintext>
        <div className='button'>
            <button id='locationButton'> View Locations </button>
            <button id='galleryButton'> View Gallery </button>
        </div>
        <ul>
          <li>
            <span className='circle' onMouseOver={() => handleMouseOver(1)} onMouseOut={() => handleMouseOut(1)}>

            <img src={menu} alt=""/>
            </span>
            <h1> Media Footage Approval</h1>
            <div className='hidden__details' style={{ display: 'none'}}> View Details {">"} </div>
          </li>
          <li>
            <span className='circle' onMouseOver={() => handleMouseOver(2)} onMouseOut={() => handleMouseOut(2)}>

            <img src={cameraIcon} alt=""/>
            </span>
            <h1> Photographer Permission Request</h1>
            <div className='hidden__details' style={{ display: 'none'}}> View Details {">"} </div>
          </li>
          <li>
            <span className='circle' onMouseOver={() => handleMouseOver(3)} onMouseOut={() => handleMouseOut(3)}>

            <img src={audioIcon} alt=""/>
            </span>
            <h1> Request to Host Influencer/Speaker</h1>
            <div className='hidden__details' style={{ display: 'none'}}> View Details {">"}</div>
          </li>
        </ul>
    </div>
  )
}

export default PhotoSection;