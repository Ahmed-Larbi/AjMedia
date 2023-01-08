import React, {useState} from 'react'
import ajmanGov from "../../assets/ajmangov.png"
import ajmanMedia from "../../assets/ajmanmedia.png"
import search from "../../assets/search.png"
import settings from "../../assets/setting.png"
import menu from "../../assets/menu.png"
import "./Header.css"
import Icon from '../Icon/Icon'
import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from 'react-pro-sidebar';

function Header() {
  const [expanded, setExpanded] = useState(false)
  const { collapseSidebar } = useProSidebar(false);

  return (
    <div className='header__container'>
    <div className='left__container'>
        <img src={ajmanGov} alt="" className='ajman__gov'/>
        <div className='vertical__line_header'></div>
        <img src={ajmanMedia} alt="" className='ajman__media'/>
    </div>
      <div className='right__container'>
        <Icon icon="search" size={20} alt="" className='icons' color="#797977"/>
        <Icon icon="settings" size={20} className='icons' color="#797977"/>
        <h1 className='arabic'> عربي </h1>
        <div onClick={() => collapseSidebar()}>
        {expanded ? 
        <MenuItem onClick={() => collapseSidebar()}> X </MenuItem>
        :
        <Icon icon="menu"  size={20} alt="" className='icons' color="#797977"/>
        }
        </div>
        </div>
      <Sidebar style={{height: '100vh', position: 'absolute'}} collapsedWidth='0px' className='sidebar'>
          <Menu>
            <SubMenu label="Charts">
              <MenuItem> Pie charts </MenuItem>
              <MenuItem> Line charts </MenuItem>
            </SubMenu>
            <MenuItem> Documentation </MenuItem>
            <MenuItem> Calendar </MenuItem>

          </Menu>
        </Sidebar>
    </div>
  )
}

export default Header;