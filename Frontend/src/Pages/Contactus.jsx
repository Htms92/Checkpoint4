import React from 'react';
import './Style.css';
import reportWebVitals from '../reportWebVitals';
import Navbar from 'Navbar.jsx';

reportWebVitals();

export default function Contactus() {
    return (

<div className="body">

<Navbar></Navbar>

    <section id="contact">
    <h2>Contact the Royal Kingdom</h2>

      <form id="contactForm">
        <label for="name"><b>Name</b></label
        ><br />
        <input type="text" id="name" name="name" /><br /><br />

        <label for="email"><b>Email</b></label
        ><br />
        <input type="email" id="email" name="email" /><br /><br />

        <label for="message"><b>Message</b></label
        ><br />
        <textarea id="message" name="message"></textarea>
        <br /><br />

        <input type="submit" value="Submit" />
      </form>
    </section>

    </div>
    );
  }

  const message =
  "Thank you for submitting. You'll be contacted as soon as possible.";

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert(message);
  });
