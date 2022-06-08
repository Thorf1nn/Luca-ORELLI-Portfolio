import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import Linkedin from "../../img/linkedin.png";
import React, { useRef, useState } from 'react';
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_jiwp02v",
        "template_9dk0gbp",
        formRef.current,
        "xvpGCP7hgL1bLKJKT"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Contacts : </h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              07 85 69 98 36
            </div>
            <div className="c-info-item">
              <img src={Email} alt="" className="c-icon" />
              luca.orelli@epitech.eu
            </div>
            <div className="c-info-item">
              <img src={Address} alt="" className="c-icon" />
              113 rue Paul Choulot - Montpellier
            </div>
            <div className="c-info-item">
              <img src={Linkedin} alt="" className="c-icon" />
              Luca ORELLI
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>Vous souhaitez me contacter ?</b> Je recherche actuellement un stage
            de 4 à 6 mois.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Nom" name="user_name" />
            <input type="text" placeholder="Objet" name="user_subject" />
            <input type="text" placeholder="Email" name="user_email" />
            <textarea rows="5" placeholder="Message" name="message" />
            <button>Envoyez</button>
            {done && "Merci Beaucoup !"}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
