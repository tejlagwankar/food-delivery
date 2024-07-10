import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
    return (
        <div>
            <div className="footer" id="footer">
                <div className="footer-content">
                    <div className="footer-content-left">
                        <img src={assets.logo} alt="" />
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero autem sit accusantium veritatis, exercitationem consequatur at? Est velit voluptate maiores, inventore voluptas pariatur totam quos deleniti at eaque, consectetur cumque?</p>
                        <div className="footer-social-icons">
                            <img src={assets.facebook_icon} alt="" /><img src={assets.twitter_icon} alt="" /><img src={assets.linkedin_icon} alt="" />
                        </div>
                    </div>
                    <div className="footer-content-center">
                        <h2>COMPANY</h2>
                        <ul>
                            <li>Home</li>
                            <li>About us</li>
                            <li>Delivery</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>
                    <div className="footer-content-right">
                        <h2>GET IN TOUCH</h2>
                        <ul>
                            <li>+91-12345568</li>
                            <li>contact@grubgo.com</li>
                        </ul>
                    </div>
                </div>
                <hr />
                <p className="footer-copyright">Copyright 2024 © GrubGo.com - All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default Footer
