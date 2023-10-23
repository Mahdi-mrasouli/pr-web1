import React from "react";
import people from '../../assets/poeple.svg'
import ai from '../../assets/aipic2.svg'

import './header.css'
const Header = () => {
    return (
        <div className="gpt3__header section__padding" id="home">
            <div className="gpt3__header-content">
                <h1 className="gradient__text">Let's Build Somthing amazing with GPT-3 openAI</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro ab quos deserunt impedit aliquam distinctio saepe totam perferendis sint suscipit!</p>
                <div className="gpt3__header-content__input">
                    <input type="email" placeholder="Your Email Address..."/>
                    <button type="button">Get Started</button>
                </div>
                <div className="gpt3__header_content__people">
                    <img src={people} alt="people"/>
                    <p>2000 people requested access a visit in last 24 hours.</p>
                </div>
                
            </div>
            <div className="gpt3__header-image">
                <img src={ai} alt="aipicture"/>
            </div>
        </div>
    )
}
export default Header