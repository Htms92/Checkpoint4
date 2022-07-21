import React from 'react';
import './Style.css';
import reportWebVitals from '../reportWebVitals';
import Navbar from 'Navbar.jsx';

reportWebVitals();

export default function Home() {
    return (

      <div className="body">

<Navbar></Navbar>

    <section class="”container”" id="Hero">
      <h1>
        Welcome to the Royal Kingdom of Colchis
      </h1>
      <h4><u>About the kingdom</u></h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod
        tempor incidunt ut labore et dolore magna aliqua
      </p>
    </section>
    </div>
    );
  }