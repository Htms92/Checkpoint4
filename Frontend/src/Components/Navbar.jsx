import React from 'react';
import './Style.css';
import reportWebVitals from './reportWebVitals';

reportWebVitals();

export default function Navbar() {
    return (

        <section class="container" id="Navigation">
      <img src="assets/crown.jpg" alt="Logo" class="logo" />

      <ul>
        <li>
          <a href="index.html"><b>Home</b></a>
        </li>
        <li>
          <a href="royalfamily.html"><b>Royal Family</b></a>
        </li>
        <li>
          <a href="royalassets.html"><b>Royal Assets</b></a>
        </li>
        <li>
          <a href="contactus.html"><b>Contact Us</b></a>
        </li>
      </ul>
    </section>
    );
    }
