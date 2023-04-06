import "./contact.css";
import { MdOutlineMail } from "react-icons/md";
import { TfiTwitter } from "react-icons/tfi";
import { RiWhatsappFill } from "react-icons/ri";
import React, { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_m0v9zqf",
      "template_lbltvvb",
      form.current,
      "lXHGb1Jls7a2uCeeM"
    );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>Dannieimeh@gmail.com</h5>
            <a href="mailto:dannieimeh@gmail.com" target="_blank">
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <TfiTwitter className="contact__option-icon" />
            <h4>Twitter</h4>
            <h5>Daniel David</h5>
            <a href="https://twitter.com/Dannie_Imeh" target="_blank">
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <RiWhatsappFill className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>WhatsApp Me</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+2348125875061"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your full name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your Email"
            required
          />
          <textarea
            name="message"
            cols="7"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>

          <button className="btn btn-primary" type="submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
