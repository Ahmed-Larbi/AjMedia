import React from 'react'
import "./Conf.css"
import EventCard from '../EventCard/EventCard';
import cards from '../../Events';
import Vector6 from "../../assets/vectors/Vector6.png"
import {motion} from "framer-motion"
import Icon from '../Icon/Icon'
import OwlCarousel from "react-owl-carousel"
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'

function Confernce() {
  const [startingIndex, setStartingIndex] = React.useState(0)
  const limit = parseInt( (cards.length / 2))
  const [limitIndex, setLimitIndex] = React.useState(limit)
  const [AnimationDirection, setAnimationDirection] = React.useState(0)

  const options = {
    loop: true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        767:{
            items:2
        },
        1000:{
            items:3
        }
    }
}
  // const variants = {
  //   initial: (AnimationDirection) => {
  //     return {

  //       x: AnimationDirection > 0 ? 200 : -200,
  //       opacity: 0
  //     }
  //   },
  //   animate: {
  //     x: 0,
  //     opacity: 1,
  //   },
  //   exit: AnimationDirection => {
  //     return {

  //       x: AnimationDirection > 0 ? -200 : 200,
  //       opacity: 0
  //     }
  //   }
  // }

  const goToNext = ()=> {
    setAnimationDirection(1)
    if( limitIndex < cards.length)
    {
      
      setStartingIndex(limitIndex)
      setLimitIndex((limitIndex * 2) + 1)
    }

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
        <header className='container__header'>
            <h1 className='container__title'> Conference & Events </h1>
            <div className='container__header2'>
            <div onClick={goToPrevious} className="arrow__circle">

                <Icon icon="arrow" size={12} id="left__arrow" color="#fff"/>
            </div>
                <div className='vector'></div>
                <div onClick={goToNext} className="arrow__circle" id="right__arrow">

                <Icon icon="arrow" size={12} style={{transform: 'rotate(180deg)'}} color="#fff"/>
                </div>
            </div>
            <img src={Vector6} alt="" className="conf__vector"></img>
        </header>
        <section>

        {/* <motion.div variants={variants} animate="animate" initial="initial" exit="exit" custom={AnimationDirection}  key={startingIndex} className='cards__container' style={{}}>

        {cards.slice(startingIndex,limitIndex).map( card => 
            <EventCard props={card}/>
        )}
        </motion.div> */}
        <OwlCarousel
        className='owl-theme'
        style={{maxWidth: '70%', marginLeft: '15%'}}
        {...options}
        >
          <EventCard props={cards[0]}/>
          <EventCard props={cards[1]}/>
          <EventCard props={cards[2]}/>
          <EventCard props={cards[3]}/>
          <EventCard props={cards[4]}/>
          <EventCard props={cards[5]}/>
        </OwlCarousel>
        </section>
    </div>
  )
}

export default Confernce;