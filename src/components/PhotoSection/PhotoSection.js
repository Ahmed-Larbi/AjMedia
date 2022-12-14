import React from 'react'
import "./Photo.css"
import vectorLeft from "../../assets/vectors/VectorLeft.png"
import vectorRight from "../../assets/vectors/VectorRight.png"
import arrow from "../../assets/arrow.png"
import Icon from '../Icon/Icon'
import {Row, Col, Container} from "react-bootstrap"

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
        <h1 className="photosection__information"> You can request any kind of shooting permission inside the emirate of Ajman online.</h1>
        </div>
        <div className='button'>
            <button id='locationButton'> View Locations </button>
            <button id='galleryButton'> View Gallery </button>
        </div>
        </div>
            
        <Container className='my-auto h-50 justify-content-center'>
        <Row>
          <Col lg={4} md={6} sm={6} xs={12} className="">
            <Row onMouseOver={() => handleMouseOver(0)} onMouseOut={() => handleMouseOut(0)} className="d-flex align-items-center">
              <Col className='d-flex align-items-center gap-3 smaller'>
            <span className='circle'>

              <Icon icon='media-footage' className="img" color="#fff"/>
              </span>
              <div className='circle__info'>

              <h3> Media Footage Approval</h3>
              <h3 className={isHovering[0].isHovered ? 'hover__effect' : 'not__hover__effect'}> View Details <span><img src={arrow} alt="" id="arrow__icon1" style={{ transform: 'rotate(180deg)'}}/></span> </h3>
              </div>
              </Col>
              
            </Row>
          </Col>
          <Col lg={4} md={6} sm={6} xs={12}>
            <Row onMouseOver={() => handleMouseOver(1)} onMouseOut={() => handleMouseOut(1)} className="d-flex align-items-center">
              <Col className='d-flex align-items-center gap-3 smaller'>
            <span className='circle'>

              <Icon icon='camera' className="img" color="#fff"/>
              </span>
              <div className='circle__info'>
              <h3> Photographer Permission Request</h3>
            <h3 className={isHovering[1].isHovered ? 'hover__effect' : 'not__hover__effect'}> View Details <span><img src={arrow} alt="" id="arrow__icon1" style={{ transform: 'rotate(180deg)'}}/></span> </h3>
              </div>
              </Col>
            </Row>

          </Col>
          <Col lg={4} md={12} sm={6} xs={12}>
            <Row onMouseOver={() => handleMouseOver(2)} onMouseOut={() => handleMouseOut(2)} className="d-flex align-items-center smaller"> 
              <Col className='d-flex align-items-center gap-3'>
              <span className='circle'>

              <Icon icon='speaker' className="img" color="#fff"/>
              </span>
              <div className='circle__info'>

              <h3> Request to Host Influencer/Speaker</h3>
              <h3 className={isHovering[2].isHovered ? 'hover__effect' : 'not__hover__effect'}> View Details <span><img src={arrow} alt="" id="arrow__icon1" style={{ transform: 'rotate(180deg)'}}/></span> </h3>
              </div>
              </Col>
            
            </Row>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default PhotoSection;