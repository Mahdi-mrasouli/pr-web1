// import Article from './components/articles/Article';
// import Brand from './components/brand/Brand';
// import CTA from './components/cta /CTA';
// import Feature from './components/feature/Feature';
// import Navbar from './components/navbar/Navbar';

import { Blog, Header, Footer, Features, WhatGPT3, Possibility } from './containers'
import { Brand, CTA, Navbar } from './components'

import './App.css';
import './index.css'

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}
 
export default App