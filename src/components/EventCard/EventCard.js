import React from 'react'
import "./EventCard.css"
import locationIcon from "../../assets/locationicon.png"
import arrow from "../../assets/arrow.png"

function EventCard(props) {
  const [isHovering, setIsHovering] = React.useState(false);
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)
  const [translateName, setTranslateName] = React.useState(-170);

  React.useEffect( ()=> {
    function watchWidth() {
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener("resize", watchWidth)
  },)

  const handleMouseOver = () => {
    if(windowWidth < 560)
    {
      setTranslateName(-10)

    }
    else {
      setTranslateName(-170)
    }
    setIsHovering(true);
  }
  const handleMouseOut = () => {
    if(windowWidth < 560)
    {
      setTranslateName(-10)

    }
    else {
      setTranslateName(-170)
    }
    setIsHovering(false);
  }

  return (
    <div className='card__container' style={{ background: isHovering ? `linear-gradient(0.92deg, #26537B 20.79%, rgba(38, 83, 123, 0) 150.91%), url(${props.props.image})` : `linear-gradient(0.92deg, #26537B 7.79%, rgba(38, 83, 123, 0) 120.91%), url(${props.props.image})`,}} 
    onMouseOut={handleMouseOut} onMouseOver={handleMouseOver}>
        <div className='date__container'>
        <h1> {props.props.year}</h1>
        <div className='vector2'></div>
        <h1> {props.props.day}</h1>
        <h1>{props.props.month} </h1>
        </div>
        <h1 className='card__name' style={{'transform': isHovering ? `translateY(${translateName}%)` : '', transition: '0.25s'}}> {props.props.card_name}</h1>
        {isHovering && windowWidth > 560 &&
        <div className='hover__text'>

        <h1 className='card__location'> <span> <img src={locationIcon} alt="" id="location__icon"/></span>{props.props.location}</h1>
        <h1> Know More <span><img src={arrow} alt="" id="arrow__icon" style={{ transform: 'rotate(180deg)'}}/></span> </h1>
        </div>
        }
    </div>
  )
}

export default EventCard;