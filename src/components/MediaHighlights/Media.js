import React from 'react'
import "./Media.css"
import news from '../../Data/news'
import photos from '../../Data/photos'
import NewsCard from '../NewsCard/NewsCard'
import leftArrow from "../../assets/leftarrow.png"
import rightArrow from "../../assets/rightarrow.png"
import {motion} from "framer-motion"
import Photo from '../Photo/Photo'

function Media() {
    const [mediaChoice, setMediaChoice] = React.useState('All')
    const [windowSize, setWindowSize] = React.useState(getWindowSize())
    const markerRef = React.useRef(null)
    const [startingIndex, setStartingIndex] = React.useState(0)
    const limit = parseInt( (news.length / 2))
    const [limitIndex, setLimitIndex] = React.useState(limit)
    const [animationDirection, setAnimationDirection] = React.useState(0)
    const [extraLength, setExtraLength] = React.useState('0px');
    
    let marker;

  function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight}
  }
  function buttonHandler()
  {
    if(windowSize.innerWidth < 700)
    {
      let length = (window.innerWidth / 100) + 5
      setExtraLength(`${length}px`)
    }
  }

    React.useEffect( () => {
      changeButtonStyling()
      function handleWindowResize() {
        setWindowSize(getWindowSize())
      }

      window.addEventListener('resize', handleWindowResize);
      buttonHandler()
      return () => {
        window.removeEventListener('resize', handleWindowResize)
      }
    },[mediaChoice])
    
    const handleClick = (e, name) =>
    {
      marker = markerRef.current;
      if(marker)
      {

        if(name === 'All')
        {
  
          marker.style.left = `calc((${e.target.getBoundingClientRect().left}px - 2.12879191059074vw - 15% - 1.0vw + ${extraLength})`;
        }
        else {
          marker.style.left = `calc((${e.target.getBoundingClientRect().left}px - 1.06439595529537vw - 13% - 2.0vw + ${extraLength})`;
        }
      }
      setMediaChoice(name)
    }
   
    const variants = {
      initial: (animationDirection) => {
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
    const changeButtonStyling = () => {
        var buttons= document.getElementsByClassName('buttons')
        for( let x= 0; x<buttons.length; x++)
        {
            buttons[x].style = 'color: #747272;';
            buttons[mediaChoice].style = `color: #A3C891;`
            
        }
    }

  return (
    <div className='media__container'>
        <div className='media__header'>
            <h1> Media Highlights</h1>
            <button> View all </button>
        </div>
        <main className='media__body'>
            <div className='headers'>
                <button id="All" className='buttons' onClick={(event) => handleClick(event,'All')}>All</button>
                <button id="News" className='buttons' onClick={(event) => handleClick(event,'News')}>News</button>
                <button id="Photos" className='buttons' onClick={(event) => handleClick(event,'Photos')}>Photos</button>
                <button id="Videos" className='buttons' onClick={(event) => handleClick(event,'Videos')}>Videos</button>

            </div>
            <div className='vertical__line'>
              <div className='arrow__indicator' ref={markerRef} id="marker">
              <div className='arrow__border_middle'></div>
                <div className='arrow__border__left'></div>
                <div className='arrow__border__right'></div>
              </div>
            </div>
            {/* style={top} */}

            <motion.div variants={variants} animate="animate" initial="initial" exit="exit" custom={animationDirection}  key={startingIndex} className='media__cards'>
                  {mediaChoice === 'News' ?
                  news.slice(startingIndex,limitIndex).map(neww =>
                  <NewsCard props={neww}/>)

                  : mediaChoice === 'All' ? news.slice(startingIndex,limitIndex).map(neww =>
                  <NewsCard props={neww}/> )

                  : mediaChoice === 'Photos' ?
                  photos.slice(startingIndex,limitIndex).map(photo =>
                  <Photo props={photo}/> ) 
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