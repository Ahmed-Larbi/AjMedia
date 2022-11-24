import React from 'react'
import "./Footer.css"
import userLogo from "../../assets/footer/user.png"
import clock from "../../assets/footer/clock.png"
import vectorFooter from "../../assets/footer/vectorsFooter.png"
import signUp from "../../assets/footer/signup.png"
import ajmanGov from "../../assets/ajmangov.png"
import ajmanMedia from "../../assets/ajmanmedia.png"
import footerline from "../../assets/footer/footerline.png"
import facebookLogo from "../../assets/footer/facebook.png"
import twitterLogo from "../../assets/footer/twitter.png"
import youtubeLogo from "../../assets/footer/youtube.png"
import instagramLogo from "../../assets/footer/instagram.png"
import phone from "../../assets/footer/telephone.png"
import Tooltip from "@mui/material/Tooltip"

function Footer() {
    const [socialLogos, setSocialLogos] = React.useState([
        {image: facebookLogo, 'hint': 'Facebook', },{image: twitterLogo, 'hint': 'Twitter',}
        ,{image: youtubeLogo, 'hint': 'Youtube',},{image: instagramLogo, 'hint': 'Instagram',}
    ])

  return (
    <div className='footer__container'>
        <header className='footer__header'>
        <div className='footer__visitor'>
            <img src={userLogo} alt=""/>
            <h1> Visitor Count </h1>
            <h3>2376182</h3>
        </div>
        <div className='footer__working'>
            <img src={clock} alt=""/>
            <h1> Working Hours </h1>
            <h3>07:30 AM - 12:00 PM</h3>
        </div>
        <form className='form__signup'>
            <input placeholder='Sign to our Newsletter'/>

            <div className='footer__signup'>
                <h1>SignUp</h1>
                <img src={signUp} alt=""/>
            </div>
        </form>
        </header>
        <img src={vectorFooter} alt="" className='footer__vector'/>
        <main className='footer__main'>
            {/* TODO: Add Gov logo with Verticalline, 
                    Add about website, quicklinks and arvhice */}
            <div className='footer__logo'>
                <img src={ajmanGov} alt="" className='ajman__gov'/>
                <div className='vertical__linefooter'></div>
                <img src={ajmanMedia} alt="" className='ajman__media'/>
            </div>
            <div className='footer__about'>
                <h1>
                <a href="javascript:void()">

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
                <h1><a href="javascript:void()">Quick Links</a></h1>
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
        </main>
        <img src={footerline} alt="" className='footer__vector'/>
        <footer className='footer'>
            <div className='footer__copyright'> © 2022 Ajman Ruler’s Court Media Office
</div>
            <div className='footer__social'>
            {socialLogos.map( (social) => 
            <Tooltip title={`${social.hint}`} placement='top'>

            <img src={social.image} alt="" className="social__logo"/>
            </Tooltip>
            )}
            </div>
            <div className='footer__number'>
                <img src={phone} alt=""/>
                <h3> Toll-free 24/7 800 8877 </h3>
            </div>
        </footer>
    </div>
  )
}

export default Footer