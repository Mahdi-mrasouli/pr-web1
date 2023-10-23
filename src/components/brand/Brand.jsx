import React from 'react';
import {google, slack, atlassian, dropbox, shopify} from './imports';
import './brand.css';
//<FontAwesomeIcon icon="fa-brands fa-shopify" />

const Brand = () => {
  return (
    <div className='gpt3__brand section__padding'>
      <div>
        <i className=' fa-brands fa-google'></i>
        <h3>Google</h3>
        {/* <img src={slack} alt="slack" /> */}
      </div>

      <div>
        <i className=' fa-brands fa-slack'></i>
        <h3>Slack</h3>
        {/* <img src={atlassian} alt="atlasian" /> */}
      </div>

      <div> 
        {/* <FontAwesomeIcon icon="fa-brands fa-shopify" /> */}
        <i className=' fa-brands fa-shopify'></i>
        <h3>Shopify</h3>
        {/* <img src={google} alt="google" /> */}
      </div>

      <div>
        <i className=' fa-brands fa-atlassian'></i>
        <h3>Atlassian</h3>
        {/* <img src={shopify} alt="shopify" /> */}
      </div>

      <div>
        <i className=' fa-brands fa-dropbox'></i>
        <h3>Dropbox</h3>
        {/* <img src={dropbox} alt="dropbox" /> */}
      </div>
      
    </div>
    
  )
}

export default Brand