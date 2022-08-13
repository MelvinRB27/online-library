import '../css/contact.css';
import Logo from '../img/Library (3).png';
import contactName from '../img/contact.png'

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const Contact = () => {
    const form = useRef();

    const alert = (txt) => {
        if (txt === 'Mail sent successfully '){
            Swal.fire({
            icon: 'success',
            text: txt,
            showConfirmButton: false,
            timer: 1500
        })} else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: txt,
                showConfirmButton: true,
                timer: 1500
            })
        }}

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_ylbr9xm', 'template_h9y5tge', form.current, 'JcBkDi2dd17ydk17f')
          .then((result) => {
              console.log(result.text);
              alert('Mail sent successfully ')
          }, (error) => {
              console.log(error.text);
              alert('The mail could not be sent ')
          });
      };

    return (
        <div className='containerContact'>
            <div className='titlePage' > <img alt='book' src={contactName} data-aos="zoom-in-up"/> </div>
            <br/>

            <div className='contactNE' data-aos="fade-down-right">
                <h5>Phone</h5>
                <p>809-000-0000</p>

                <h5>Email</h5>
                <p><a href="mailto:support@LibraryMJ.com">LibraryMJ.RD@gmail.com</a></p>
            </div>
            <br/>
            <br/>
            <form className='formContact' ref={form} onSubmit={sendEmail} data-aos="fade-up">

                <img src={Logo} alt="Logo" />

                <label htmlFor="username">Username</label>
                <input type="text" placeholder="Name" name="user_name" id="username" required/>

                <label htmlFor="email">Email</label>
                <input type="email" placeholder="Email" name="email" id="email" required/>

                <label htmlFor="textare">Your message</label>
                <textarea type="text" name='message' id="textare" required/>

                <button type='submit' value='submit' className='btnLogin'>Send message</button>
            </form>
        </div>
    )

}



export default Contact;