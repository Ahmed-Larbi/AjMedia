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

function Footer() {
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
            <plaintext> Sign to our Newsletter</plaintext>
            <div className='footer__signup'>
                <h1>SignUp</h1>
                <img src={signUp} alt=""/>
            </div>
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
                <h1>About The Website</h1>
                <h3> Privacy Policy </h3>
                <h3> Terms & Conditions </h3>
                <h3> Disclaimer </h3>
                <h3> Copyright </h3>
            </div>
            <div className='footer__links'>
                <h1>Quick Links</h1>
                <h3> FAQs </h3>
                <h3> Contact Us </h3>
                <h3> Sitemap </h3>
                <h3> Careers </h3>
            </div>
            <div className='footer__help'>
                <h1 style={{color: '#FFFFFF'}}> __ </h1>
                <h3> Archive </h3>
                <h3> Suggestions </h3>
                <h3> Acessability Policy </h3>
                <h3> Help </h3>
            </div>
        </main>
        <img src={footerline} alt="" className='footer__vector'/>
        <footer className='footer'>
            <div className='footer__copyright'> © 2022 Ajman Ruler’s Court Media Office
</div>
            <div className='footer__social'>
            <img src={facebookLogo} alt=""/>
            <img src={twitterLogo} alt="" />
            <img src={youtubeLogo} alt="" />
            <img src={instagramLogo} alt="" />
            </div>
            <div className='footer__number'>
                <img src={phone} alt=""/>
                <h3> 800 111 11</h3>
            </div>
        </footer>
    </div>
  )
}

export default Footer