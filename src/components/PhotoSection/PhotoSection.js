import React from 'react'
import "./Photo.css"
import vectorLeft from "../../assets/vectors/VectorLeft.png"
import vectorRight from "../../assets/vectors/VectorRight.png"
import menu from "../../assets/buttons/menu.png"
import audioIcon from "../../assets/buttons/audio.png"
import cameraIcon from "../../assets/buttons/camera.png"
import arrow from "../../assets/arrow.png"

function PhotoSection() {
  const [isHovering, setIsHovering] = React.useState([{id: 0, isHovered: false},{id: 1, isHovered: false},{id: 2, isHovered: false}])
  const handleMouseOver = (index) => {
    const newState = isHovering.map(obj => {
      // 👇️ if id equals 2, update country property
      if (obj.id === index) {
        return {...obj, isHovered: true};
      }

      // 👇️ otherwise return object as is
      return obj;
    });
    setIsHovering(newState)
  }
  const handleMouseOut = (index) => {
    const newState = isHovering.map(obj => {
      // 👇️ if id equals 2, update country property
      if (obj.id === index) {
        return {...obj, isHovered: false};
      }

      // 👇️ otherwise return object as is
      return obj;
    });
    setIsHovering(newState)
  }

  return (
    <div className='photosection__container'>
        <img src={vectorLeft} className='vectorLeft' alt=""/>
        <img src={vectorRight} className='vectorRight' alt=""/>

        <div className='photosection__headers'>
        <div className='wrapper'>

        <h1 className='photosection__title'> Photo-Shooting & Filming in Ajman </h1>
        <plaintext className="photosection__information"> You can request any kind of shooting permission inside the emirate of Ajman online.</plaintext>
        </div>
        <div className='button'>
            <button id='locationButton'> View Locations </button>
            <button id='galleryButton'> View Gallery </button>
        </div>
        </div>
            
        <ul>
          <li onMouseOver={() => handleMouseOver(0)} onMouseOut={() => handleMouseOut(0)}>
            <span className='circle'>

            <img src={menu} alt=""/>
            </span>
            <div className='circle__info'>

            <h1> Media Footage Approval</h1>
            <h3 className={isHovering[0].isHovered ? 'hover__effect' : 'not__hover__effect'}> View Details <span><img src={arrow} alt="" id="arrow__icon1" style={{ transform: 'rotate(180deg)'}}/></span> </h3>
            </div>
          </li>
          <li onMouseOver={() => handleMouseOver(1)} onMouseOut={() => handleMouseOut(1)}>
            <span className='circle'>

            <img src={cameraIcon} alt=""/>
            </span>
            <div className='circle__info'>

            <h1> Photographer Permission Request</h1>
            <h3 className={isHovering[1].isHovered ? 'hover__effect' : 'not__hover__effect'}> View Details <span><img src={arrow} alt="" id="arrow__icon1" style={{ transform: 'rotate(180deg)'}}/></span> </h3>
            </div>
          </li>
          <li onMouseOver={() => handleMouseOver(2)} onMouseOut={() => handleMouseOut(2)} >
            <span className='circle'>

            <img src={audioIcon} alt=""/>
            </span>
            <div className='circle__info'>

            <h1> Request to Host Influencer/Speaker</h1>
            <h3 className={isHovering[2].isHovered ? 'hover__effect' : 'not__hover__effect'}> View Details <span><img src={arrow} alt="" id="arrow__icon1" style={{ transform: 'rotate(180deg)'}}/></span> </h3>
            </div>
          </li>
        </ul>
    </div>
  )
}

export default PhotoSection;