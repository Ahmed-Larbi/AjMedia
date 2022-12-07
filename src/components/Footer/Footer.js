import React from 'react'
import "./Footer.css"
import vectorFooter from "../../assets/footer/vectorsFooter.png"
import ajmanGov from "../../assets/ajmangov.png"
import ajmanMedia from "../../assets/ajmanmedia.png"
import footerline from "../../assets/footer/footerline.png"

import Tooltip from "@mui/material/Tooltip"
import Icon from '../Icon/Icon'

function Footer() {
    const [socialLogos, setSocialLogos] = React.useState([
        {image: 'facebook', 'hint': 'Facebook', },{image: 'twitter', 'hint': 'Twitter',}
        ,{image: 'youtube', 'hint': 'Youtube',},{image: 'instagram', 'hint': 'Instagram',}
    ])

  return (
    <div className='footer__container'>
        <header className='footer__header'>
        <div className='footer__visitor'>
            <Icon icon="visitor-counter" size={20} alt=""/>
            <h1> Visitor Count </h1>
            <h3>2376182</h3>
        </div>
        <div className='footer__working'>
            <Icon icon="working-hours" size={20}/>
            <h1> Working Hours </h1>
            <h3>07:30 AM - 12:00 PM</h3>
        </div>
        <form className='form__signup'>
            <input placeholder='Sign to our Newsletter'/>

            <div className='footer__signup'>
                <h1>SignUp</h1>
                <Icon icon='newsletter-signup-icon' size={20} className='icon' alt=""/>
            </div>
        </form>
        </header>
        <div className='footer__vector'></div>
        <main className='footer__main'>
            <div className='footer__logo'>
                <img src={ajmanGov} alt="" className='ajman__gov'/>
                <div className='vertical__linefooter'></div>
                <img src={ajmanMedia} alt="" className='ajman__media'/>
            </div>
            <div className='footer__hyperlinks'>


                <div className='footer__about'>
                    <h1>
                    <a href="javascript:void()" className='main__headers'>

                    About The Website
                    </a>
                    </h1>
                    <h3> 
                    <a href="javascript:void()">

                    Privacy Policy
                    </a> 
                    </h3>
                    <h3> 
                    <a href="javascript:void()">

                    Terms & Conditions
                    </a> 
                    </h3>
                    <h3> <a href="javascript:void()">Disclaimer</a> </h3>
                    <h3> <a href="javascript:void()">Copyright</a> </h3>
                </div>
                <div className='footer__links'>
                    <h1><a href="javascript:void()" className='main__headers'>Quick Links</a></h1>
                    <h3> <a href="javascript:void()">FAQs</a> </h3>
                    <h3> <a href="javascript:void()">Contact Us</a> </h3>
                    <h3> <a href="javascript:void()">Sitemap</a> </h3>
                    <h3> <a href="javascript:void()">Careers</a> </h3>
                </div>
                <div className='footer__help'>
                    <h1 style={{color: '#FFFFFF'}}> __ </h1>
                    <h3> <a href="javascript:void()">Archive</a> </h3>
                    <h3> <a href="javascript:void()">Suggestions</a> </h3>
                    <h3> <a href="javascript:void()">Acessability Policy</a> </h3>
                    <h3> <a href="javascript:void()">Help</a> </h3>
                </div>
                
            </div>
        </main>
        <div className='footer__vector1'></div>
        <section className='footer'>
            <div className='footer__copyright'> © 2022 Ajman Ruler’s Court Media Office
    </div>
            <div className='footer__social'>
            {socialLogos.map( (social) => 
            <Tooltip title={social.hint} placement='top'>
            <div className="social__logo">
            <Icon icon={social.image} size={20}/>
            </div>
            </Tooltip>
            )}
            </div>
            <div className='footer__number'>
                <Icon icon="phone-icon" size={20} alt=""/>
                <h3> Toll-free 24/7 800 8877 </h3>
            </div>
        </section>

    </div>
  )
}

export default Footer