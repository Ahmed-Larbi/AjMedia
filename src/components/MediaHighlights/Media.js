import React from 'react'
import "./Media.css"
import news from '../../Data/news'
import photos from '../../Data/photos'
import NewsCard from '../NewsCard/NewsCard'
import {motion} from "framer-motion"
import Photo from '../Photo/Photo'
import Icon from "../Icon/Icon"
import OwlCarousel from "react-owl-carousel"
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'

function Media() {
    const [mediaChoice, setMediaChoice] = React.useState('All')
    const [windowSize, setWindowSize] = React.useState(getWindowSize())
    const markerRef = React.useRef(null)
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

            <div className=''>
                  {mediaChoice === 'News' ?
                  <OwlCarousel
                    className='owl-theme'
                    style={{maxWidth: '70%', marginLeft: '15%','marginTop': '25px'}}
                    {...options}
                    navText={[
                      '<Icon icon="arrow" size={12} style={{transform: rotate(180deg)}} color="#fff"/>',
                      '<Icon icon="arrow" size={12} id="left__arrow" color="#fff"/>'
                    ]}
                    >
                      <NewsCard props={news[0]}/>
                      <NewsCard props={news[1]}/>
                      <NewsCard props={news[2]}/>
                      <NewsCard props={news[3]}/>
                      <NewsCard props={news[4]}/>
                      <NewsCard props={news[5]}/>
                    </OwlCarousel>

                  : mediaChoice === 'All' ? <OwlCarousel
                      className='owl-theme'
                      style={{maxWidth: '70%', marginLeft: '15%','marginTop': '25px'}}
                      {...options}
                      navText={[
                        '<Icon icon="arrow" size={12} style={{transform: rotate(180deg)}} color="#fff"/>',
                        '<Icon icon="arrow" size={12} id="left__arrow" color="#fff"/>'
                      ]}
                      >
                        <NewsCard props={news[0]}/>
                        <NewsCard props={news[1]}/>
                        <NewsCard props={news[2]}/>
                        <NewsCard props={news[3]}/>
                        <NewsCard props={news[4]}/>
                        <NewsCard props={news[5]}/>
                      </OwlCarousel>

                  : mediaChoice === 'Photos' ?
                  <OwlCarousel
                    className='owl-theme'
                    style={{maxWidth: '70%', marginLeft: '15%','marginTop': '25px'}}
                    {...options}
                    navText={[
                      '<Icon icon="arrow" size={12} style={{transform: rotate(180deg)}} color="#fff"/>',
                      '<Icon icon="arrow" size={12} id="left__arrow" color="#fff"/>'
                    ]}
                    >
                      <NewsCard props={photos[0]}/>
                      <NewsCard props={photos[1]}/>
                      <NewsCard props={photos[2]}/>
                      <NewsCard props={photos[3]}/>
                      <NewsCard props={photos[4]}/>
                      <NewsCard props={photos[5]}/>
                    </OwlCarousel>
                  : ''}
            </div>
            {/* <div className='media__footer'>
            <div onClick={goToPrevious} className="arrow__circle">

                <Icon icon="arrow" size={12} id="left__arrow" color="#fff"/>
                </div>
                <div className='vector'></div>
                <div onClick={goToNext} className="arrow__circle" id="right__arrow">

                <Icon icon="arrow" size={12} style={{transform: 'rotate(180deg)'}} color="#fff"/>
                </div>
            </div> */}
        </main>
    </div>
  )
}

export default Media