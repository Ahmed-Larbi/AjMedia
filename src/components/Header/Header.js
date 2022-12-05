import React from 'react'
import ajmanGov from "../../assets/ajmangov.png"
import ajmanMedia from "../../assets/ajmanmedia.png"
import search from "../../assets/search.png"
import settings from "../../assets/setting.png"
import menu from "../../assets/menu.png"
import "./Header.css"
import Icon from '../Icon/Icon'

function Header() {
  return (
    <div className='header__container'>
    <div className='left__container'>
        <img src={ajmanGov} alt="" className='ajman__gov'/>
        <div className='vertical__line_header'></div>
        <img src={ajmanMedia} alt="" className='ajman__media'/>
    </div>
    <div className='right__container'>
    <Icon icon="search" size={20} alt="" className='search' color="#797977"/>
    <Icon icon="settings" size={20} className='settings' color="#797977"/>
    <h1 className='arabic'> عربي </h1>
    <Icon icon="menu"  size={20} alt="" className='menu' color="#797977"/>
    </div>
    </div>
  )
}

export default Header;