import React from 'react'
import './About.css'
import { detail } from '../../asset/images'
const About = () => {
  return (
    <div className='about'>
      <div className='personal-info'>
        <h1>Hello,</h1>
        <h3>I'm <span>Prince</span> <br /> Web Designer, Electrical and <br />Electroinc Engineer </h3> 
        
        <p>Welcome to my website! I am a skilled web developer and a professional electrical and electronic engineer. <br /> I specialize in creating innovative web solutions and providing expert engineering services, <br /> blending technology and creativity to deliver exceptional results. <br /> Whether you need a dynamic website or sophisticated electronic systems, <br /> my expertise ensures top-quality results tailored to your needs. <br/> Explore my portfolio to see how I can bring your projects to life.</p>
        
        <div className='hire-me'>
        <button>Hire me</button>
        </div>
        

      </div>
      <div className='personal-img'>
        <div className='img'>
          <img src={ detail.capt} alt=''/>

        </div>
      </div>

    </div>
  )
}

export default About