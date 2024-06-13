import React, { useRef } from 'react';
import styles from './ContactStyles.module.css';
import emailjs from '@emailjs/browser';
function Contact() {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_fmuxjk7', 'template_x7zmvco', form.current, {
        publicKey: 'Vx1wVW9lU3-Ip4Ah9',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section id="contact" className={styles.container}>
        <h1 className="sectionTitle">
            Contact
        </h1>
        <form action="" ref={form} onSubmit={sendEmail}>
            <div className="formGroup">
                <label htmlFor="name" hidden>
                    Name
                </label>
                <input 
                type="text" 
                name="to_name" 
                id="name" 
                placeholder="NAME" 
                required/>
            </div>
            <div className="formGroup">
                <label htmlFor="email" hidden>
                    Email
                </label>
                <input 
                type="text" 
                name="from_name" 
                id="email" 
                placeholder="EMAIL" 
                required/>
            </div>
            <div className="formGroup">
                <label htmlFor="message" hidden>
                    Message
                </label>
                <textarea 
                name="message" 
                id="message" 
                placeholder="Message" 
                required></textarea>
            </div>
            <input type="submit" className='hover btn' value="Submit"/>
        </form>
    </section>
  )
}

export default Contact