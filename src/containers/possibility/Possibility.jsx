import React from "react";
import possibilityImage from '../../assets/possibilityImage.png'
import './possibility.css'

const Possibility = () => {
    return (
        <div className="gpt3__possibility section__padding" id="possibility">
            <div className="gpt3__possibility-image">
                <div data-aos="fade-down-right" data-aos-duration='1500'>
                    <img src={possibilityImage}/>
                </div>
                
            </div>
            <div className="gpt3__possibility-content">
                <h4>Request Early Access to Get Started</h4>
                <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
                <p>Generative Pre-trained Transformer 3 is a large language model released by OpenAI in 2020. Like its predecessor GPT-2, it is a decoder-only transformer model of deep neural network, which uses attention in place of previous recurrence- and convolution-based architectures.</p>
                <h4>Request Early Access to Get Started</h4>
            </div>
        </div>
    )
}
export default Possibility