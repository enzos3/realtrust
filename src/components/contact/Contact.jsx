import React, { useRef } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_auw8t4f",
        "template_vnfecrb",
        form.current,
        "-5wCsMNuOJEOYB4uK"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Lets talk!</h5>
      <h2>Contact</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>realtrust@gmail.com</h5>
            <a
              href='mailto:realtrust@gmail.com'
              target='_blank'
              rel='noreferrer'>
              Send an Email.
            </a>
          </article>
          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>Real Trust</h5>
            <a href='https://m.me/real.trust' target='_blank' rel='noreferrer'>
              Lets Chat!
            </a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon' />
            <h4>Whatsapp</h4>
            <a
              href='https://api.whatsapp.com/send?phone=542634803419'
              target='_blank'
              rel='noreferrer'>
              Send a Whatsapp.
            </a>
          </article>
        </div>
        {/* End of contact Options */}
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Name' required />
          <input type='email' name='email' placeholder='Email' required />

          <textarea
            name='message'
            rows='7'
            placeholder='Your message.'
            required></textarea>
          <button type='submit' className='btn btn-primary'>
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
