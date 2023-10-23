import React from "react";
import './features.css'
import { Feature } from "../../components";

const featureData = [
    {
        title:'improving end distrusts instantly',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat justo a pellentesque blandit.'
    },
    {
        title:'Become the tended active',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat justo a pellentesque blandit.'
    },
    {
        title:'Message or am nothing',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat justo a pellentesque blandit.'
    },
    {
        title:'Really boy law country',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat justo a pellentesque blandit.'
    }
]

const Features = () => {
    return (
        <div className="gpt3__features section__padding" id="features">
            <div className="gpt3__features-heading">
                <h1 className="gradient__text">The Future is Now and You just Need to Realize It. Step into Future Today & Make it Happen.</h1>
                <p>Request Early Access to Get Started</p>
            </div>
            <div className="gpt__features-container">
                {featureData.map((item, index) => (
                    <Feature title={item.title} text={item.text} key={item.title + index} />
                ))}
                
            </div>
        </div>
    )
}
export default Features