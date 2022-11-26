import React from 'react'
import "./Media.css"
import line from "../../assets/buttons/line.png"
import news from '../../news'
import NewsCard from '../NewsCard/NewsCard'
import leftArrow from "../../assets/leftarrow.png"
import rightArrow from "../../assets/rightarrow.png"
import {motion} from "framer-motion"

function Media() {
    const [mediaChoice, setMediaChoice] = React.useState('News')
    const [direction, setDirection] = React.useState('11%')
    const [startingIndex, setStartingIndex] = React.useState(0)
    const limit = parseInt( (news.length / 2))
    const [limitIndex, setLimitIndex] = React.useState(limit)
    const [animationDirection, setAnimationDirection] = React.useState(0)
  
    const variants = {
      initial: (direction) => {
        return {
  
          x: animationDirection > 0 ? 200 : -200,
          opacity: 0
        }
      },
      animate: {
        x: 0,
        opacity: 1,
      },
      exit: animationDirection => {
        return {
  
          x: animationDirection > 0 ? -200 : 200,
          opacity: 0
        }
      }
    }
  
    const goToNext = ()=> {
        setAnimationDirection(1)
      if( limitIndex < news.length)
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
    var top = {
        '--left': direction
    }

    const changeButtonStyling = () => {
        var buttons= document.getElementsByClassName('buttons')
        for( let x= 0; x<buttons.length; x++)
        {
            buttons[x].style = 'color: #747272;';
            buttons[mediaChoice].style = `color: #A3C891;`
            
        }
        if(mediaChoice === 'All')
        {
            setDirection('1.0%')
        }
        else if(mediaChoice === 'Photos')
        {
            setDirection('23%')
        }
        else if(mediaChoice === 'Videos')
        {
            setDirection('35.5%')
        }
        else {
            setDirection('11%')
        }
        

    }

    React.useEffect( () => {
        changeButtonStyling()
    },[mediaChoice])
  return (
    <div className='media__container'>
        <div className='media__header'>
            <h1> Media Highlights</h1>
            <button> View all </button>
        </div>
        <main className='media__body'>
            <div className='headers'>
                <button id="All" className='buttons' onClick={() => setMediaChoice('All')}>All</button>
                <button id="News" className='buttons' onClick={() => setMediaChoice('News')}>News</button>
                <button id="Photos" className='buttons' onClick={() => setMediaChoice('Photos')}>Photos</button>
                <button id="Videos" className='buttons' onClick={() => setMediaChoice('Videos')}>Videos</button>

            </div>
            <div className='vertical__line' style={top}></div>
            <motion.div variants={variants} animate="animate" initial="initial" exit="exit" custom={direction}  key={startingIndex} className='media__cards'>
            {mediaChoice === 'News' ?
                  news.slice(startingIndex,limitIndex).map(neww =>
                  <NewsCard props={neww}/>
                  )
            : ''}
            </motion.div>
            <div className='media__footer'>
                <img src={leftArrow} alt="" onClick={goToPrevious}/>
                <div className='vector'></div>
                <img src={rightArrow} alt="" onClick={goToNext}/>
            </div>
        </main>
    </div>
  )
}

export default Media