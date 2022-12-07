import React, { useEffect } from 'react'
import "./Photos.css"
import arrow from "../../assets/arrow.png"

function Photo(props) {
  const [isHovering, setIsHovering] = React.useState(false);
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)
  const [translateName, setTranslateName] = React.useState(-120);
  const [translateDate, setTranslateDate] = React.useState(-500);

  useEffect( ()=> {
    function watchWidth() {
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener("resize", watchWidth)
  },)

  const handleMouseOver = () => {
    if(windowWidth < 560)
    {
      setTranslateName(-10)
      setTranslateDate(-50)

    }
    else {
      setTranslateName(-120)
      setTranslateDate(-500)
    }
    setIsHovering(true);
  }
  const handleMouseOut = () => {
    if(windowWidth < 560)
    {
      setTranslateName(-10)
      setTranslateDate(-50)

    }
    else {
      setTranslateName(-120)
      setTranslateDate(-500)
    }
    setIsHovering(false);
  }


  return (
    <div className='photo__card' style={{ background: isHovering ? `linear-gradient(0.92deg, #26537B 20.79%, rgba(38, 83, 123, 0) 150.91%), url(${props.props.image}) no-repeat center/100% 100% ` : `linear-gradient(0.92deg, #26537B 7.79%, rgba(38, 83, 123, 0) 120.91%), url(${props.props.image})  no-repeat center/100% 100% `}} 
    onMouseOut={handleMouseOut} onMouseOver={handleMouseOver}>
       <h1 className={`date__card-${props.props.language}`} style={{'transform': isHovering ? `translateY(${translateDate}%)` : '', transition: '0.25s'}}> {props.props.date}</h1>
        <h1 className='card__name1' style={{'transform': isHovering ? `translateY(${translateName}%)` : '', transition: '0.25s'}}> {props.props.title}</h1>
        {isHovering &&
        <div className='hover__text1'>
        {   props.props.language === 'arabic' ?
        <h1> Read More <span><img src={arrow} alt="" id="arrow__icon" style={{ transform: 'rotate(180deg)'}}/></span> </h1>
            : <h1> Read More <span><img src={arrow} alt="" id="arrow__icon" style={{ transform: 'rotate(180deg)'}}/></span> </h1>
        }
        </div>
        }
    </div>
  )
}

export default Photo;