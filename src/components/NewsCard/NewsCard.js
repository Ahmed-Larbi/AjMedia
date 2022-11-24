import React from 'react'
import "./News.css"
import locationIcon from "../../assets/locationicon.png"
import arrow from "../../assets/arrow.png"

function NewsCard(props) {
  const [isHovering, setIsHovering] = React.useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  }
  const handleMouseOut = () => {
    setIsHovering(false);
  }

  return (
    <div className='card__container1' style={{ background: isHovering ? `linear-gradient(0.92deg, #26537B 20.79%, rgba(38, 83, 123, 0) 150.91%), url(${props.props.image})` : `linear-gradient(0.92deg, #26537B 7.79%, rgba(38, 83, 123, 0) 120.91%), url(${props.props.image})`,}} 
    onMouseOut={handleMouseOut} onMouseOver={handleMouseOver}>
       <h1 className={`date__card-${props.props.language}`} style={{'transform': isHovering ? 'translateY(-370%)' : '', transition: '0.25s'}}> {props.props.date}</h1>
        <h1 className='card__name1' style={{'transform': isHovering ? 'translateY(-170%)' : '', transition: '0.25s'}}> {props.props.title}</h1>
        {isHovering && 
        <div className='hover__text1'>
        {   props.props.language === 'arabic' ?
        <h1> اعرف المزيد <span><img src={arrow} alt="" id="arrow__icon" style={{ transform: 'rotate(180deg)'}}/></span> </h1>
            : <h1> Read More <span><img src={arrow} alt="" id="arrow__icon" style={{ transform: 'rotate(180deg)'}}/></span> </h1>
        }
        </div>
        }
    </div>
  )
}

export default NewsCard;