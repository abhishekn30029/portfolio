import React, { useRef } from 'react'
import './contact.css'
import github from '../../assets/githublogo.png'
import instagram from '../../assets/Instagram.png'
import linkedin from '../../assets/linkedin.png'
import leetcode from '../../assets/leetcode.png'
import emailjs from '@emailjs/browser'
function Contact(){
    let form=useRef()
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_vi5cy69', 'template_mu1490d', form.current, 'q7e1qEDlwITMVBzWv')
          .then((result) => {
              alert("successfull \n thank you for submitting");
              document.location.reload()
          }, (error) => {
              alert("faild please try again")
          });
      };
  return (
    <div className='contact' id='contact' style={{marginBottom:'50px'}}>
      <h1 className="contacttitel">Contact Me</h1>
      <p className="contactdesc">Please fill out the form below to discuss any work oportunities</p>
      <form className="contactform" ref={form} onSubmit={sendEmail}>
        <input type="text" className="textinput" name='name' placeholder='Your Name' required/>
        <input type="tel" className="textinput" name='phone'placeholder='contact number(optional)' pattern='[0-9]{10}'/>
        <input type="email" className="textinput" name='email'placeholder='email' required/>
        <textarea className="textinput" name='message'  rows="5" placeholder='Your message' required></textarea>
        <button type='submit' className='submitbtn'> Submit</button>
      </form>
      <div className="sociallinks">
        <a href='https://leetcode.com/Abhishekn30029/'><img src={leetcode} alt="lettcode" className="sociallinklogo" /></a>
        <a href='https://www.instagram.com/abhishek_n30029/'><img src={instagram} alt="instagram" className="sociallinklogo" /></a>
        <a href='https://github.com/abhishekn30029/'><img src={github} alt="github" className="sociallinklogo" /></a>
        <a href='https://www.linkedin.com/in/-abhishek-n/'><img src={linkedin} alt="linkedin" className="sociallinklogo" /></a>

      </div>
    </div>
  )
}

export default Contact
