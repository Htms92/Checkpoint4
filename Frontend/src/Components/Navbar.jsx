import React from 'react';
import './Style.css';
import reportWebVitals from './reportWebVitals';

reportWebVitals();

export default function Navbar() {
    return (

        <section class="container" id="Navigation">
      <img src="Assets/crown.jpg" alt="Logo" class="logo" />

      <ul>
        <li>
          <a href="Home.jsx"><b>Home</b></a>
        </li>
        <li>
          <a href="Royalfamily.jsx"><b>Royal Family</b></a>
        </li>
        <li>
          <a href="Royalassets.jsx"><b>Royal Assets</b></a>
        </li>
        <li>
          <a href="Contactus.jsx"><b>Contact Us</b></a>
        </li>
      </ul>
    </section>
    );
    }
