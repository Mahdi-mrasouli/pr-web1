import React from "react";
import './whatGPT3.css';
import { Feature } from "../../components";
import aiRobot from "../../assets/ai-robot.svg"

const WhatGPT3 = () => {
    return (
        <div className="gpt3__whatgpt3 section__margin gradient__bg " id="wgpt3">
            <div className="gpt3__whatgpt3-feature">
                <Feature title={"What is GPT-3?"} text={"Generative Pre-trained Transformer 3 is a large language model released by OpenAI in 2020. Like its predecessor GPT-2, it is a decoder-only transformer model of deep neural network, which uses attention in place of previous recurrence- and convolution-based architectures."}/>
                <div data-aos="fade-down" data-aos-duration="1500">
                    <img src={aiRobot} alt=""  width={250}/>
                </div>
                
            </div>
            <div className="gpt3__whatgpt3-header">
                <h1 className="gradient__text">The possible are beyond your imagination</h1>
                <p>Explore The Library</p>
            </div>
            <div className="gpt3__whatgpt3-container">
                {/* <div data-aos="fade-down" data-aos-duration="1500"> */}
                    <Feature title={"Chatbots"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat justo a pellentesque blandit."}/>
                {/* </div> */}
                {/* <div data-aos="fade-down" data-aos-duration="1500"> */}
                    <Feature title={"Knowledgebase"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat justo a pellentesque blandit."}/>
                {/* </div> */}
                {/* <div data-aos="fade-down" data-aos-duration="1500"> */}
                    <Feature title={"Education"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat justo a pellentesque blandit."}/>
                {/* </div> */}
            </div>
        </div>
    )
}
export default WhatGPT3