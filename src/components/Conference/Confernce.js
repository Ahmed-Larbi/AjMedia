import React from 'react'
import "./Conf.css"
import leftArrow from "../../assets/leftarrow.png"
import rightArrow from "../../assets/rightarrow.png"
// import vector from "../../assets/vectors/Vector3.png";
import EventCard from '../EventCard/EventCard';
import cards from '../../Events';
import Vector6 from "../../assets/vectors/Vector6.png"
import {motion} from "framer-motion"

function Confernce() {
  const [startingIndex, setStartingIndex] = React.useState(0)
  const limit = parseInt( (cards.length / 2))
  const [limitIndex, setLimitIndex] = React.useState(limit)
  const [AnimationDirection, setAnimationDirection] = React.useState(0)

  const variants = {
    initial: (AnimationDirection) => {
      return {

        x: AnimationDirection > 0 ? 200 : -200,
        opacity: 0
      }
    },
    animate: {
      x: 0,
      opacity: 1,
    },
    exit: AnimationDirection => {
      return {

        x: AnimationDirection > 0 ? -200 : 200,
        opacity: 0
      }
    }
  }

  const goToNext = ()=> {
    setAnimationDirection(1)
    if( limitIndex < cards.length)
    {
      
      setStartingIndex(limitIndex)
      setLimitIndex((limitIndex * 2) + 1)
    }
    console.log(startingIndex, limitIndex)

  }

  const goToPrevious = ()=> {
    setAnimationDirection(-1)
    if(startingIndex > 0)
    {
      setStartingIndex(0)
      setLimitIndex(parseInt((limitIndex / 2)))
    }
  }
  return (
    <div className='confernece__container'>
        <div className='container__header'>
            <h1 className='container__title'> Conference & Events </h1>
            <div className='container__header2'>
                <img src={leftArrow} alt="" onClick={goToPrevious}/>
                <div className='vector'></div>
                <img src={rightArrow} alt="" onClick={goToNext}/>
            </div>
            <img src={Vector6} alt="" className="conf__vector"></img>
        </div>

        <motion.div variants={variants} animate="animate" initial="initial" exit="exit" custom={AnimationDirection}  key={startingIndex} className='cards__container' style={{}}>

        {cards.slice(startingIndex,limitIndex).map( card => 
            <EventCard props={card}/>
        )}
        </motion.div>
    </div>
  )
}

export default Confernce;