import React, { useRef } from 'react'
import './Main.css'
import { detail } from '../../asset/images'
import emailjs from '@emailjs/browser';


const Main = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ndd9o9r', 'template_ais0dre', form.current, {
        publicKey: '6Hzx4bn6cNfVTYLTr',
      })
      .then(
        () => {
          alert('Email sent')
          e.target.reset()
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className='main'>

      <div className='what-i-do'>
        <h1>What i do.</h1>
        <p>I am a skilled web developer and a professional electrical and electronic engineer.
          I specialize in creating innovative web solutions and providing expert engineering services,
          blending technology and creativity to deliver exceptional results <br /> I am proficient in HTML,CSS and JavaScript, as well as design software like Adobe Photoshop.
        </p>
        
      </div>

      <div className='three-div'>

        <div className='website-design design'>
          <img src={detail.ul1 } alt='' />
          <h2>UI/UX Design</h2>
        </div>

        <div className='photoshop-design design'>
          <img src={detail.web1} alt='' />
          <h2>Website Design</h2>
        </div>

        <div className='ul-design design'>
          <img src={detail.photo} alt='' />
          <h2>Photoshop Design</h2>
        </div>
        <div className='ul-design design'>
          <img src={detail.eng1} alt='' />
          <h2>An Electrical / Electroinc Engineer</h2>
        </div>

      </div>

      <div className='my-portfolio'>
        
        <div className='portfolio'>
          <h1>My portfolio</h1>
          <p>I take pride in paying attention to the smallest datails and making sure that my works are perfect. <br/> I am ecited to bring my skills and experience to help businesses achieve their goals and create a strong online presence.</p>
        </div>

        <div className='portfolio-image'>

          <div className='port-images'>
            <img src={detail.eng2} alt='' />
            <img src={detail.ul3} alt=''/>
            <img src={detail.web2} alt='' />
            <img src={detail.web1} alt=''/>
            <img src={detail.ul2} alt='' />
            <img src={detail.eng4} alt=''/>
            <img src={detail.web3} alt='' />
            <img src={detail.eng3} alt=''/>

          </div>

        </div>


        <div className='main-form'>

          <form className='form' ref={form} onSubmit={sendEmail}>
            <div className='form-inner'>
              <input type='text' placeholder='Your name' name="user_name"  required/>
              <input type='email' placeholder='Email' name="user_email"  required/>
              
              <textarea placeholder='Your suggestion' name="message" required></textarea>


            </div>
            <div className='btn'>
            <button type='submit' value='Send'>Submit</button>

            </div>
           

          </form>
        </div>

        
        <div className='footer'>

          <div className='footer-inner'>
            <p>Contact me : 0547243342</p>
            <p>Email : sanyieprince@gmail.com</p>

          </div>

        </div>

      </div>


    </div>
  )
}

export default Main