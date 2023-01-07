import React from 'react'
import "./Footer.css"
import vectorFooter from "../../assets/footer/vectorsFooter.png"
import ajmanGov from "../../assets/ajmangov.png"
import ajmanMedia from "../../assets/ajmanmedia.png"
import footerline from "../../assets/footer/footerline.png"
import {Container, Col, Row} from "react-bootstrap"

import Tooltip from "@mui/material/Tooltip"
import Icon from '../Icon/Icon'

function Footer() {
    const [socialLogos, setSocialLogos] = React.useState([
        {image: 'facebook', 'hint': 'Facebook', },{image: 'twitter', 'hint': 'Twitter',}
        ,{image: 'youtube', 'hint': 'Youtube',},{image: 'instagram', 'hint': 'Instagram',}
    ])

  return (
    <Container className="footer__container pt-4 " style={{minWidth: '100%',}}>
        <Row>
            <Col lg={4} md={4} sm={6}  className='d-flex footer__visitor d-flex justify-content-center '>
                <Icon icon="visitor-counter" size={20} alt="" color={'#747272'}/>
                <h1> Visitor Count </h1>
                <h3>2376182</h3>
            </Col>
            <Col lg={4} md={3} sm={6} className='d-flex footer__working d-flex justify-content-center '>
                <Icon icon="working-hours" size={20} color={'#747272'}/>
                <h1> Working Hours </h1>
                <h3>07:30 AM - 12:00 PM</h3>
            </Col>
            <Col lg={4} md={3} sm={6} className='form__signup    d-flex justify-content-center '>
            <input placeholder='Sign to our Newsletter'/>

                <div className='footer__signup'>
                    <h1>SignUp</h1>
                    <Icon icon='newsletter-signup-icon' size={20} className='icon' alt=""/>
                </div>
            </Col>
        </Row>
        <Row>
        <Col lg={12}>
        <div className='footer__vector'></div>  
        </Col>
        </Row>
        <Row className='footer__main'>
            <Col lg={3} className="footer__logo d-flex justify-content-center ">

                <img src={ajmanGov} alt="" className='ajman__gov'/>
                <div className='vertical__linefooter'></div>
                <img src={ajmanMedia} alt="" className='ajman__media'/>

            </Col>
            <Col lg={3} className='footer__about'>
                     <h1>
                     <a href="#" className='main__headers'>

                     About The Website
                     </a>
                     </h1>
                     <h3> 
                     <a href="#">

                    Privacy Policy
                    </a> 
                    </h3>
                  <h3> 
                 <a href="#">

                 Terms & Conditions
                </a> 
                 </h3>
                 <h3> <a href="#">Disclaimer</a> </h3>
                 <h3> <a href="#">Copyright</a> </h3>
            </Col>
            <Col className='footer__links d-flex justify-content-center' lg={3}>
            
                     <h1><a href="#" className='main__headers'>Quick Links</a></h1>
                     <h3> <a href="#">FAQs</a> </h3>
                     <h3> <a href="#">Contact Us</a> </h3>
                     <h3> <a href="#">Sitemap</a> </h3>
                     <h3> <a href="#">Careers</a> </h3>
                 
            </Col>
            <Col lg={3} className='footer__help'>
            
                <h1 style={{color: '#FFFFFF'}}> __ </h1>
                 <h3> <a href="#">Archive</a> </h3>
                 <h3> <a href="#">Suggestions</a> </h3>
                <h3> <a href="#">Acessability Policy</a> </h3>
               <h3> <a href="#">Help</a> </h3>

            </Col>
        </Row>
        <Row>
            <Col className=''>
                <div className='footer__vector'></div>
            </Col>
        </Row>
        <Row className='footer'>
            <Col lg={4} className="d-flex justify-content-center footer__copyright">
            © 2022 Ajman Ruler’s Court Media Office
            </Col>
            <Col lg={4} className="d-flex justify-content-center">
            <div className='footer__social'>
             {socialLogos.map( (social) => 
             <Tooltip title={social.hint} placement='top'>
             <div className="social__logo">
             <Icon icon={social.image} size={20}/>
             </div>
             </Tooltip>
             )}
             </div>
            </Col>
            <Col className='footer__number d-flex justify-content-center'>
                <Icon icon="phone-icon" size={20} alt=""/>
                <h3> Toll-free 24/7 800 8877 </h3>
            </Col>
        </Row>
    </Container>
    // <div className='footer__container'>
    //     <header className='footer__header'>
    //     <div className='footer__visitor'>
    //         <Icon icon="visitor-counter" size={20} alt="" color={'#747272'}/>
    //         <h1> Visitor Count </h1>
    //         <h3>2376182</h3>
    //     </div>
    //     <div className='footer__working'>
            // <Icon icon="working-hours" size={20} color={'#747272'}/>
            // <h1> Working Hours </h1>
            // <h3>07:30 AM - 12:00 PM</h3>
    //     </div>
    //     <form className='form__signup'>
    //         <input placeholder='Sign to our Newsletter'/>

    //         <div className='footer__signup'>
    //             <h1>SignUp</h1>
    //             <Icon icon='newsletter-signup-icon' size={20} className='icon' alt=""/>
    //         </div>
    //     </form>
    //     </header>
    //     <div className='footer__vector'></div>
    //     <main className='footer__main'>
    //         <div className='footer__logo'>
    //             <img src={ajmanGov} alt="" className='ajman__gov'/>
    //             <div className='vertical__linefooter'></div>
    //             <img src={ajmanMedia} alt="" className='ajman__media'/>
    //         </div>
    //         <div className='footer__hyperlinks'>


    //             <div className='footer__about'>
    //                 <h1>
    //                 <a href="#" className='main__headers'>

    //                 About The Website
    //                 </a>
    //                 </h1>
    //                 <h3> 
    //                 <a href="#">

    //                 Privacy Policy
    //                 </a> 
    //                 </h3>
    //                 <h3> 
    //                 <a href="#">

    //                 Terms & Conditions
    //                 </a> 
    //                 </h3>
    //                 <h3> <a href="#">Disclaimer</a> </h3>
    //                 <h3> <a href="#">Copyright</a> </h3>
    //             </div>
    //             <div className='footer__links'>
    //                 <h1><a href="#" className='main__headers'>Quick Links</a></h1>
    //                 <h3> <a href="#">FAQs</a> </h3>
    //                 <h3> <a href="#">Contact Us</a> </h3>
    //                 <h3> <a href="#">Sitemap</a> </h3>
    //                 <h3> <a href="#">Careers</a> </h3>
    //             </div>
    //             <div className='footer__help'>
    //                 <h1 style={{color: '#FFFFFF'}}> __ </h1>
    //                 <h3> <a href="#">Archive</a> </h3>
    //                 <h3> <a href="#">Suggestions</a> </h3>
    //                 <h3> <a href="#">Acessability Policy</a> </h3>
    //                 <h3> <a href="#">Help</a> </h3>
    //             </div>
                
    //         </div>
    //     </main>
    //     <div className='footer__vector1'></div>
    //     <section className='footer'>
    //         <div className='footer__copyright'> © 2022 Ajman Ruler’s Court Media Office
    // </div>
    //         <div className='footer__social'>
    //         {socialLogos.map( (social) => 
    //         <Tooltip title={social.hint} placement='top'>
    //         <div className="social__logo">
    //         <Icon icon={social.image} size={20}/>
    //         </div>
    //         </Tooltip>
    //         )}
    //         </div>
    //         <div className='footer__number'>
    //             <Icon icon="phone-icon" size={20} alt=""/>
    //             <h3> Toll-free 24/7 800 8877 </h3>
    //         </div>
    //     </section>

    // </div>
  )
}

export default Footer