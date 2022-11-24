import React from 'react'
import "./Conf.css"
import leftArrow from "../../assets/leftarrow.png"
import rightArrow from "../../assets/rightarrow.png"
// import vector from "../../assets/vectors/Vector3.png";
import EventCard from '../EventCard/EventCard';
import cards from '../../cards';
import Vector6 from "../../assets/vectors/Vector6.png"

function Confernce() {
  return (
    <div className='confernece__container'>
        <div className='container__header'>
            <h1 className='container__title'> Conference & Events </h1>
            <img src={Vector6} alt="" className="conf__vector"></img>
            <div className='container__header2'>
                <img src={leftArrow} alt=""/>
                <div className='vector'>|</div>
                <img src={rightArrow} alt=""/>
            </div>
        </div>
        <div className='cards__container'>

        {cards.map( card => 
            <EventCard props={card}/>
        )}
        </div>
    </div>
  )
}

export default Confernce;