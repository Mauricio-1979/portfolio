import React, { useState } from 'react';

import { images } from '../../constants';
import { AppWrapper, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss';

const Footer = () => {

  const [formData, setformData] = useState({name:'', email: '', message: ''});
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const {name, email, message} = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setformData({ ...formData, [name]: value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: formData.name,
      email: formData.email,
      message: formData.message
    }

    client.create(contact).then(() => {
      setLoading(false);
      setIsFormSubmitted(true);
    }).catch((err) => console.log(err))
  }

  return (
    <>
      <h2 className='head-text'>Get in touch with me</h2><br/>

      <div className='app__footer-cards'>
        <div className='app__footer-card'>
          <img src={images.email} alt='email' />
          <a href='mailto:mauricio_bo@hotmail.com' className='p-text'>mauricio_bo@hotmail.com</a>
        </div>
        {/* <div className='app__footer-card'>
          <img src={images.mobile} alt='email' />
          <a href='tel:+54(0221)15-655-4549' className='p-text'>54 (0221) 15-655-4549</a>
        </div> */}
      </div>
      {!isFormSubmitted ?
      <div className='app__footer-form app__flex'>
        <div className='app__flex'>
          <input className='p-text' type='text' placeholder='Your Name' value={name} name='name' onChange={handleChangeInput} />
        </div>
        <div className='app__flex'>
          <input className='p-text' type='email' placeholder='Your email' value={email} name='email' onChange={handleChangeInput} />
        </div>
        <div>
          <textarea
            className='p-text'
            placeholder='Your Message'
            value={message}
            name='message'
            onChange={handleChangeInput}
          />
        </div>
        <button type='button' className='p-text' onClick={handleSubmit} >{loading ? 'Sending' : 'Send Message'}</button>
      </div>
      :
      <div>
        <h3 className='head-text'>Thank you for getting in touch!</h3>
      </div>}
    </>
  )
}

export default  AppWrapper(
  MotionWrap(Footer, 'app__footer'),
    'contact',
    'app__primarybg'
  );