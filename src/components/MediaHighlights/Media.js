import React from 'react'
import "./Media.css"
import line from "../../assets/buttons/line.png"
import news from '../../news'
import NewsCard from '../NewsCard/NewsCard'
import leftArrow from "../../assets/leftarrow.png"
import rightArrow from "../../assets/rightarrow.png"

function Media() {
  return (
    <div className='media__container'>
        <div className='media__header'>
            <h1> Media Highlights</h1>
            <button> View all </button>
        </div>
        <main className='media__body'>
            <div className='headers'>
                <h1>All</h1>
                <h1>News</h1>
                <h1>Photos</h1>
                <h1>Videos</h1>

            </div>
            <img src={line} alt="" className='vertical__line'/>
            <div className='media__cards'>
                  {news.map(neww =>
                  <NewsCard props={neww}/>
                  )}
            </div>
            <div className='media__footer'>
                <img src={leftArrow} alt=""/>
                <div className='vector'></div>
                <img src={rightArrow} alt=""/>
            </div>
        </main>
    </div>
  )
}

export default Media