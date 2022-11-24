import React from 'react'
import ajmanGov from "../../assets/ajmangov.png"
import ajmanMedia from "../../assets/ajmanmedia.png"
import search from "../../assets/search.png"
import settings from "../../assets/setting.png"
import arabic from "../../assets/arabic.png"
import menu from "../../assets/menu.png"
import "./Header.css"

function Header() {
  return (
    <div className='header__container'>
    <div className='left__container'>
        <img src={ajmanGov} alt="" className='ajman__gov'/>
        <div className='vertical__line_header'></div>
        <img src={ajmanMedia} alt="" className='ajman__media'/>
    </div>
    <div className='right__container'>
    <img src={search} alt="" className='search'/>
    <img src={settings} alt="" className='settings'/>
    <img src={arabic} alt="" className='arabic'/>
    <img src={menu} alt="" className='menu'/>
    </div>
    </div>
  )
}

export default Header;