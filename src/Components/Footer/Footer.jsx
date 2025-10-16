import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
             <img className='footer-logo' src={assets.EEAT_logo} alt="" />
             <p>
               Eatoz brings together a rich variety of dishes crafted to satisfy every taste. From traditional favorites to global cuisines, each item is prepared with care using the freshest ingredients. Whether you’re craving spicy street food, comforting meals, or gourmet delights, our menu has something special for everyone. Explore, order, and enjoy restaurant-quality food delivered right to your doorstep with Eatoz.</p>
              <div className="footer-social-icons">
                <img src={assets.facebook_icon}alt="" />
                <img src={assets.instaS_logo}alt="" />
                <img src={assets.linkedin_icon}alt="" />
              </div>

            </div>
            <div className="footer-content-center">
                 <h2>COMPANY</h2>
                 <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                 </ul>
            </div>
            <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+91-333-222-7777</li>
                
                       <li >
                        <a href="mailto:contact@Eatoz.com">contact@Eatoz.com</a>
                        </li>
                      
                    </ul>
            </div>
        </div>
     <hr />
     <p className="footer-copyright">Copyright 2025 © Eatoz.com-All Right Reserved.</p>
    </div>
  )
}

export default Footer