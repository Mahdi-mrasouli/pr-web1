import React from "react";
import './footer.css'
import gpt3Logo from '../../assets/ChatGPT.png'
const Footer = () => {
    return (
        <div className="gpt3__footer section__padding">
            <div className="gpt3__footer-heading">
                <h1 className="gradient__text">Do you want to step in to the future before others.</h1>

            </div>
            <div className="gpt3__footer-btn">
                <p>Request Early Access</p>
            </div>

            <div className="gpt3__footer-links">
                <div className="gpt3__footer-links_logo">
                    <img src={gpt3Logo} alt="gptLogo"  width={200}/>
                    <h3>CHAT GPT-3</h3>
                    <h3>Open AI</h3>
                </div>
                <div className="gpt3__footer-links-div">
                    <h4>Links</h4>
                    <p>Overons</p>
                    <p>Social Media</p>
                    <p>Counters</p>
                    <p>Contact</p>
                </div>
                <div className="gpt3__footer-links-div">
                    <h4>Company</h4>
                    <p>Terms & Cconditions</p>
                    <p>Privacy Policy</p>
                    <p>Contact</p>   
                </div>
                <div className="gpt3__footer-links-div">
                    <h4>Get in touch</h4>
                    <p>Iran - Tabriz - 120 Bo</p>
                    <p>085-1234567</p>
                    <p>info@payme.net</p>   
                </div>
            </div>

            <div className="gpt3__footer-copyright">
                <p>©️ 2023 GPT-3. All rights reserved.</p>
                <h5>Mahdi-Mr | 02.7.20</h5>
            </div>
        </div>
    )
}
export default Footer