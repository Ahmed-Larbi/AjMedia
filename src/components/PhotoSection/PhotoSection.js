import React from 'react'
import "./Photo.css"
import vectorLeft from "../../assets/vectors/VectorLeft.png"
import vectorRight from "../../assets/vectors/VectorRight.png"
import menu from "../../assets/buttons/menu.png"
import audioIcon from "../../assets/buttons/audio.png"
import cameraIcon from "../../assets/buttons/camera.png"

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
          <li>
            <span className='circle' onMouseOver={() => handleMouseOver(0)} onMouseOut={() => handleMouseOut(0)}>

            <img src={menu} alt=""/>
            </span>
            <h1> Media Footage Approval</h1>
            <div className={isHovering[0].isHovered ? 'showing' : 'not-showing'}> View Details {">"} </div>
          </li>
          <li>
            <span className='circle' onMouseOver={() => handleMouseOver(1)} onMouseOut={() => handleMouseOut(1)}>

            <img src={cameraIcon} alt=""/>
            </span>
            <h1> Photographer Permission Request</h1>
            <div className={isHovering[1].isHovered ? 'showing' : 'not-showing'}> View Details {">"} </div>
          </li>
          <li>
            <span className='circle' onMouseOver={() => handleMouseOver(2)} onMouseOut={() => handleMouseOut(2)}>

            <img src={audioIcon} alt=""/>
            </span>
            <h1> Request to Host Influencer/Speaker</h1>
            <div className={isHovering[2].isHovered ? 'showing' : 'not-showing'}> View Details {">"} </div>
          </li>
        </ul>
    </div>
  )
}

export default PhotoSection;