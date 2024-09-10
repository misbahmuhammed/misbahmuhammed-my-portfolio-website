import React from 'react';
import './contact.css';
import { MdEmail } from 'react-icons/md';
import { ImLinkedin } from 'react-icons/im';
import { IoLogoWhatsapp } from 'react-icons/io';
import { useRef } from 'react';
import emailjs from 'emailjs-com' 
const Contact=()=> {
 
  const form=useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_oy8w9ig', 'template_z2c2vak', form.current, 'tYmIy6C-VJh6daUoD')
    e.target.reset()
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdEmail className="contact_option-icon" />
            <h4>Email</h4>
            <h5>misbahmuhammedofficial@gmail.com</h5>
           <a href="mailto:misbahmuhammedofficial@gmail.com" target="_blank" rel="noreferrer"> Send A Message</a>

          </article>
          <article className="contact_option">
            <ImLinkedin className="contact_option-icon" />
            <h4>Linkedin</h4>
            <h5>Misbah A</h5>
            <a
              href="https://www.linkedin.com/in/misbahmuhammed/message/"
              target="_blank"
            >
              Send A Message
            </a>
          </article>
          <article className="contact_option">
            <IoLogoWhatsapp className="contact_option-icon" />
            <h4>WhatsApp</h4>
            <h5>Misbah A</h5>
            <a
              href="https://api.whatsapp.com/send/?phone=7510764209&text&type=phone_number&app_absent=0"
              target="_blank"
            >
              Send A Message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email Id" required />
          <textarea name="message" id="" rows="5" placeholder='Your Message'></textarea>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
